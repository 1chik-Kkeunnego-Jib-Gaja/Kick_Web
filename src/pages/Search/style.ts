import styled from "styled-components";

export const SearchLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f8f7f7;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  padding: 1.5rem;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export const Logo = styled.img`
  width: 3rem;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const SearchForm = styled.form`
  width: 100%;
  margin-bottom: 1.5rem;
`;

export const SearchBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 2.5rem;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 11px;
  padding: 0 1rem;
`;

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-family: "Pretendard-Regular";
  font-size: 14px;
  padding-right: 2.5rem;

  &::placeholder {
    color: #bcbcbc;
  }
`;

export const SearchIcon = styled.img`
  position: absolute;
  right: 1rem;
  width: 1.2rem;
  height: 1.2rem;
  cursor: pointer;
`;

export const ResultsContainer = styled.main`
  flex: 1;
  padding: 1.5rem;
  max-width: 24rem;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ResultsHeader = styled.div`
  margin: 1rem 0;
`;

export const ResultsTitle = styled.h2`
  font-family: "Pretendard-Regular";
  font-size: 16px;
  font-weight: 600;
  color: #000000;
`;

export const ResultsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`;

export const MenuBox = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  width: 100%;
  height: 6rem;
  border-radius: 0.8rem;
  padding: 0.8rem;
  cursor: pointer;
  transition: transform 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-2px);
  }
`;

export const Food = styled.img`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 0.5rem;
  object-fit: cover;
  margin-right: 1rem;
`;

export const ContentBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h3`
  font-family: "Pretendard-Regular";
  font-size: 14px;
  font-weight: 600;
  color: #000000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const HeartIcon = styled.img`
  width: 1.2rem;
  height: 1.2rem;
  cursor: pointer;
`;

export const TagBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
`;

export const Tag = styled.span`
  font-family: "Pretendard-Regular";
  font-size: 11px;
  color: #ffffff;
  background-color: #000000;
  padding: 0.2rem 0.5rem;
  border-radius: 1rem;
`;

export const NoResults = styled.div`
  text-align: center;
  padding: 2rem;
  color: #666;
  font-family: "Pretendard-Regular";
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
