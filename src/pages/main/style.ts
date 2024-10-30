import styled, { css } from "styled-components";

export const MainLayout = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const Logo = styled.img`
  margin-top: 3rem;
  width: 6rem;
`;

export const SearchBox = styled.div`
  margin-top: 1rem;
  position: relative;
  display: flex;
  align-items: center;
  width: 20rem;
  height: 2.5rem;
  background-color: #ffffff;
  border: 2px solid #bcbcbc;
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

export const EdIcon = styled.img`
  width: 20rem;
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

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 40rem;
  background-color: #f8f7f7;
  border-radius: 2rem 2rem 0 0;
`;

export const WeekHotBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-top: 1.5rem;
`;

export const WeekHot = styled.img`
  display: flex;
  width: 10rem;
`;

export const KickBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-top: 2rem;
`;

export const Kick = styled.img`
  display: flex;
  width: 5rem;
`;

export const HashtagContainer = styled.div`
  display: flex;
  gap: 0.3rem;
  margin-top: 1rem;
  flex-wrap: wrap;
`;

interface HashtagProps {
  isSelected: boolean;
}

export const Hashtag = styled.button<HashtagProps>`
  padding: 0.4rem 0.5rem;
  font-size: 11px;
  border: 2px solid #bcbcbc;
  border-radius: 1rem;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "#333333" : "#ffffff")};
  color: ${(props) => (props.isSelected ? "#ffffff" : "#bcbcbc")};

  ${(props) =>
    props.isSelected &&
    css`
      border-color: #333333;
    `}
`;

export const MenuBox = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  width: 18em;
  height: 6rem;
  border-radius: 0.8rem;
  margin-top: 1rem;
`;

export const Food = styled.img`
  width: 8rem;
  padding: 2px;
  margin: 2rem 0.5rem;
`;

export const ContentBox2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  font-family: "Pretendard-Regular";
  font-weight: 700;
  font-size: 14px;
  color: #000000;
  margin-left: 0.5rem;
`;

export const heart = styled.img`
  display: flex;
  width: 1.2rem;
  margin-left: 2.5rem;
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
