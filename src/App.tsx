import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { Allergy } from "./pages/Allergy";
import { Menu } from "./pages/menu";
import { Target } from "./pages/target";
import { Landing } from "./pages/Landing";
import { Recommend } from "./pages/recommend";
import { Detail } from "./pages/Detail";
import Main from "./pages/main";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/allergy" element={<Allergy />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/target" element={<Target />} />
          <Route path="/main" element={<Main />} />
          <Route path="/recommend" element={<Recommend />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
