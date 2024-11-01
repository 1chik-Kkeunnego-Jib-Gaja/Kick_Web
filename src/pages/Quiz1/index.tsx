import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../context/QuizContext";
import * as S from "./style";
import { useState } from "react";

const Quiz1 = () => {
  const navigate = useNavigate();
  const { setAnswer } = useQuiz();
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);

  const handleAnswer = (value: boolean) => {
    setSelectedAnswer(value);
    setAnswer("spicy", value);
    setTimeout(() => navigate("/quiz2"), 300);
  };

  return (
    <S.QuizLayout>
      <S.Title>1/3</S.Title>
      <S.Content>
        <S.Quiz>Q1.</S.Quiz>
        <S.QuizContent>오늘은 매운게 떙기시나요?</S.QuizContent>
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

export default Quiz1;
