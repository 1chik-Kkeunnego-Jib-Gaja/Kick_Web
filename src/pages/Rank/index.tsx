import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import Top3 from "../../assets/Top.svg";
import search from "../../assets/search.svg";
import heart from "../../assets/heart.svg";
import Add from "../../assets/Add.svg";
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

const DietSelection = () => {
  const navigate = useNavigate();
  const [combinations, setCombinations] = useState<Combination[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchCombinations = async () => {
    try {
      const response = await fetch("http://211.112.175.88:9999/combinations", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        throw new Error("조합 조회 실패");
      }

      const data: CombinationResponse = await response.json();
      setCombinations(data.combinationList);
    } catch (error) {
      console.error("조회 에러:", error);
    }
  };

  useEffect(() => {
    fetchCombinations();
  }, []);

  // 좋아요 처리 함수
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
    }
  };

  return (
    <S.RankLayout>
      <S.SearchBox>
        <S.SearchIcon src={search} alt="search" />
        <S.SearchInput
          placeholder="원하는 조합을 검색하세요"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </S.SearchBox>
      <S.Content>
        <S.Top src={Top3} alt="top3" />
        {combinations
          .filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()),
          )
          .map((combination, index) => (
            <S.RankItemContainer
              key={combination.id}
              onClick={() => navigate(`/detail/${combination.id}`)}
            >
              <S.RankNumber>{index + 1}</S.RankNumber>
              <S.MenuBox>
                <S.Food src={combination.imageUrl} alt="food" />
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
                    {combination.tags?.map((tag, tagIndex) => (
                      <S.Tag key={tagIndex}>#{tag}</S.Tag>
                    ))}
                  </S.TagBox>
                </S.ContentBox2>
              </S.MenuBox>
            </S.RankItemContainer>
          ))}
      </S.Content>
      <S.AddButton
        onClick={() => navigate("/post")}
        src={Add}
        alt="add button"
      />
      <Footer />
    </S.RankLayout>
  );
};

export default DietSelection;
