import { useNavigate } from "react-router-dom";
import * as S from "./style";
import Top3 from "../../assets/Top.svg";
import search from "../../assets/search.svg";
import heart from "../../assets/heart.svg";
import food from "../../assets/Exfood.svg";
import Add from "../../assets/Add.svg";

const DietSelection = () => {
  const navigate = useNavigate();

  return (
    <S.RankLayout>
      <S.SearchBox>
        <S.SearchIcon src={search} alt="search" />
        <S.SearchInput placeholder="원하는 조합을 검색하세요" />
      </S.SearchBox>
      <S.Content>
        <S.Top src={Top3} alt="top3" />

        <S.RankItemContainer>
          <S.RankNumber>1위</S.RankNumber>
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
        </S.RankItemContainer>

        <S.RankItemContainer>
          <S.RankNumber>2위</S.RankNumber>
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
        </S.RankItemContainer>

        <S.RankItemContainer>
          <S.RankNumber>3위</S.RankNumber>
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
        </S.RankItemContainer>

        <S.RankItemContainer>
          <S.RankNumber>4위</S.RankNumber>
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
        </S.RankItemContainer>
      </S.Content>
      <S.AddButton
        onClick={() => navigate("/post")}
        src={Add}
        alt="add button"
      />
    </S.RankLayout>
  );
};

export default DietSelection;
