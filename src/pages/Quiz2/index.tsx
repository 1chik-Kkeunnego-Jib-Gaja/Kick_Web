import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../context/QuizContext";
import * as S from "./style";
import { useState } from "react";

const Quiz2 = () => {
  const navigate = useNavigate();
  const { setAnswer } = useQuiz();
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);

  const handleAnswer = (value: boolean) => {
    setSelectedAnswer(value);
    setAnswer("sweet", value);
    setTimeout(() => navigate("/quiz3"), 300);
  };

  return (
    <S.QuizLayout>
      <S.Title>2/3</S.Title>
      <S.Content>
        <S.Quiz>Q2.</S.Quiz>
        <S.QuizContent>오늘은 단게 떙기시나요?</S.QuizContent>
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

export default Quiz2;
