import * as S from "./style";
import kick from "../../assets/KickLogo.svg";
import explain from "../../assets/explain.svg";
import black from "../../assets/blackcat.svg";
import white from "../../assets/whitecat.svg";
import { useNavigate } from "react-router-dom";

export const Landing = () => {
  const navigate = useNavigate();
  return (
    <S.LandingLayout>
      <S.Logo src={kick} alt="kick" />
      <S.Explain src={explain} alt="explain" />
      <S.Black src={black} alt="black" />
      <S.White src={white} alt="white" />
      <S.ButtonBox>
        <S.LoginButton onClick={() => navigate("/login")}>로그인</S.LoginButton>
        <S.SignUpButton onClick={() => navigate("/signup")}>
          회원가입
        </S.SignUpButton>
      </S.ButtonBox>
    </S.LandingLayout>
  );
};
