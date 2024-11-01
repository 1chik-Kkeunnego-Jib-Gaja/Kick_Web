import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../context/QuizContext";
import * as S from "./style";
import { useState } from "react";

const Quiz3 = () => {
  const navigate = useNavigate();
  const { answers, setAnswer } = useQuiz();
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);

  const handleAnswer = async (value: boolean) => {
    setSelectedAnswer(value);
    setAnswer("full", value);

    try {
      const response = await fetch(
        "http://211.112.175.88:9999/combinations/recommend",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            spicy: answers.spicy,
            sweet: answers.sweet,
            full: value,
          }),
        },
      );

      if (!response.ok) {
        throw new Error("추천 요청 실패");
      }

      const data = await response.json();
      console.log("추천 응답:", data);

      setTimeout(() => {
        navigate("/after", {
          state: { combinations: data.combinationList },
        });
      }, 300);
    } catch (error) {
      console.error("추천 요청 에러:", error);
      alert("추천을 받아오는데 실패했습니다.");
    }
  };

  return (
    <S.QuizLayout>
      <S.Title>3/3</S.Title>
      <S.Content>
        <S.Quiz>Q3.</S.Quiz>
        <S.QuizContent>든든하게 드시고 싶으신가요?</S.QuizContent>
        <S.ButtonBox>
          <S.Button
            isSelected={selectedAnswer === true}
            onClick={() => handleAnswer(true)}
          >
            예
          </S.Button>
          <S.Button
            isSelected={selectedAnswer === false}
            onClick={() => handleAnswer(false)}
          >
            아니요
          </S.Button>
        </S.ButtonBox>
      </S.Content>
    </S.QuizLayout>
  );
};

export default Quiz3;
