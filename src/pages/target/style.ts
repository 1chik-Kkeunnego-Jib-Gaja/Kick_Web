import styled from "styled-components";

export const TargetLayout = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const MenuLogo = styled.img`
  width: 4rem;
`;

export const Title = styled.p`
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  font-size: 20px;
  font-family: "Pretendard-Regular";
  font-weight: 600;
  color: #000000;
`;

export const span = styled.span`
  color: #ff6c46;
  font-size: 20px;
  font-family: "Pretendard-Regular";
  font-weight: 600;
`;

export const Content = styled.p`
  font-size: 15px;
  font-family: "Pretendard-Regular";
  font-weight: 600;
  color: #6c6c6c;
`;
export const IDBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IDInput = styled.input`
  width: 16rem;
  height: 2.5rem;
  margin-left: 1rem;
  margin-top: 3rem;
  margin-bottom: 5rem;
  border-radius: 10px;
  background-color: #f4f4f4;
  border: none;
  &::placeholder {
    color: #acacac;
  }
  font-family: "Pretendard-Regular";
  padding: 2%;
`;

export const SubmitButton = styled.button`
  width: 18rem;
  height: 3rem;
  border-radius: 10px;
  background-color: #ff6c46;
  color: white;
  border: none;
  font-size: 16px;
  font-family: "Pretendard-Regular";
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #ff8566;
    transform: scale(1.02);
  }

  &:active {
    background-color: #ff4d26;
    transform: scale(0.98);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;
