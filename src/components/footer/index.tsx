import * as S from "./style";
import { useNavigate } from "react-router-dom";
import Home from "../../assets/home";
import Profile from "../../assets/Profile";
import Lanking from "../../assets/Lanking";
import Store from "../../assets/store";

const Footer = () => {
  const navigate = useNavigate();
  const paths = ["/main", "/rank", "/post", "/profile"];
  const path = window.location.pathname;

  const getColor = (inputPath: string) => {
    return path === inputPath ? "#FF6C46" : "";
  };

  if (!paths.includes(path)) return null;

  const navItems = [
    {
      path: "/main",
      img: <Home fill={getColor("/main")} />,
      text: "홈",
    },
    {
      path: "/rank",
      img: <Lanking fill={getColor("/rank")} />,
      text: "랭킹",
    },
    {
      path: "/post",
      img: <Store fill={getColor("/post")} />,
      text: "게시물",
    },
    {
      path: "/profile",
      img: <Profile fill={getColor("/profile")} />,
      text: "프로필",
    },
  ];

  return (
    <S.BottomNavigation>
      {navItems.map((nav) => (
        <S.NavBlock
          key={nav.path}
          color={getColor(nav.path)}
          onClick={() => navigate(nav.path)}
        >
          {nav.img}
          <p>{nav.text}</p>
        </S.NavBlock>
      ))}
    </S.BottomNavigation>
  );
};

export default Footer;
