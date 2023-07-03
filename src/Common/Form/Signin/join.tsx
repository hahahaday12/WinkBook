import { FormEvent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { PwCheck, emailCheck } from "../Validation ";
import { JoinForm } from "@/Apis/register";
import "./join.scss";
import Swal from "sweetalert2";

function Join() {
  const navigate = useNavigate();

  // 이름 , 비밀번호, 이메일 , 비밀번호 확인
  const [email, setUserEmail] = useState("");
  const [displayName, setdDisplayName] = useState("");
  const [password, setUserPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profileImgBase64, setProfileImgBase64] = useState<string>("");

  //비밀번호 유효성 검사
  const [isName, setIsName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  //오류 메세지 저장
  const [nameMessage, setNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");

  const onChangeEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const emails = e.target.value;
      setUserEmail(emails);
      if (emailCheck(emails)) {
        setEmailMessage("올바른 이메일 형식이에요 : )");
        setIsEmail(true);
      } else {
        setEmailMessage("이메일 형식이 틀렸습니다");
        setIsEmail(false);
      }
    },
    []
  );

  const onChangeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setdDisplayName(e.target.value);
    if (e.target.value.length < 2 || e.target.value.length > 21) {
      setNameMessage("2글자 이상 21글자 미만으로 입력해주세요.");
      setIsName(false);
    } else {
      setNameMessage("올바른 이름 형식입니다 :)");
      setIsName(true);
    }
  }, []);

  const onChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const passwordCurrent = e.target.value;
      setUserPassword(passwordCurrent);

      if (!PwCheck(passwordCurrent)) {
        setPasswordMessage("8자리 이상 입력해주세요.");
        setIsPassword(false);
      } else {
        setPasswordMessage("안전한 비밀번호에요 : )");
        setIsPassword(true);
      }
    },
    [confirmPassword]
  );

  const onChangePasswordConfirm = (
    password: any,
    confirmPassword: any,
    setPasswordConfirmMessage: any,
    setIsPasswordConfirm: any
  ) => {
    if (password === confirmPassword) {
      setPasswordConfirmMessage("비밀번호를 똑같이 입력했어요 : )");
      setIsPasswordConfirm(true);
    } else {
      setPasswordConfirmMessage("비밀번호가 틀립니다. 다시 입력해주세요.");
      setIsPasswordConfirm(false);
    }
  };

  const onPasswordConfirmChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const passwordConfirmCurrent = e.target.value;
      setConfirmPassword(passwordConfirmCurrent);
      onChangePasswordConfirm(
        password,
        passwordConfirmCurrent,
        setPasswordConfirmMessage,
        setIsPasswordConfirm
      );
    },
    [password]
  );

  const UploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64Data = reader.result as string;
      setProfileImgBase64(base64Data);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  async function signUp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email) {
      Swal.fire("이메일을 입력해주세요!", "", "warning");
      return false;
    }

    if (!isEmail || !isPassword || !isPasswordConfirm) {
      Swal.fire("값이 잘못 되었습니다.", "다시 입력해주세요", "warning");
      return false;
    }

    try {
      const res = await JoinForm(
        email,
        displayName,
        password,
        profileImgBase64
      );

      if (res.accessToken) {
        Swal.fire("가입되었습니다!", "찾아주셔서 감사합니다:)", "success").then(
          () => {
            navigate("/login");
          }
        );
      } else {
        Swal.fire("가입에 실패했습니다.", "다시 시도해주세요", "error");
      }
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "401") {
          Swal.fire("중복된 아이디입니다.", "", "warning");
        } else {
          console.error("오류가 발생했습니다:", error);
        }
      } else {
        console.error("오류가 발생했습니다:", error);
      }
    }
  }

  return (
    <>
      <div className="joinContainer">
        <form className="joinContainer-inner" onSubmit={signUp}>
          <div className="textContainer">
            <p>회원가입📖</p>
          </div>

          <div className="formBox">
            <div className="formBox-inner">
              <input
                placeholder="이메일을 입력하세요"
                autoComplete="off"
                type={"text"}
                name={"email"}
                onChange={onChangeEmail}
              />
              {email.length > 0 && (
                <span className={`message ${isEmail ? "success" : "error"}`}>
                  {emailMessage}
                </span>
              )}
            </div>

            <div className="formBox-inner">
              <input
                placeholder="이름을 입력하세요"
                autoComplete="off"
                type={"text"}
                name={"name"}
                onChange={onChangeName}
              />
              {displayName.length > 0 && (
                <span className={`message ${isName ? "success" : "error"}`}>
                  {nameMessage}
                </span>
              )}
            </div>

            <div className="formBox-inner">
              <input
                placeholder="비밀번호를 입력하세요"
                autoComplete="off"
                type={"password"}
                name={"password"}
                onChange={onChangePassword}
              />
              {password.length > 0 && (
                <span className={`message ${isPassword ? "success" : "error"}`}>
                  {passwordMessage}
                </span>
              )}
            </div>

            <div className="formBox-inner">
              <input
                placeholder="비밀번호를 한번 더 입력해주세요"
                autoComplete="off"
                type={"password"}
                name={"passwordConfirm"}
                onChange={onPasswordConfirmChange}
              />
              {confirmPassword.length > 0 && (
                <span
                  className={`message ${
                    isPasswordConfirm ? "success" : "error"
                  }`}
                >
                  {passwordConfirmMessage}
                </span>
              )}
            </div>

            <div className="uploadFilebox">
              <div className="uploadFilebox-inner">
                <span>프로필 이미지 고르기🍒</span>
                <input
                  type="file"
                  id="file"
                  name="file"
                  accept="image/*"
                  onChange={UploadImage}
                />
              </div>
            </div>

            <div className="buttonContainer">
              <button
                className="buttonBox"
                type="submit"
                disabled={
                  !(isName && isEmail && isPassword && isPasswordConfirm)
                }
              >
                등록
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Join;
