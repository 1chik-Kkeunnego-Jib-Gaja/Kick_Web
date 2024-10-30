import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  font-family: "Pretendard-Regular";
`;

export const Icon = styled.img`
  width: 3rem;
  height: 3rem;
  margin-bottom: 1rem;
`;

export const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const OptionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const Option = styled.label`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: #333;
  cursor: pointer;

  input {
    margin-right: 0.5rem;
    accent-color: #ff6b6b; // 라디오 버튼 색상
  }

  span {
    font-weight: bold;
    color: #333;
  }
`;

export const Button = styled.button`
  width: 12rem;
  height: 2.5rem;
  background-color: #333;
  color: #ffffff;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;
