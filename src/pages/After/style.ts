import styled from "styled-components";

export const AfterLayout = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SearchBox = styled.div`
  margin-top: 1rem;
  position: relative;
  display: flex;
  align-items: center;
  width: 20rem;
  height: 2.5rem;
  background-color: #ffffff;
  border: none;
  border-radius: 11px;
  padding: 0 1rem;
`;

export const SearchIcon = styled.img`
  position: absolute;
  right: 1rem;
  width: 1.2rem;
  height: 1.2rem;
  cursor: pointer;
`;

export const SearchInput = styled.input`
  width: 20rem;
  border: none;
  outline: none;
  font-family: "Pretendard-Regular";
  font-size: 14px;
  padding-right: 2.5rem;

  &::placeholder {
    color: #bcbcbc;
  }
`;

export const AfterImg = styled.img`
  width: 22.5rem;
  margin-top: 1rem;
`;

export const MenuBox = styled.div`
  width: 100%;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  background-color: #f8f7f7;
`;

export const ContentBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
`;

export const FoodImg = styled.img`
  width: 100%;
`;

export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const Title = styled.p`
  font-family: "Pretendard-Regular";
  color: #000000;
  font-size: 18px;
  font-weight: 800;
  margin-left: 1rem;
`;

export const SubTitle = styled.p`
  font-family: "Pretendard-Regular";
  font-size: 14px;
  color: #000000;
  margin-left: 1rem;
`;

export const TagBox = styled.div`
  display: flex;
  margin-top: 0.1rem;
  margin-left: 0.5rem;
`;

export const HeartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1rem;
`;

export const HeartIcon = styled.img`
  width: 1.8rem;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:active {
    transform: scale(0.9);
  }
`;

export const LikeCount = styled.span`
  font-family: "Pretendard-Regular";
  font-size: 12px;
  color: #000000;
  margin-top: 0.2rem;
`;

export const Tag = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 12px;
  padding: 2px 10px;
  font-size: 9px;
  border-radius: 15px;
  cursor: pointer;
  background-color: #000000;
  color: #ffffff;
  margin-left: 0.4rem;
  margin-top: 0.5rem;
`;

export const RecipeBox = styled.div`
  width: 100%;
  height: 100%;
`;

export const ReadyBox = styled.div`
  display: flex;
  padding: 3px 8px;
  width: 18.5em;
  height: 8rem;
  margin-left: 1rem;
  background-color: #f6f2f0;
  margin-bottom: 6rem;
  border-radius: 10px;
`;

export const ReadyTitle = styled.p`
  font-family: "Pretendard-Regular";
  font-size: 14px;
  font-weight: 800;
  color: #000000;
  margin-bottom: 0.5rem;
  margin-left: 1rem;
  margin-top: 2rem;
`;

export const Ready = styled.p`
  font-family: "Pretendard-Regular";
  font-size: 14px;

  font-weight: 600;
  color: #000000;
`;
