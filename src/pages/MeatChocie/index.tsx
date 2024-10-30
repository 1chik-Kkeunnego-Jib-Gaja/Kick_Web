import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignUp } from "../../context/SignUpContext";
import * as S from "./style";
import meat from "../../assets/meatIcon.svg";

type DetailedDietType = "CARNIVORE" | "PRIMAL";

const MeatChoice = () => {
  const navigate = useNavigate();
  const { updateSignUpData } = useSignUp();
  const [selectedDiet, setSelectedDiet] = useState<DetailedDietType | "">("");

  const handleDietSelect = (diet: DetailedDietType) => {
    setSelectedDiet(diet);
    updateSignUpData({ eatingStyle: diet }); // EatingStyleProp을 eatingStyle로 수정
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
      <S.Icon src={meat} alt="meat icon" />
      <S.Title>좀 더 세세하게 선택해주세요!</S.Title>
      <S.OptionList>
        <S.Option>
          <S.OptionName>
            <input
              type="radio"
              name="diet"
              value="CARNIVORE"
              checked={selectedDiet === "CARNIVORE"}
              onChange={(e) =>
                handleDietSelect(e.target.value as DetailedDietType)
              }
            />
            카니보어(Carnivore)
          </S.OptionName>
          <S.OptionDescription>
            육류 중심 식단, 채소를 거의 섭취하지 않음.
          </S.OptionDescription>
        </S.Option>
        <S.Option>
          <S.OptionName>
            <input
              type="radio"
              name="diet"
              value="PRIMAL"
              checked={selectedDiet === "PRIMAL"}
              onChange={(e) =>
                handleDietSelect(e.target.value as DetailedDietType)
              }
            />
            프라이멀(Primal)
          </S.OptionName>
          <S.OptionDescription>
            고기와 생야채를 중심으로 하되 가공 식품은 지양함.
          </S.OptionDescription>
        </S.Option>
      </S.OptionList>
      <S.Button onClick={handleNext}>넘어가기</S.Button>
    </S.Container>
  );
};

export default MeatChoice;
