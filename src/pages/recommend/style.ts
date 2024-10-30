import styled from "styled-components";

export const RecommendLayout = styled.div`
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

export const RecommendImg = styled.img`
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
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

export const Title = styled.p`
  font-family: "Pretendard-Regular";
  color: #000000;
  font-size: 18px;
  font-weight: 800;
  margin-left: 1rem;
`;

export const HeartIcon = styled.img`
  width: 1.8rem;
  margin-right: 0.5rem;
  cursor: pointer;
`;

export const SubTitle = styled.p`
  font-family: "Pretendard-Regular";
  font-size: 14px;
  color: #000000;
  margin-left: 1rem;
  margin-top: 1%;
`;

export const TagBox = styled.div`
  display: flex;
  margin-left: 0.5rem;
  margin-bottom: 1rem;
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
`;

export const Ready = styled.p`
  font-family: "Pretendard-Regular";
  font-size: 14px;

  font-weight: 600;
  color: #000000;
`;
