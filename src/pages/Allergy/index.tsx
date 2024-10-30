import React, { useState, useEffect } from "react";
import Window from "../../assets/Window.svg";
import { allergyData } from "../../data";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useSignUp, AllergyType } from "../../context/SignUpContext";

type AllergyItem = {
  id: number;
  name: string;
  imgUrl: string;
  clickUrl: string;
  english?: string;
  isSelected?: boolean;
};

export const Allergy = () => {
  const navigate = useNavigate();

  return (
    <S.AllergyLayout>
      <S.Window src={Window} alt="Window" />
      <S.Title>
        <S.Highlight>알러지</S.Highlight>가 있는 음식을 골라주세요
      </S.Title>
      <S.Content>알러지가 있는 음식 조합은 피해서</S.Content>
      <S.Content>추천해드립니다.</S.Content>
      <AllergySelector />
      <S.NextButton onClick={() => navigate("/menu")}>다음</S.NextButton>
    </S.AllergyLayout>
  );
};

const AllergySelector: React.FC = () => {
  const { updateSignUpData } = useSignUp();
  const [allergies, setAllergies] = useState(
    allergyData.map((item) => ({ ...item, isSelected: false })),
  );

  const handleSelect = (id: number) => {
    setAllergies((prevAllergies) =>
      prevAllergies.map((item) =>
        item.id === id ? { ...item, isSelected: !item.isSelected } : item,
      ),
    );
  };

  useEffect(() => {
    const selectedAllergies = allergies
      .filter((item) => item.isSelected && item.english)
      .map((item) => item.english as AllergyType);

    updateSignUpData({ allergy: selectedAllergies });
  }, [allergies, updateSignUpData]);

  return (
    <S.ItemsContainer>
      {allergies.map((item) => (
        <S.ItemButton key={item.id} onClick={() => handleSelect(item.id)}>
          <S.ItemImage
            src={item.isSelected ? item.clickUrl : item.imgUrl}
            alt={item.name}
          />
        </S.ItemButton>
      ))}
    </S.ItemsContainer>
  );
};
