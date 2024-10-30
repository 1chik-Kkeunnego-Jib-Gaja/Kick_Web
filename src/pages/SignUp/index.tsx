import * as S from "./style";
import { useNavigate } from "react-router-dom";
import Kick from "../../assets/Kick.svg";
import SignUpLogo from "../../assets/SINGUP.svg";

export const SignUp = () => {
  const navigate = useNavigate();

  return (
    <S.SignUpLayout>
      <S.Logo src={Kick} alt="Kick" />
      <S.SignUpBox>
        <S.Background>
          <S.SignUpTitle src={SignUpLogo} alt="SignUp" />
          <S.SignUpText>
            맛을 <S.span>극대화</S.span>하러 오신 것을 환영합니다!
          </S.SignUpText>

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
          <S.SignUpButton onClick={() => navigate("/Allergy")}>
            확인
          </S.SignUpButton>

          <S.Text onClick={() => navigate("/login")}>로그인하러 가기</S.Text>
        </S.Background>
      </S.SignUpBox>
    </S.SignUpLayout>
  );
};
