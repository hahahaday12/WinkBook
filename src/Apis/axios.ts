import axios, { AxiosError, AxiosInstance } from 'axios';

const { VITE_CLIENT_ID, VITE_KDT5_BASEURL } = import.meta.env;

const authInterceptors = (instance: AxiosInstance): AxiosInstance => {
  instance.interceptors.request.use(
    (config) => {
      // 로컬스토리지에 저장되어 있는 AccessToken을 호출.
      const token = localStorage.getItem('token');
      if (config.headers && token) {
        // accessToken이 정상적으로 저장 => headers에 authorization 값을 추가.
        config.headers.Authorization = `Bearer ${token}`;
      }
      // authorization을 추가한 config 반환
      return config;
    },
    (error: AxiosError): Promise<AxiosError> => {
      return Promise.reject(error);
    }
  );
  return instance;
};

// Authorization 설정이 없는 일반 사용자 API용 Instance
export const baseInstance: AxiosInstance = axios.create({
  baseURL: VITE_KDT5_BASEURL,
});

// Authorization 설정이 추가된 로그인한 사용자 API용 Instance --유저 API 에서 공통적으로 사용할 인스턴스
export const authInstance: AxiosInstance = authInterceptors(baseInstance);

export const cafeInstance: AxiosInstance = axios.create({
  baseURL: '/cafe24',
  headers: {
    'Content-Type': 'application/json',
    'X-Cafe24-Api-Version': '2023-03-01',
    'X-Cafe24-Client-Id': VITE_CLIENT_ID,
  },
});
