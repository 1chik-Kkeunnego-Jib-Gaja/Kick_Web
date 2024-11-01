import styled from "styled-components";

export const BottomNavigation = styled.nav`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  width: 100%;
  background-color: white;
  box-shadow: 0px -3px 8px rgba(0, 0, 0, 0.04);
  z-index: 1000;
`;

export const NavBlock = styled.div<{ color: string }>`
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 7px;
  font-size: 8px;
  color: ${(props) => (props.color ? props.color : "#DFDFDF")};
  cursor: pointer;

  p {
    font-family: "Pretendard-Regular";
  }

  svg path {
    stroke: ${(props) => (props.color ? props.color : "#DFDFDF")};
  }
`;
