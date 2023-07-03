import './login.scss';
import { useNavigate, Link } from 'react-router-dom';
import { FormEvent, useState, ChangeEvent } from 'react';
import { useEffect } from 'react';
import { LoginForm } from '@/Apis/register';
import Swal from 'sweetalert2';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/');
    }
  }, []);

  async function Signin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (email === undefined || email === '' || email === null) {
      Swal.fire('이메일을 입력해주세요!', '', 'warning');
      return false;
    }

    if (password === undefined || password === '' || password === null) {
      Swal.fire('비밀번호를 입력해주세요!', '', 'warning');
      return false;
    }

    try {
      const data = await LoginForm(email, password);
      if (data.accessToken) {
        window.localStorage.setItem('token', data.accessToken);
        Swal.fire('로그인 되었습니다!', '반갑습니다:)', 'success').then(() => {
          navigate('/');
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire('로그인에 실패하였습니다:(', '다시 시도해주세요!', 'error');
    }
  }

  return (
    <>
      <div className="LoginContainer">
        <div className="loginContainer-inner">
          <form onSubmit={Signin}>
            <div className="JoinTextContainer">
              <p>로그인</p>
            </div>

            <div className="formBox">
              <div className="formBox-inner">
                <input
                  placeholder="이메일을 입력하세요"
                  autoComplete="off"
                  type="text"
                  name="email"
                  value={email}
                  onChange={onChangeEmail}
                />
              </div>

              <div className="formBox-inner">
                <input
                  placeholder="비밀번호를 입력하세요"
                  autoComplete="off"
                  type="password"
                  name="password"
                  value={password}
                  onChange={onChangeName}
                />
              </div>

              <div className="buttonContainer">
                <button className="buttonBox" type="submit">
                  로그인
                </button>
              </div>
            </div>
          </form>

          <div className="bottomText">
            <p>아이디가 없으신가요?</p>
            <Link
              style={{
                marginLeft: '20px',
              }}
              to="/join"
            >
              <p>회원가입 하러 가기!</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
