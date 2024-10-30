import { useState } from "react";
import * as S from "./style";

const Quiz3 = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<"yes" | "no" | null>(
    null,
  );

  return (
    <S.QuizLayout>
      <S.Title>2/3</S.Title>
      <S.Content>
        <S.Quiz>Q2.</S.Quiz>
        <S.QuizContent>든든하게 드시고 싶으신가요?</S.QuizContent>
        <S.ButtonBox>
          <S.Button
            isSelected={selectedAnswer === "yes"}
            onClick={() => setSelectedAnswer("yes")}
          >
            예
          </S.Button>
          <S.Button
            isSelected={selectedAnswer === "no"}
            onClick={() => setSelectedAnswer("no")}
          >
            아니요
          </S.Button>
        </S.ButtonBox>
      </S.Content>
    </S.QuizLayout>
  );
};

export default Quiz3;
