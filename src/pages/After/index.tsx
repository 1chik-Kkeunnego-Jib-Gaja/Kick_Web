import { useState } from "react";
import * as S from "./style";
import search from "../../assets/search.svg";
import AfterImg from "../../assets/menuRecommend.svg";
import heart from "../../assets/heart.svg";
import clickHeart from "../../assets/clickHeart.svg";
import food from "../../assets/food.svg";

export const After = () => {
  const [isHeartClicked, setIsHeartClicked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const toggleHeart = () => {
    setIsHeartClicked(!isHeartClicked);
    setLikeCount((prev) => (isHeartClicked ? prev - 1 : prev + 1));
  };

  return (
    <S.AfterLayout>
      <S.SearchBox>
        <S.SearchIcon src={search} alt="search" />
        <S.SearchInput placeholder="원하는 조합을 검색하세요" />
      </S.SearchBox>
      <S.AfterImg src={AfterImg} alt="After" />
      <S.MenuBox>
        <S.ContentBox>
          <S.FoodImg src={food} alt="food" />
          <S.HeaderBox>
            <S.TitleContainer>
              <S.Title>엽떡정식</S.Title>
              <S.SubTitle>@@님의 조합</S.SubTitle>
              <S.TagBox>
                <S.Tag>#편의점</S.Tag>
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
          <S.RecipeBox></S.RecipeBox>
          <S.ReadyTitle>사용된 음식</S.ReadyTitle>
          <S.ReadyBox>
            <S.Ready>fasdfa</S.Ready>
          </S.ReadyBox>
        </S.ContentBox>
      </S.MenuBox>
    </S.AfterLayout>
  );
};
