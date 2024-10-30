import React, { useState } from "react";
import * as S from "./style";

const Quiz1 = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<"yes" | "no" | null>(
    null,
  );

  return (
    <S.QuizLayout>
      <S.Title>1/3</S.Title>
      <S.Content>
        <S.Quiz>Q1.</S.Quiz>
        <S.QuizContent>오늘은 매운게 떙기시나요?</S.QuizContent>
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

export default Quiz1;
