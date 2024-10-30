import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignUp } from "../../context/SignUpContext";
import * as S from "./style";
import HealthLogo from "../../assets/health.svg";

export const Target = () => {
  const navigate = useNavigate();
  const { updateSignUpData, submitSignUp } = useSignUp();
  const [goal, setGoal] = useState("");

  const handleSubmit = async () => {
    if (!goal) {
      alert("건강 목표를 입력해주세요.");
      return;
    }

    updateSignUpData({ goal });
    try {
      await submitSignUp();
      navigate("/main");
    } catch (error) {
      alert("회원가입 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <S.TargetLayout>
      <S.MenuLogo src={HealthLogo} alt="menu" />
      <S.Title>
        <S.span>건강</S.span>목표를 작성해주세요!
      </S.Title>

      <S.Content>건강 목표를 설정하여 거기에 맞춰</S.Content>
      <S.Content>식단을 짜봅시다.</S.Content>
      <S.IDBox>
        <S.IDInput
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          placeholder="건강 목표를 입력해주세요."
        />
      </S.IDBox>
      <S.SubmitButton onClick={handleSubmit}>완료</S.SubmitButton>
    </S.TargetLayout>
  );
};
