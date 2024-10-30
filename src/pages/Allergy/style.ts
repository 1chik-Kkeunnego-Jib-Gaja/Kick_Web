import styled from "styled-components";

export const AllergyLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  height: 60rem;
  background-color: #fff;
`;

export const Window = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 16px;
  margin-top: 2rem;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-top: 16px;
  text-align: center;
  margin-bottom: 1rem;
`;

export const Highlight = styled.span`
  color: #ff4d4d;
`;

export const Content = styled.p`
  font-size: 14px;
  color: #666;
  text-align: center;
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-top: 20px;
  margin-top: 2rem;
`;

export const ItemButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
`;

export const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 4px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ItemName = styled.span`
  font-size: 12px;
  color: #333;
`;
export const NextButton = styled.button`
  width: 16rem;
  height: 2.5rem;
`;
