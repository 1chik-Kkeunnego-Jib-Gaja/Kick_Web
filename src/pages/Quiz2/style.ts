import styled from "styled-components";

export const QuizLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

export const Title = styled.div`
  font-size: 23px;
  font-family: "Pretendard-Regular";
  font-weight: 700;
  color: #000;
  margin-top: 10rem;
  margin-bottom: 5rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000;
`;

export const Quiz = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #000;
  font-family: "Pretendard-Regular";
`;

export const QuizContent = styled.div`
  font-size: 18px;
  font-family: "Pretendard-Regular";
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  gap: 1rem;
`;

interface ButtonProps {
  isSelected: boolean;
}

export const Button = styled.button<ButtonProps>`
  width: 15rem;
  height: 3rem;
  border: 1px solid #ff6c46;
  border-radius: 8px;
  font-family: "Pretendard-Regular";
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  background-color: ${(props) => (props.isSelected ? "#FF6C46" : "#FFFFFF")};
  color: ${(props) => (props.isSelected ? "#FFFFFF" : "#FF6C46")};

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.98);
  }
`;
