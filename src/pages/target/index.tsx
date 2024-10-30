import * as S from "./style";
import HealthLogo from "../../assets/health.svg";

export const Target = () => {
  return (
    <S.TargetLayout>
      <S.MenuLogo src={HealthLogo} alt="menu" />
      <S.Title>
        <S.span>건강</S.span>목표를 작성해주세요!
      </S.Title>

      <S.Content>건강 목표를 설정하여 거기에 맞춰</S.Content>
      <S.Content> 식단을 짜봅시다.</S.Content>
      <S.IDBox>
        <S.IDInput placeholder="건강 목표를 입력해주세요." />
      </S.IDBox>
    </S.TargetLayout>
  );
};
