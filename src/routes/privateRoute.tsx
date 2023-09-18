import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { TokenContext } from '@/Context/TokenContext';

interface PrivateRouteProps {
  component: React.ReactNode;
}

function PrivateRoute({ component }: PrivateRouteProps) {
  const tokenContext = useContext(TokenContext);
  const token = tokenContext?.token;

  if (!token) {
    // 토큰이 없을 경우 로그인 페이지로 리다이렉트
    alert('접근할수 없는 페이지 입니다');
    return <Navigate to="/login" />;
  }

  return <>{component}</>;
}

export default PrivateRoute;
