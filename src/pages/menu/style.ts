import styled from "styled-components";

export const MenuLayout = styled.div`
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
  margin-bottom: 0.5rem;
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

export const MenuBox = styled.div`
  display: flex;
  margin-top: 2rem;
  align-items: center;
`;

export const Vegetable = styled.img`
  width: 9rem;
`;

export const MeatLover = styled.img`
  width: 9rem;
  margin-left: 1.5rem;
`;

export const VegetableBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MeatLoverBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const VegetableName = styled.p`
  font-size: 15px;
  font-family: "Pretendard-Regular";
  font-weight: 600;
  color: #bcbcbc;
  text-align: center;
  margin-top: 0.7rem;
`;

export const MeatLoverName = styled.p`
  font-size: 15px;
  font-family: "Pretendard-Regular";
  font-weight: 600;
  color: #bcbcbc;
  text-align: center;
  margin-top: 0.7rem;
  margin-left: 1rem;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
`;

export const NoButton = styled.button`
  width: 18rem;
  height: 2.5rem;
  font-family: "Pretendard-Regular";
  font-weight: 600;
  font-size: 15px;
  background-color: #ffffff;
  border-radius: 0.5rem;
  color: #bcbcbc;
  border: 3px solid #bcbcbc;
  outline: none;
  box-shadow: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const NextButton = styled.button`
  width: 18rem;
  height: 2.5rem;
  font-family: "Pretendard-Regular";
  font-weight: 600;
  font-size: 15px;
  background-color: #000000;
  border-radius: 0.5rem;
  color: #ffffff;
  border: none;

  outline: none;
  box-shadow: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  margin-top: 2rem;
  margin-bottom: 4 rem;
`;
