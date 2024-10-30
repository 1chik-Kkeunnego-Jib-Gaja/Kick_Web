// MeatChoice의 스타일은 VegetableChoice와 동일하므로 같은 파일을 사용하거나 복사하여 사용할 수 있습니다.
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #ffffff;
`;

export const Icon = styled.img`
  width: 5rem;
  height: 5rem;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #333;
  font-family: "Pretendard-Regular";
`;

export const OptionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 600px;
  margin: 2rem 0;
`;

export const Option = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 8px;
  background-color: #f8f8f8;
`;

export const OptionName = styled.label`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  font-family: "Pretendard-Regular";

  input[type="radio"] {
    width: 1.2rem;
    height: 1.2rem;
    cursor: pointer;
  }
`;

export const OptionDescription = styled.p`
  margin-left: 2.2rem;
  font-size: 0.9rem;
  color: #666;
  font-family: "Pretendard-Regular";
`;

export const Button = styled.button`
  width: 200px;
  height: 48px;
  background-color: #ff6c46;
  color: white;
  border: none;
  border-radius: 24px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
  font-family: "Pretendard-Regular";

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.98);
  }
`;
