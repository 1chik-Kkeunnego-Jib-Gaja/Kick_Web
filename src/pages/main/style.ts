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

export const SearchForm = styled.form`
  width: 100%;
  max-width: 20rem;
  margin-bottom: 1rem;
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
  transition: all 0.2s ease;

  &:focus-within {
    border-color: #ff8787;
    box-shadow: 0 0 0 3px rgba(255, 135, 135, 0.1);
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-family: "Pretendard-Regular";
  font-size: 14px;
  padding-right: 2.5rem;
  background: transparent;

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
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const BannerContainer = styled.div`
  position: relative;
  width: 20rem;
  height: 8rem;
  overflow: hidden;
  border-radius: 1rem;
`;

export const BannerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

interface BannerImageProps {
  isActive: boolean;
}

export const BannerImage = styled.img<BannerImageProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease-in-out;
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  pointer-events: ${(props) => (props.isActive ? "auto" : "none")};
`;

export const BannerButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.3);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  z-index: 2;

  &:first-child {
    left: 0;
  }

  &:last-of-type {
    right: 0;
  }
`;

export const BannerDots = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 2;
`;

interface DotProps {
  isActive: boolean;
}

export const Dot = styled.div<DotProps>`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: ${(props) =>
    props.isActive ? "#ffffff" : "rgba(255, 255, 255, 0.5)"};
  cursor: pointer;
`;

export const EdIcon = styled.img`
  width: 20rem;
`;

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: auto;
  padding-bottom: 5rem;
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
  margin-bottom: 1rem;
`;

export const KickBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-top: 1rem;
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
  margin-bottom: 1rem;
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
  width: 18rem;
  height: 6rem;
  border-radius: 0.8rem;
  padding: 0.8rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: transform 0.2s ease;
  overflow: hidden;

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

export const ContentBox2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
  min-width: 0;
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 80%;
`;

export const heart = styled.img`
  width: 1.2rem;
  height: 1.2rem;
  cursor: pointer;
  flex-shrink: 0;
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
  flex-wrap: wrap;
  gap: 0.3rem;
  max-height: 2.4rem;
  overflow: hidden;
`;

export const Tag = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 11px;
  padding: 0.2rem 0.5rem;
  border-radius: 1rem;
  background-color: #000000;
  color: #ffffff;
  white-space: nowrap;
`;

// HOT 조합을 위한 스타일 (기존 스타일과 동일하지만 이름만 변경)
export const HotMenuBox = styled(MenuBox)``;
export const HotFood = styled(Food)``;
export const HotContentBox = styled(ContentBox2)``;
export const HotTitleBox = styled(TitleBox)``;
export const HotTitle = styled(Title)``;
export const HotHeart = styled(heart)``;
export const HotTagBox = styled(TagBox)``;
export const HotTag = styled(Tag)``;
