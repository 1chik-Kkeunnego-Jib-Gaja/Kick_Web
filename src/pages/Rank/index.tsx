import React from "react";
import * as S from "./style";
import MeatIcon from "../../assets/meatIcon.svg";

const DietSelection: React.FC = () => {
  return (
    <S.Container>
      <S.Icon src={MeatIcon} alt="Meat Icon" />
      <S.Title>좀 더 세세하게 선택해주세요!</S.Title>
      <S.OptionList>
        <S.Option>
          <input type="radio" name="diet" value="carnivore" />
          <span>카니보어(Carnivore)</span> 육류 중심 식단, 채소를 거의 섭취하지
          않음.
        </S.Option>
        <S.Option>
          <input type="radio" name="diet" value="primal" />
          <span>프라이멀(Primal)</span> 고기와 생야채를 중심으로 하되 가공
          식품은 지양함.
        </S.Option>
        <S.Option>
          <input type="radio" name="diet" value="carnivore" />
          <span>카니보어(Carnivore)</span> 육류 중심 식단, 채소를 거의 섭취하지
          않음.
        </S.Option>
      </S.OptionList>
      <S.Button>넘어가기</S.Button>
    </S.Container>
  );
};

export default DietSelection;
