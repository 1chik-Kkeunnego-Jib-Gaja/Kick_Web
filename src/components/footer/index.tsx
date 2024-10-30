import * as S from "./style";
import { useNavigate } from "react-router-dom";
import Home from "../../assets/home";
import Profile from "../../assets/Profile";
import Lanking from "../../assets/Lanking";
import Store from "../../assets/store";

const Footer = () => {
  const navigate = useNavigate();
  const path = window.location.pathname;

  const getColor = (inputPath: string) => {
    return path === inputPath ? "#000000" : undefined;
  };

  const navItems = [
    {
      path: "/main",
      icon: <Home fill={getColor("/main")} />,
      text: "홈",
    },
    {
      path: "/rank",
      icon: <Lanking fill={getColor("/rank")} />,
      text: "랭킹",
    },
    {
      path: "/post",
      icon: <Store fill={getColor("/post")} />,
      text: "게시물",
    },
    {
      path: "/profile",
      icon: <Profile fill={getColor("/profile")} />,
      text: "프로필",
    },
  ];

  return (
    <S.FooterContainer>
      {navItems.map((item) => (
        <S.NavItem
          key={item.path}
          onClick={() => navigate(item.path)}
          isActive={path === item.path}
        >
          {item.icon}
          <S.NavText isActive={path === item.path}>{item.text}</S.NavText>
        </S.NavItem>
      ))}
    </S.FooterContainer>
  );
};

export default Footer;
