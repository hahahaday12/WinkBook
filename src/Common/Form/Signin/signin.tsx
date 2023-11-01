import { useNavigate, Link } from 'react-router-dom';
import { useContext } from 'react';
import { LoginForm } from '@/Apis/register';
import Swal from 'sweetalert2';
import { TokenContext } from '@/Context/TokenContext';
import './signin.scss';
import { useForm } from 'react-hook-form';

export interface IForm {
  email: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();
  const tokenContext = useContext(TokenContext);
  const {
    register,
    handleSubmit: onSubmit,
    formState: { isSubmitting },
  } = useForm<IForm>({
    mode: 'onSubmit',
    defaultValues: {
      email: 'testt@gmail.com',
      password: '123456789',
    },
  });

  async function handleSubmit(data: IForm) {
    console.log(data);

    if (data.email === undefined || data.email === '' || data.email === null) {
      Swal.fire('이메일을 입력해주세요!', '', 'warning');
      return false;
    }

    if (
      data.password === undefined ||
      data.password === '' ||
      data.password === null
    ) {
      Swal.fire('비밀번호를 입력해주세요!', '', 'warning');
      return false;
    }

    try {
      const logindata = await LoginForm(data);
      if (logindata.accessToken) {
        tokenContext?.setToken(logindata.accessToken);
        window.localStorage.setItem('token', logindata.accessToken);
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
          <form onSubmit={onSubmit(handleSubmit)}>
            <div className="JoinTextContainer">
              <p>로그인</p>
            </div>

            <div className="formBox">
              <div className="formBox-inner">
                <input
                  placeholder="아이디 입력"
                  autoComplete="off"
                  type="text"
                  {...register('email', {
                    required: '',
                  })}
                />
              </div>

              <div className="formBox-inner">
                <input
                  placeholder="비밀번호 입력"
                  autoComplete="off"
                  type="password"
                  {...register('password', {
                    required: '',
                  })}
                />
              </div>

              <div className="buttonContainer">
                <button
                  className="buttonBox"
                  type="submit"
                  disabled={isSubmitting}
                >
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
