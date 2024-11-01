import * as S from "./style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Kick from "../../assets/Kick.svg";
import LoginLogo from "../../assets/LOGIN.svg";

export const Login = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!nickname || !password) {
      alert("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }

    try {
      const response = await fetch("http://211.112.175.88:9999/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nickname,
          password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(errorData);
      }

      const data = await response.json();

      // 토큰을 로컬 스토리지에 저장
      localStorage.setItem("token", data.accessToken);

      alert("로그인 성공!");
      navigate("/main");
    } catch (error) {
      console.error("로그인 에러:", error);
      alert("로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.");
    }
  };

  return (
    <S.LoginLayout>
      <S.Logo src={Kick} alt="Kick" />
      <S.LoginBox>
        <S.Background>
          <S.LoginTitle src={LoginLogo} alt="Login" />
          <S.LoginText>다시 오신 것을 환영합니다!</S.LoginText>

          <S.InputBox>
            <S.IDBox>
              <S.IDTitle>ID</S.IDTitle>
              <S.IDInput
                placeholder="아이디를 입력해주세요."
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
            </S.IDBox>
            <S.PassBox>
              <S.PassTitle>PASSWORD</S.PassTitle>
              <S.PassInput
                type="password"
                placeholder="비밀번호를 입력해주세요."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </S.PassBox>
          </S.InputBox>
          <S.LoginButton onClick={handleLogin}>확인</S.LoginButton>

          <S.Text onClick={() => navigate("/signup")}>회원가입하러 가기</S.Text>
        </S.Background>
      </S.LoginBox>
    </S.LoginLayout>
  );
};
