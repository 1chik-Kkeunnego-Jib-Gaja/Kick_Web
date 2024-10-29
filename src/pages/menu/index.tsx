import * as S from "./style";
import MenuLogo from "../../assets/menu.svg";
import vegetarian from "../../assets/vegetarian.svg";
import meatLover from "../../assets/meatlover.svg";

export const Menu = () => {
  return (
    <S.MenuLayout>
      <S.MenuLogo src={MenuLogo} alt="menu" />
      <S.Title>
        <S.span>선호</S.span>하는 식단이 있으신가요?
      </S.Title>

      <S.Content>당신이 선호하는 식단에 대해 알려주세요!</S.Content>

      <S.MenuBox>
        <S.VegetableBox>
          <S.Vegetable src={vegetarian} alt="vegetarian" />
          <S.VegetableName>채식 주의자</S.VegetableName>
        </S.VegetableBox>

        <S.MeatLoverBox>
          <S.MeatLover src={meatLover} alt="meatLover" />

          <S.MeatLoverName>육식 주의자</S.MeatLoverName>
        </S.MeatLoverBox>
      </S.MenuBox>
      <S.ButtonBox>
        <S.NoButton>딱히 없습니다.</S.NoButton>
        <S.NextButton>넘어가기</S.NextButton>
      </S.ButtonBox>
    </S.MenuLayout>
  );
};
