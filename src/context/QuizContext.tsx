import React, { createContext, useContext, useState } from "react";

interface QuizContextType {
  answers: {
    spicy: boolean | null;
    sweet: boolean | null;
    full: boolean | null;
  };
  setAnswer: (key: "spicy" | "sweet" | "full", value: boolean) => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [answers, setAnswers] = useState({
    spicy: null,
    sweet: null,
    full: null,
  });

  const setAnswer = (key: "spicy" | "sweet" | "full", value: boolean) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <QuizContext.Provider value={{ answers, setAnswer }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
};

export default QuizContext;
