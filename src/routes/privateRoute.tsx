import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { TokenContext } from '@/Context/TokenContext';

interface PrivatePageProps {
  component: any;
  status: string;
}

function PrivatePage({component:Component, status:Status}: PrivatePageProps) {
  
  const tokenContext = useContext(TokenContext);
  const token = tokenContext?.token; 

  let tokenCheck = false;
  let result = null;

  if(token){
    tokenCheck  = true;
  }

  if(tokenCheck){
    result = Component;
  } else {
    if (!Status) {
      alert("접근할수 없는 페이지 입니다");
      result = <Navigate to="/login" />;
    } else {
      result = Status;
    }
  }
  return result;
}

export default PrivatePage


