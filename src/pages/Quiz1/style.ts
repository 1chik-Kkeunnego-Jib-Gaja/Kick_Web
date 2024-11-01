import styled from "styled-components";

export const QuizLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #ffffff;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 40px;
  color: #333;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Quiz = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #ff6b6b;
  margin-bottom: 10px;
`;

export const QuizContent = styled.p`
  font-size: 20px;
  color: #333;
  text-align: center;
  margin-bottom: 30px;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: center;
  margin-top: 20px;
`;

export const Button = styled.button<{ isSelected?: boolean }>`
  width: 150px;
  height: 60px;
  border-radius: 30px;
  border: none;
  background-color: ${(props) => (props.isSelected ? "#FF6B6B" : "#f8f9fa")};
  color: ${(props) => (props.isSelected ? "#ffffff" : "#333")};
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    background-color: ${(props) => (props.isSelected ? "#FF6B6B" : "#FF8787")};
    color: #ffffff;
  }

  &:active {
    transform: translateY(1px);
  }

  @media (max-width: 768px) {
    width: 120px;
    height: 50px;
    font-size: 16px;
  }
`;
