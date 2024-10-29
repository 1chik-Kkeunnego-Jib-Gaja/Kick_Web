import styled from "styled-components";

export const SignUpLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #000000;
  overflow-x: hidden;
  position: fixed;
`;

export const Logo = styled.img`
  display: block;
  width: 5rem;
  margin: 4.5rem auto 3rem;
`;

export const SignUpBox = styled.div`
  width: 100%;
  display: flex;
  margin-left: 2rem;
`;

export const Background = styled.div`
  width: 100rem;
  height: 40rem;
  background-color: #ffffff;
  border-radius: 6rem 0 0;
  margin-left: 0.5rem;
  margin-right: 0;
`;

export const SignUpTitle = styled.img`
  margin-left: 5.5rem;
  margin-top: 4rem;
`;

export const SignUpText = styled.p`
  font-size: 15px;
  margin-left: 1.5rem;
  color: #000000;
  font-family: "Pretendard-Regular";
  font-weight: 600;
  margin-top: 1.5rem;
`;

export const span = styled.span`
  color: #ff6c46;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

export const IDBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PassBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
`;

export const IDTitle = styled.p`
  font-size: 16px;
  margin-left: 2rem;
  color: #000000;
  font-family: "Pretendard-Regular";
  font-weight: 800;
`;

export const PassTitle = styled.p`
  font-size: 16px;
  margin-left: 2rem;
  color: #000000;
  font-family: "Pretendard-Regular";
  font-weight: 800;
`;

export const IDInput = styled.input`
  width: 16rem;
  height: 2.5rem;
  margin-left: 1.8rem;
  margin-top: 0.4rem;
  border-radius: 12px;
  background-color: #f4f4f4;
  border: none;
  &::placeholder {
    color: #acacac;
  }
  font-family: "Pretendard-Regular";
  padding: 2%;
`;

export const PassInput = styled.input`
  width: 16rem;
  height: 2.5rem;
  margin-left: 1.8rem;
  margin-top: 0.4rem;
  border-radius: 12px;
  background-color: #f4f4f4;
  border: none;
  &::placeholder {
    color: #acacac;
  }
  font-family: "Pretendard-Regular";
  padding: 2%;
`;

export const SignUpButton = styled.button`
  width: 16rem;
  height: 2.5rem;
  margin-left: 1.8rem;
  margin-top: 4rem;

  background-color: #1e1e1e;
  color: #ffffff;
  border-radius: 12px;

  font-family: "Pretendard-Regular";
  font-size: 15px;
  font-weight: 600;
`;

export const Text = styled.p`
  font-size: 15px;
  margin-left: 6.5rem;
  margin-top: 0.5rem;
  color: #000000;
`;
