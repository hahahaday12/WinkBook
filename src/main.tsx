import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';

const token = localStorage.getItem('token');

// 토큰을 저장하는 함수
const saveTokenToLocalStorage = (token: string) => {
  localStorage.setItem('token', token);
};
// 토큰을 제거하는 함수
const removeTokenFromLocalStorage = () => {
  localStorage.removeItem('token');
};

if (token) {
  saveTokenToLocalStorage(token);
} else {
  removeTokenFromLocalStorage();
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
);
