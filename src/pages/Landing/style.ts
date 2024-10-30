import styled from "styled-components";

export const LandingLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
  height: 100vh;
`;

export const Logo = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  margin-top: 112px;
`;

export const Explain = styled.img`
  width: 16rem;
  margin-top: 2rem;
`;

export const Black = styled.img`
  position: absolute;
  width: 10rem;
  left: 0;
  top: 14rem;
`;

export const White = styled.img`
  position: absolute;
  width: 10rem;
  right: 0;
  top: 11rem;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: absolute;
  bottom: 12rem;
`;

export const LoginButton = styled.button`
  width: 16rem;
  height: 2.5rem;
  border-radius: 8px;
  border: none;
  background-color: #ff6c46;
  color: #ffffff;
  font-family: "Pretendard-Regular";
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
`;

export const SignUpButton = styled.button`
  width: 16rem;
  height: 2.5rem;
  border-radius: 8px;
  border: none;
  background-color: #ffffff;
  color: #000000;
  font-family: "Pretendard-Regular";
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
`;
