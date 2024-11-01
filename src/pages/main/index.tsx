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
import Footer from "../../components/footer";

interface Combination {
  id: number;
  name: string;
  imageUrl: string;
  tags: string[];
}

interface CombinationResponse {
  combinationList: Combination[];
}

const Main: React.FC = () => {
  const navigate = useNavigate();
  const [combinations, setCombinations] = useState<Combination[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [currentBanner, setCurrentBanner] = useState(0);
  const banners = [
    { image: ed, url: "/recommend" },
    { image: Recipe, url: "/Quiz1" },
  ];

  const hashtags = ["편의점", "배달음식", "유행", "SNS체험음식"];

  const fetchCombinations = async () => {
    try {
      const response = await fetch("http://211.112.175.88:9999/combinations", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        throw new Error("조합 리스트 조회 실패");
      }

      const data: CombinationResponse = await response.json();
      setCombinations(data.combinationList);
    } catch (error) {
      console.error("조합 리스트 조회 에러:", error);
    }
  };

  useEffect(() => {
    fetchCombinations();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
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
    navigate(banners[currentBanner].url);
  };

  const handleDotClick = (index: number) => {
    setCurrentBanner(index);
  };

  const handleLike = async (combinationId: number, e: React.MouseEvent) => {
    e.stopPropagation();

    try {
      const response = await fetch(
        `http://211.112.175.88:9999/combinations/like/${combinationId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      if (!response.ok) {
        throw new Error("좋아요 처리 실패");
      }

      fetchCombinations();
    } catch (error) {
      console.error("좋아요 처리 에러:", error);
      alert("좋아요 처리에 실패했습니다.");
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const searchInput = (e.currentTarget as HTMLFormElement).querySelector(
      "input",
    )?.value;
    if (searchInput?.trim()) {
      navigate(`/search?keyword=${encodeURIComponent(searchInput.trim())}`);
    }
  };

  return (
    <S.MainLayout>
      <S.ContentBox>
        <S.Logo src={KickLogo} alt="kick" />
        <S.SearchForm onSubmit={handleSearch}>
          <S.SearchBox>
            <S.SearchIcon src={search} alt="search" />
            <S.SearchInput placeholder="원하는 조합을 검색하세요" />
          </S.SearchBox>
        </S.SearchForm>
        <S.BannerContainer onClick={handleBannerClick}>
          <S.BannerWrapper>
            {banners.map((banner, index) => (
              <S.BannerImage
                key={index}
                src={banner.image}
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
                  handleDotClick(index);
                }}
              />
            ))}
          </S.BannerDots>
        </S.BannerContainer>
        <S.Background>
          <S.WeekHotBox>
            <S.WeekHot src={Hot} alt="hot" />
            {combinations.slice(0, 3).map((combination) => (
              <S.HotMenuBox
                key={combination.id}
                onClick={() => navigate(`/detail/${combination.id}`)}
              >
                <S.HotFood
                  src={combination.imageUrl || food}
                  alt={combination.name}
                />
                <S.HotContentBox>
                  <S.HotTitleBox>
                    <S.HotTitle>{combination.name}</S.HotTitle>
                    <S.HotHeart
                      src={heart}
                      alt="heart"
                      onClick={(e) => handleLike(combination.id, e)}
                    />
                  </S.HotTitleBox>
                  <S.HotTagBox>
                    {combination.tags?.map((tag, index) => (
                      <S.HotTag key={index}>#{tag}</S.HotTag>
                    ))}
                  </S.HotTagBox>
                </S.HotContentBox>
              </S.HotMenuBox>
            ))}
          </S.WeekHotBox>
          <S.KickBox>
            <S.Kick src={Kick} alt="kick" />
            <S.HashtagContainer></S.HashtagContainer>
            {combinations.map((combination) => (
              <S.MenuBox
                key={combination.id}
                onClick={() => navigate(`/detail/${combination.id}`)}
              >
                <S.Food
                  src={combination.imageUrl || food}
                  alt={combination.name}
                />
                <S.ContentBox2>
                  <S.TitleBox>
                    <S.Title>{combination.name}</S.Title>
                    <S.heart
                      src={heart}
                      alt="heart"
                      onClick={(e) => handleLike(combination.id, e)}
                    />
                  </S.TitleBox>
                  <S.TagBox>
                    {combination.tags?.map((tag, index) => (
                      <S.Tag key={index}>#{tag}</S.Tag>
                    ))}
                  </S.TagBox>
                </S.ContentBox2>
              </S.MenuBox>
            ))}
          </S.KickBox>
        </S.Background>
      </S.ContentBox>
      <Footer />
    </S.MainLayout>
  );
};

export default Main;
