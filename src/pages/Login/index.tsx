import * as S from "./style";
import Kick from "../../assets/Kick.svg";
import LoginLogo from "../../assets/LOGIN.svg";

export const Login = () => {
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
              <S.IDInput placeholder="아이디를 입력해주세요." />
            </S.IDBox>
            <S.PassBox>
              <S.PassTitle>PASSWORD</S.PassTitle>
              <S.PassInput placeholder="비밀번호를 입력해주세요." />
            </S.PassBox>
          </S.InputBox>
          <S.LoginButton>확인</S.LoginButton>

          <S.Text>회원가입하러 가기</S.Text>
        </S.Background>
      </S.LoginBox>
    </S.LoginLayout>
  );
};
