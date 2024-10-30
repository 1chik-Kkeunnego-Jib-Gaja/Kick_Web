import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
  font-family: "Pretendard-Regular";
  background-color: #fff;
  position: fixed;
`;

export const Icon = styled.img`
  width: 5rem;
  height: 5rem;
  margin-top: 5rem;
  margin-bottom: 1.5rem;
`;

export const Title = styled.h2`
  font-family: "Pretendard-Regular";
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
  color: #000;
`;

export const OptionList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Option = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
  color: #000;
  cursor: pointer;

  input[type="radio"] {
    appearance: none;
    -webkit-appearance: none;
    width: 1.2rem;
    height: 1.2rem;
    border: 2px solid #dfdfdf;
    border-radius: 50%;
    margin-right: 0.5rem;
    position: relative;
    cursor: pointer;

    &:checked {
      border-color: #ff6c46;

      &:after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 0.7rem;
        height: 0.7rem;
        background-color: #ff6c46;
        border-radius: 50%;
      }
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const OptionName = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1rem;
  font-family: "Pretendard-Regular";
  input[type="radio"] {
    margin-right: 0.5rem;
  }
`;

export const OptionDescription = styled.div`
  margin-left: 1.5rem;
  font-family: "Pretendard-Regular";
  font-size: 0.9rem;
  color: #000;
  font-weight: 600;
  line-height: 1.4;
`;

export const Button = styled.button`
  margin-top: 2rem;
  padding: 1rem 2rem;
  background-color: #000000;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  max-width: 300px;
  margin-bottom: 15rem;
  font-family: "Pretendard-Regular";
  &:hover {
    background-color: #333333;
  }

  &:active {
    transform: translateY(1px);
  }
`;
