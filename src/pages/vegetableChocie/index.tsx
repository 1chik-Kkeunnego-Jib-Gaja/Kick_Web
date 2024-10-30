import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignUp } from "../../context/SignUpContext";
import * as S from "./style";
import vegetable from "../../assets/vegetableIcon.svg";
import { EatingStyleType } from "../../context/SignUpContext";

const VegetableChoice = () => {
  const navigate = useNavigate();
  const { updateSignUpData } = useSignUp();
  const [selectedDiet, setSelectedDiet] = useState<EatingStyleType | "">("");

  const handleDietSelect = (diet: EatingStyleType) => {
    setSelectedDiet(diet);
    updateSignUpData({ eatingStyle: diet });
  };

  const handleNext = () => {
    if (!selectedDiet) {
      alert("식단을 선택해주세요.");
      return;
    }
    navigate("/target");
  };

  return (
    <S.Container>
      <S.Icon src={vegetable} alt="vegetable" />
      <S.Title>좀 더 세세하게 선택해주세요!</S.Title>
      <S.OptionList>
        <S.Option>
          <S.OptionName>
            <input
              type="radio"
              name="diet"
              value="VEGAN"
              checked={selectedDiet === "VEGAN"}
              onChange={(e) =>
                handleDietSelect(e.target.value as EatingStyleType)
              }
            />
            비건(Vegan)
          </S.OptionName>
          <S.OptionDescription>
            모든 동물성 식품을 섭취하지 않음.
          </S.OptionDescription>
        </S.Option>
        <S.Option>
          <S.OptionName>
            <input
              type="radio"
              name="diet"
              value="LACTO_VEGETARIAN"
              checked={selectedDiet === "LACTO_VEGETARIAN"}
              onChange={(e) =>
                handleDietSelect(e.target.value as EatingStyleType)
              }
            />
            락토 베지테리언(Lacto-Vegetarian)
          </S.OptionName>
          <S.OptionDescription>
            유제품은 허용하나, 그 외 동물성 식품은 섭취하지 않음.
          </S.OptionDescription>
        </S.Option>
        <S.Option>
          <S.OptionName>
            <input
              type="radio"
              name="diet"
              value="OVO_VEGETARIAN"
              checked={selectedDiet === "OVO_VEGETARIAN"}
              onChange={(e) =>
                handleDietSelect(e.target.value as EatingStyleType)
              }
            />
            오보 베지테리언(Ovo-Vegetarian)
          </S.OptionName>
          <S.OptionDescription>
            달걀은 허용하나, 그 외 동물성 식품은 섭취하지 않음.
          </S.OptionDescription>
        </S.Option>
        <S.Option>
          <S.OptionName>
            <input
              type="radio"
              name="diet"
              value="LACTO_OVO_VEGETARIAN"
              checked={selectedDiet === "LACTO_OVO_VEGETARIAN"}
              onChange={(e) =>
                handleDietSelect(e.target.value as EatingStyleType)
              }
            />
            락토 오보 베지테리언(Lacto-Ovo Vegetarian)
          </S.OptionName>
          <S.OptionDescription>
            유제품과 달걀은 허용하나, 그 외 동물성 식품은 섭취하지 않음.
          </S.OptionDescription>
        </S.Option>
        <S.Option>
          <S.OptionName>
            <input
              type="radio"
              name="diet"
              value="PESCO_VEGETARIAN"
              checked={selectedDiet === "PESCO_VEGETARIAN"}
              onChange={(e) =>
                handleDietSelect(e.target.value as EatingStyleType)
              }
            />
            페스코 베지테리언(Pesco-Vegetarian)
          </S.OptionName>
          <S.OptionDescription>
            채식 위주 식단에 해산물은 섭취함.
          </S.OptionDescription>
        </S.Option>
        <S.Option>
          <S.OptionName>
            <input
              type="radio"
              name="diet"
              value="POLLO_VEGETARIAN"
              checked={selectedDiet === "POLLO_VEGETARIAN"}
              onChange={(e) =>
                handleDietSelect(e.target.value as EatingStyleType)
              }
            />
            폴로 베지테리언(Pollo-Vegetarian)
          </S.OptionName>
          <S.OptionDescription>
            채식 위주 식단에 가금류(닭고기 등)는 섭취함.
          </S.OptionDescription>
        </S.Option>
        <S.Option>
          <S.OptionName>
            <input
              type="radio"
              name="diet"
              value="FLEXITARIAN"
              checked={selectedDiet === "FLEXITARIAN"}
              onChange={(e) =>
                handleDietSelect(e.target.value as EatingStyleType)
              }
            />
            플렉시테리언(Flexitarian)
          </S.OptionName>
          <S.OptionDescription>
            주로 채식하지만 가끔씩 육류 섭취.
          </S.OptionDescription>
        </S.Option>
      </S.OptionList>
      <S.Button onClick={handleNext}>넘어가기</S.Button>
    </S.Container>
  );
};

export default VegetableChoice;
