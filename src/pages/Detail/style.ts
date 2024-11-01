import styled from "styled-components";

export const DetailLayout = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  margin-bottom: 1rem;
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

export const MenuBox = styled.div`
  width: 24rem;

  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  background-color: #f8f7f7;
`;

export const ContentBox = styled.div`
  height: 100%;
  background-color: #ffffff;
  padding-top: 1rem;
  margin-left: 1rem;
  padding-bottom: 2rem;
`;

export const FoodImg = styled.img`
  width: 24rem;
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
  margin-bottom: 2rem;
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

export const RecipeContent = styled.p`
  padding-left: 1rem;
  line-height: 1.5;
  white-space: pre-wrap;
  margin-right: 1rem;
  color: #000000;
  font-family: "Pretendard-Regular";
`;

export const RecipeTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-top: 3rem;
  margin-left: 1rem;
  margin-right: 1rem;
  color: #000000;
  margin-bottom: 0.1rem;
  font-family: "Pretendard-Regular";
`;

export const Ready = styled.p`
  padding: 1rem;
  line-height: 1.5;
  white-space: pre-wrap;
  font-family: "Pretendard-Regular";
  color: #333;
`;

export const ReviewSection = styled.div`
  width: calc(100% - 2rem);
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 8px;
`;

export const ReviewTitle = styled.h3`
  font-size: 1rem;
  padding-left: 0.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #000;
  font-family: "Pretendard-Regular";
`;

export const ReviewInputContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

export const ReviewInput = styled.input`
  flex: 1;
  padding: 0.8rem 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-family: "Pretendard-Regular";
  font-size: 14px;
  outline: none;

  &::placeholder {
    color: #bcbcbc;
  }

  &:focus {
    border-color: #ff6b6b;
  }
`;

export const ReviewButton = styled.button`
  padding: 0.8rem 1.5rem;
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 8px;
  font-family: "Pretendard-Regular";
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #ff8787;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const ReviewList = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 400px;
  overflow-y: auto;
  padding-right: 0.5rem;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ddd;
    border-radius: 3px;
  }
`;

export const ReviewItem = styled.div`
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;

  color: #000;
`;

export const ReviewUser = styled.span`
  font-family: "Pretendard-Regular";
  font-size: 14px;
  font-weight: 600;
  color: #495057;
`;

export const ReviewDate = styled.span`
  font-family: "Pretendard-Regular";
  font-size: 12px;
  color: #868e96;
`;

export const ReviewContent = styled.p`
  font-family: "Pretendard-Regular";
  font-size: 14px;
  color: #495057;
  line-height: 1.5;
  white-space: pre-wrap;
`;
