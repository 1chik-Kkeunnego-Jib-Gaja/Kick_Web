import * as S from "./style";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import search from "../../assets/search.svg";
import heart from "../../assets/heart.svg";
import clickHeart from "../../assets/clickHeart.svg";
import food from "../../assets/food.svg";
import Footer from "../../components/footer";

interface CombinationDetail {
  name: string;
  ingredient: string;
  recipe: string;
  imageUrl: string;
  userId: number;
  tags: string[];
  likeCount: number;
  reviews: Review[];
}

interface Review {
  content: string;
  userId: number;
}

export const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const [isHeartClicked, setIsHeartClicked] = useState(false);
  const [combinationDetail, setCombinationDetail] =
    useState<CombinationDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [reviewContent, setReviewContent] = useState("");

  const fetchCombinationDetail = async () => {
    try {
      const response = await fetch(
        `http://211.112.175.88:9999/combinations/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      if (!response.ok) {
        throw new Error("조합 상세 정보 조회 실패");
      }

      const data: CombinationDetail = await response.json();
      setCombinationDetail(data);
      setLoading(false);
    } catch (error) {
      console.error("조합 상세 조회 에러:", error);
      setError("조합 정보를 불러오는데 실패했습니다.");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchCombinationDetail();
    }
  }, [id]);

  const handleReviewSubmit = async () => {
    if (!reviewContent.trim()) {
      alert("리뷰 내용을 입력해주세요.");
      return;
    }

    try {
      const response = await fetch(`http://211.112.175.88:9999/reviews/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          content: reviewContent.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error("리뷰 작성 실패");
      }

      setReviewContent(""); // 입력창 초기화
      await fetchCombinationDetail(); // 리뷰 작성 후 데이터 새로고침
    } catch (error) {
      console.error("리뷰 작성 에러:", error);
      alert("리뷰 작성에 실패했습니다.");
    }
  };

  const toggleHeart = async () => {
    try {
      const response = await fetch(
        `http://211.112.175.88:9999/combinations/like/${id}`,
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

      setIsHeartClicked(!isHeartClicked);
      await fetchCombinationDetail(); // 좋아요 토글 후 데이터 새로고침
    } catch (error) {
      console.error("좋아요 처리 에러:", error);
      alert("좋아요 처리에 실패했습니다.");
    }
  };

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>{error}</div>;
  if (!combinationDetail) return <div>조합을 찾을 수 없습니다.</div>;

  return (
    <S.DetailLayout>
      <S.SearchBox>
        <S.SearchIcon src={search} alt="search" />
        <S.SearchInput placeholder="원하는 조합을 검색하세요" />
      </S.SearchBox>

      <S.FoodImg
        src={combinationDetail.imageUrl || food}
        alt={combinationDetail.name}
      />
      <S.MenuBox>
        <S.ContentBox>
          <S.HeaderBox>
            <S.TitleContainer>
              <S.Title>{combinationDetail.name}</S.Title>
              <S.SubTitle>#{combinationDetail.userId}님의 조합</S.SubTitle>
              <S.TagBox>
                {combinationDetail.tags.map((tag, index) => (
                  <S.Tag key={index}>#{tag}</S.Tag>
                ))}
              </S.TagBox>
            </S.TitleContainer>
            <S.HeartContainer>
              <S.HeartIcon
                src={isHeartClicked ? clickHeart : heart}
                alt="heart"
                onClick={toggleHeart}
              />
              <S.LikeCount>{combinationDetail.likeCount}</S.LikeCount>
            </S.HeartContainer>
          </S.HeaderBox>
          <S.RecipeBox>
            <S.RecipeTitle>조합 방법</S.RecipeTitle>
            <S.RecipeContent>{combinationDetail.recipe}</S.RecipeContent>
          </S.RecipeBox>
          <S.ReadyTitle>사용된 음식</S.ReadyTitle>
          <S.ReadyBox>
            <S.Ready>{combinationDetail.ingredient}</S.Ready>
          </S.ReadyBox>

          <S.ReviewSection>
            <S.ReviewTitle>리뷰</S.ReviewTitle>
            <S.ReviewInputContainer>
              <S.ReviewInput
                value={reviewContent}
                onChange={(e) => setReviewContent(e.target.value)}
                placeholder="리뷰를 작성해주세요"
              />
              <S.ReviewButton onClick={handleReviewSubmit}>작성</S.ReviewButton>
            </S.ReviewInputContainer>
            <S.ReviewList>
              {combinationDetail.reviews.map((review, index) => (
                <S.ReviewItem key={index}>
                  <S.ReviewHeader>
                    <S.ReviewUser>작성자 {review.userId}</S.ReviewUser>
                  </S.ReviewHeader>
                  <S.ReviewContent>{review.content}</S.ReviewContent>
                </S.ReviewItem>
              ))}
            </S.ReviewList>
          </S.ReviewSection>
        </S.ContentBox>
      </S.MenuBox>
      <Footer />
    </S.DetailLayout>
  );
};
