import styled from "styled-components";

export const RankLayout = styled.div`
  display: flex;
  flex-direction: column;
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

export const Content = styled.div`
  width: 100%;
  margin-top: 1rem;
  background-color: #f8f7f7;
  padding-bottom: 13rem;
  height: 50rem;
`;

export const Top = styled.img`
  width: 10rem;
  margin: 1.5rem 0 1rem 1rem;
`;

export const Food = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 1rem;
`;

export const ContentBox2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Title = styled.div`
  font-family: "Pretendard-Regular";
  font-weight: 700;
  font-size: 14px;
  color: #000000;
`;

export const heart = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }
`;

export const TagBox = styled.div`
  display: flex;
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

export const RankItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem;
  gap: 1rem;
`;

export const RankNumber = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 15px;
  font-weight: 700;
  color: #ff6c46;
  min-width: 2rem;
  text-align: center;
`;

export const MenuBox = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  width: 20rem;
  height: 6rem;
  border-radius: 0.8rem;
  padding: 0.5rem;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const AddButton = styled.img`
  position: fixed;
  bottom: 5rem;
  right: 0.8rem;
  width: 3.5rem;
  height: 3.5rem;
  cursor: pointer;
  z-index: 1000;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;
