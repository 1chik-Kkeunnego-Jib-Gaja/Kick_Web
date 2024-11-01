import { useState } from "react";
import * as S from "./style";
import search from "../../assets/search.svg";
import RecommendImg from "../../assets/recommend.svg";
import heart from "../../assets/heart.svg";
import clickHeart from "../../assets/clickHeart.svg";
import food from "../../assets/ice.jpg";

export const Recommend = () => {
  const [isHeartClicked, setIsHeartClicked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const toggleHeart = () => {
    setIsHeartClicked(!isHeartClicked);
    setLikeCount((prev) => (isHeartClicked ? prev - 1 : prev + 1));
  };

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
            <S.TitleContainer>
              <S.Title>아이스 휘핑 추가</S.Title>
              <S.SubTitle>3님의 조합</S.SubTitle>
              <S.TagBox>
                <S.Tag>#병맛</S.Tag>
              </S.TagBox>
            </S.TitleContainer>
            <S.HeartContainer>
              <S.HeartIcon
                src={isHeartClicked ? clickHeart : heart}
                alt="heart"
                onClick={toggleHeart}
              />
              <S.LikeCount>{likeCount}</S.LikeCount>
            </S.HeartContainer>
          </S.HeaderBox>
          <S.RecipeBox>
            <S.RecipeTitle>조합 방법</S.RecipeTitle>
            <S.RecipeContent>
              엄청 시원한 아이스티에 휘핑 추가하기
            </S.RecipeContent>
          </S.RecipeBox>
          <S.ReadyTitle>사용된 음식</S.ReadyTitle>
          <S.ReadyBox>
            <S.Ready>아이스티, 휘핑크림, 얼음 많이</S.Ready>
          </S.ReadyBox>
        </S.ContentBox>
      </S.MenuBox>
    </S.RecommendLayout>
  );
};
