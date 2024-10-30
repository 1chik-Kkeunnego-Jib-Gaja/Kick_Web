import React, { useState } from "react";
import * as S from "./style";
import KickLogo from "../../assets/kickLogo.svg";
import search from "../../assets/search.svg";
import ed from "../../assets/ed.svg";
import Hot from "../../assets/weekHot.svg";
import Kick from "../../assets/KickText.svg";
import heart from "../../assets/heart.svg";
import food from "../../assets/Exfood.svg";

const Main: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const hashtags = ["편의점", "배달음식", "유행", "SNS체험음식"];

  const toggleTag = (tag: string) => {
    if (selectedTag === tag) {
      setSelectedTag(null);
    } else {
      setSelectedTag(tag);
    }
  };

  return (
    <S.MainLayout>
      <S.ContentBox>
        <S.Logo src={KickLogo} alt="kick" />
        <S.SearchBox>
          <S.SearchIcon src={search} alt="search" />
          <S.SearchInput placeholder="원하는 조합을 검색하세요" />
        </S.SearchBox>
        <S.EdIcon src={ed} alt="ed" />
        <S.Background>
          <S.WeekHotBox>
            <S.WeekHot src={Hot} alt="hot" />
          </S.WeekHotBox>
          <S.KickBox>
            <S.Kick src={Kick} alt="kick" />
            <S.HashtagContainer>
              {hashtags.map((tag) => (
                <S.Hashtag
                  key={tag}
                  isSelected={selectedTag === tag}
                  onClick={() => toggleTag(tag)}
                >
                  #{tag}
                </S.Hashtag>
              ))}
            </S.HashtagContainer>
            <S.MenuBox>
              <S.Food src={food} alt="food" />
              <S.ContentBox2>
                <S.TitleBox>
                  <S.Title>마크 정식</S.Title>
                  <S.heart src={heart} alt="heart" />
                </S.TitleBox>
                <S.TagBox>
                  <S.Tag>#편의점</S.Tag>
                </S.TagBox>
              </S.ContentBox2>
            </S.MenuBox>
          </S.KickBox>
        </S.Background>
      </S.ContentBox>
    </S.MainLayout>
  );
};

export default Main;
