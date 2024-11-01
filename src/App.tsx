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
import { Recipe } from "./pages/recipe";
import { After } from "./pages/After";
import Rank from "./pages/Rank";
import Post from "./pages/post";
import Main from "./pages/main";
import VegetableChoice from "./pages/vegetableChocie";
import MeatChoice from "./pages/MeatChocie";
import { QuizProvider } from "./context/QuizContext";
import Quiz1 from "./pages/Quiz1";
import Quiz2 from "./pages/Quiz2";
import Quiz3 from "./pages/Quiz3";
import { SignUpProvider } from "./context/SignUpContext";
import { Search } from "./pages/Search";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <SignUpProvider>
          <QuizProvider>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/allergy" element={<Allergy />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/target" element={<Target />} />
              <Route path="/main" element={<Main />} />
              <Route path="/recommend" element={<Recommend />} />
              <Route path="/detail/:id" element={<Detail />} />
              <Route path="/recipe" element={<Recipe />} />
              <Route path="/post" element={<Post />} />
              <Route path="/after" element={<After />} />
              <Route path="/vegetable" element={<VegetableChoice />} />
              <Route path="/meat" element={<MeatChoice />} />
              <Route path="/rank" element={<Rank />} />
              <Route path="/quiz1" element={<Quiz1 />} />
              <Route path="/quiz2" element={<Quiz2 />} />
              <Route path="/quiz3" element={<Quiz3 />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </QuizProvider>
        </SignUpProvider>
      </Router>
    </>
  );
};

export default App;
