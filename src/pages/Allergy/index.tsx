import * as S from "./style";
import Window from "../../assets/Window.svg";
export const Allergy = () => {
  return (
    <S.AllergyLayout>
      <S.Window src={Window} alt="Window" />
      <S.Title>
        <S.span>알러지</S.span>가 있는 음식을 골라주세요
      </S.Title>

      <S.Content>알러지가 있는 음식 조합은 피해서</S.Content>
      <S.Content>추천해드립니다.</S.Content>
    </S.AllergyLayout>
  );
};
