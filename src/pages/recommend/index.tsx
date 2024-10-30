import * as S from "./style";
import search from "../../assets/search.svg";
import RecommendImg from "../../assets/recommend.svg";
import heart from "../../assets/heart.svg";
import food from "../../assets/food.svg";

export const Recommend = () => {
  return (
    <S.RecommendLayout>
      <S.SearchBox>
        <S.SearchIcon src={search} alt="search" />
        <S.SearchInput placeholder="원하는 조합을 검색하세요" />
      </S.SearchBox>
      <S.RecommendImg src={RecommendImg} alt="recommend" />
      <S.MenuBox>
        <S.ContentBox>
          <S.FoodImg src={food} alt="food" />
          <S.HeaderBox>
            <S.Title>엽떡정식</S.Title>
            <S.HeartIcon src={heart} alt="heart" />
          </S.HeaderBox>
          <S.SubTitle>@@님의 조합</S.SubTitle>
          <S.TagBox>
            <S.Tag>#편의점</S.Tag>
          </S.TagBox>
          <S.RecipeBox></S.RecipeBox>

          <S.ReadyTitle>사용된 음식</S.ReadyTitle>
          <S.ReadyBox>
            <S.Ready>fasdfa</S.Ready>
          </S.ReadyBox>
        </S.ContentBox>
      </S.MenuBox>
    </S.RecommendLayout>
  );
};
