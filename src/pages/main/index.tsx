import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import KickLogo from "../../assets/kickLogo.svg";
import search from "../../assets/search.svg";
import ed from "../../assets/ed.svg";
import Hot from "../../assets/weekHot.svg";
import Kick from "../../assets/KickText.svg";
import heart from "../../assets/heart.svg";
import food from "../../assets/Exfood.svg";
import Recipe from "../../assets/edrecommend.svg";

const Main: React.FC = () => {
  const navigate = useNavigate();

  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [currentBanner, setCurrentBanner] = useState(0);
  const banners = [ed, Recipe];

  const hashtags = ["편의점", "배달음식", "유행", "SNS체험음식"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev === 0 ? 1 : 0));
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const toggleTag = (tag: string) => {
    if (selectedTag === tag) {
      setSelectedTag(null);
    } else {
      setSelectedTag(tag);
    }
  };

  const handleBannerClick = () => {
    setCurrentBanner((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <S.MainLayout>
      <S.ContentBox>
        <S.Logo src={KickLogo} alt="kick" />
        <S.SearchBox>
          <S.SearchIcon src={search} alt="search" />
          <S.SearchInput placeholder="원하는 조합을 검색하세요" />
        </S.SearchBox>
        <S.BannerContainer onClick={handleBannerClick}>
          <S.BannerWrapper>
            {banners.map((banner, index) => (
              <S.BannerImage
                key={index}
                src={banner}
                alt={`banner-${index}`}
                isActive={index === currentBanner}
              />
            ))}
          </S.BannerWrapper>
          <S.BannerDots>
            {banners.map((_, index) => (
              <S.Dot
                key={index}
                isActive={index === currentBanner}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentBanner(index);
                }}
              />
            ))}
          </S.BannerDots>
        </S.BannerContainer>
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
