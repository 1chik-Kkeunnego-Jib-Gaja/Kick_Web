import React, { createContext, useContext, useState } from "react";

export type EatingStyleType =
  | "VEGETARIAN"
  | "VEGAN"
  | "LACTO_VEGETARIAN"
  | "OVO_VEGETARIAN"
  | "LACTO_OVO_VEGETARIAN"
  | "PESCO_VEGETARIAN"
  | "POLLO_VEGETARIAN"
  | "FLEXITARIAN"
  | "CARNIVORE"
  | "PRIMAL"
  | "PALEO"
  | "NONE";

export type AllergyType =
  | "NUTS"
  | "SEAFOOD"
  | "FISH"
  | "EGGS"
  | "DAIRY"
  | "SOY"
  | "WHEAT"
  | "FRUITS"
  | "MEAT"
  | "HONEY"
  | "ADDITIVES"
  | "SPICES"
  | "MUSHROOMS";

interface SignUpRequestData {
  nickname: string;
  password: string;
  allergy: AllergyType[];
  eatingStyle: EatingStyleType;
  goal: string;
}

interface SignUpContextType {
  signUpData: SignUpRequestData;
  updateSignUpData: (data: Partial<SignUpRequestData>) => void;
  submitSignUp: () => Promise<void>;
}

const initialSignUpData: SignUpRequestData = {
  nickname: "",
  password: "",
  allergy: [],
  eatingStyle: "NONE",
  goal: "",
};

const SignUpContext = createContext<SignUpContextType | undefined>(undefined);

export const SignUpProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [signUpData, setSignUpData] =
    useState<SignUpRequestData>(initialSignUpData);

  const updateSignUpData = (data: Partial<SignUpRequestData>) => {
    setSignUpData((prev) => ({ ...prev, ...data }));
  };

  const submitSignUp = async () => {
    try {
      const response = await fetch("http://211.112.175.88:9999/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signUpData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("서버 응답 에러:", errorData);
        throw new Error("회원가입 실패");
      }

      const data = await response.json();
      console.log("회원가입 성공:", data);

      if (data.accessToken) {
        localStorage.setItem("token", data.accessToken);
        console.log("토큰 저장 완료");
      }
    } catch (error) {
      console.error("회원가입 에러:", error);
      throw error;
    }
  };

  return (
    <SignUpContext.Provider
      value={{ signUpData, updateSignUpData, submitSignUp }}
    >
      {children}
    </SignUpContext.Provider>
  );
};

export const useSignUp = () => {
  const context = useContext(SignUpContext);
  if (context === undefined) {
    throw new Error("useSignUp must be used within a SignUpProvider");
  }
  return context;
};
