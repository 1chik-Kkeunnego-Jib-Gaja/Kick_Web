import * as S from "./style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignUp } from "../../context/SignUpContext";
import MenuLogo from "../../assets/menu.svg";
import vegetarian from "../../assets/vegetarian.svg";
import meatLover from "../../assets/meatlover.svg";
import HoverVegetarian from "../../assets/hoverVegetarian.svg";
import HoverMeatLover from "../../assets/hoverMeatLover.svg";

export const Menu = () => {
  const navigate = useNavigate();
  const { updateSignUpData } = useSignUp();
  const [isVegetarianHovered, setIsVegetarianHovered] = useState(false);
  const [isMeatLoverHovered, setIsMeatLoverHovered] = useState(false);
  const [isNoButtonClicked, setIsNoButtonClicked] = useState(false);

  const handleNoButtonClick = () => {
    setIsNoButtonClicked(!isNoButtonClicked);
    updateSignUpData({ eatingStyle: "NONE" });
    navigate("/target");
  };

  const handleNextButton = () => {
    if (!isNoButtonClicked) {
      alert("선호하는 식단을 선택하거나 '딱히 없습니다'를 선택해주세요.");
      return;
    }
    navigate("/target");
  };

  return (
    <S.MenuLayout>
      <S.MenuLogo src={MenuLogo} alt="menu" />
      <S.Title>
        <S.span>선호</S.span>하는 식단이 있으신가요?
      </S.Title>

      <S.Content>당신이 선호하는 식단에 대해 알려주세요!</S.Content>

      <S.MenuBox>
        <S.VegetableBox
          onMouseEnter={() => setIsVegetarianHovered(true)}
          onMouseLeave={() => setIsVegetarianHovered(false)}
          onClick={() => navigate("/vegetable")}
        >
          <S.Vegetable
            src={isVegetarianHovered ? HoverVegetarian : vegetarian}
            alt="vegetarian"
          />
          <S.VegetableName>채식 주의자</S.VegetableName>
        </S.VegetableBox>

        <S.MeatLoverBox
          onMouseEnter={() => setIsMeatLoverHovered(true)}
          onMouseLeave={() => setIsMeatLoverHovered(false)}
          onClick={() => navigate("/meat")}
        >
          <S.MeatLover
            src={isMeatLoverHovered ? HoverMeatLover : meatLover}
            alt="meatLover"
          />
          <S.MeatLoverName>육식 주의자</S.MeatLoverName>
        </S.MeatLoverBox>
      </S.MenuBox>
      <S.ButtonBox>
        <S.NoButton onClick={handleNoButtonClick} isClicked={isNoButtonClicked}>
          딱히 없습니다.
        </S.NoButton>
        <S.NextButton onClick={handleNextButton}>넘어가기</S.NextButton>
      </S.ButtonBox>
    </S.MenuLayout>
  );
};
