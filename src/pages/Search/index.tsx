import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import * as S from "./style";
import KickLogo from "../../assets/Kick.svg";
import search from "../../assets/search.svg";
import heart from "../../assets/heart.svg";
import food from "../../assets/Exfood.svg";
import Footer from "../../components/footer";

interface SearchResult {
  id: number;
  name: string;
  imageUrl: string;
  tags: string[];
}

export const Search = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [searchInput, setSearchInput] = useState(keyword);

  const handleSearch = async (searchKeyword: string) => {
    try {
      const response = await fetch(
        `http://211.112.175.88:9999/combinations/search?query=${encodeURIComponent(
          searchKeyword,
        )}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      if (!response.ok) {
        throw new Error("검색 실패");
      }

      const data = await response.json();
      setSearchResults(
        data.combinationList.map((item: { combinationId: number }) => ({
          id: item.combinationId,
          name: "",
          imageUrl: "",
          tags: [],
        })),
      );
    } catch (error) {
      console.error("검색 에러:", error);
    }
  };

  useEffect(() => {
    if (keyword) {
      handleSearch(keyword);
    }
  }, [keyword]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      navigate(`/search?keyword=${encodeURIComponent(searchInput.trim())}`);
    }
  };

  return (
    <S.SearchLayout>
      <S.Header>
        <S.Logo src={KickLogo} alt="kick" onClick={() => navigate("/main")} />
      </S.Header>

      <S.ResultsContainer>
        <S.SearchForm onSubmit={handleSearchSubmit}>
          <S.SearchBox>
            <S.SearchInput
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="원하는 조합을 검색하세요"
            />
            <S.SearchIcon
              src={search}
              alt="search"
              onClick={handleSearchSubmit}
            />
          </S.SearchBox>
        </S.SearchForm>

        <S.ResultsHeader>
          <S.ResultsTitle>
            "{keyword}" 검색 결과 ({searchResults.length})
          </S.ResultsTitle>
        </S.ResultsHeader>

        <S.ResultsList>
          {searchResults.length > 0 ? (
            searchResults.map((result) => (
              <S.MenuBox
                key={result.id}
                onClick={() => navigate(`/detail/${result.id}`)}
              >
                <S.Food src={result.imageUrl || food} alt={result.name} />
                <S.ContentBox>
                  <S.TitleBox>
                    <S.Title>{result.name}</S.Title>
                    <S.HeartIcon src={heart} alt="heart" />
                  </S.TitleBox>
                  <S.TagBox>
                    {result.tags?.map((tag, index) => (
                      <S.Tag key={index}>#{tag}</S.Tag>
                    ))}
                  </S.TagBox>
                </S.ContentBox>
              </S.MenuBox>
            ))
          ) : (
            <S.NoResults>검색 결과가 없습니다.</S.NoResults>
          )}
        </S.ResultsList>
      </S.ResultsContainer>
      <Footer />
    </S.SearchLayout>
  );
};
