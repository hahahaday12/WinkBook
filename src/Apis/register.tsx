import { authInstance, baseInstance } from './axios';
import { IForm } from '@/Common/Form/Signin/signin';

const { VITE_KDT5_API, VITE_KDT5_USER } = import.meta.env;

const headers = {
  'Content-Type': 'application/json',
  apikey: VITE_KDT5_API,
  username: VITE_KDT5_USER,
};

export const JoinForm = async (
  email: string,
  displayName: string,
  password: string,
  profileImgBase64: string
) => {
  const URL = '/signup';
  const res = await baseInstance.post(URL, {
    email,
    displayName,
    password,
    profileImgBase64,},
    {headers});
  return res.data;
};

export const LoginForm = async (data: IForm) => {
  const LOGINURL = '/login';
  const res = await baseInstance.post(
    LOGINURL,data,{ headers });
  return res.data;
};

export const LogoutForm = async () => {
  const LOGOUTURL = '/logout';
  const res = await authInstance.post(LOGOUTURL,{},{ headers });
  return res.data;
};

export const TokenMe = async () => {
  const AUTHME = '/me';
  const res = await authInstance.post(AUTHME,{},{ headers }
  );
  return res.data;
};

export const InfoToken = async (
  displayName: string,
  profileImgBase64: string,
  oldPassword: string,
  newPassword: string
) => {
  const InfoMe = '/user';
  const res = await authInstance.put(InfoMe,
    { displayName, profileImgBase64, oldPassword, newPassword },
    { headers }
  );
  return res.data;
};
