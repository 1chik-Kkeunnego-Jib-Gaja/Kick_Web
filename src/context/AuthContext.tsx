import React, { createContext, useContext, useState } from "react";

interface LoginRequestData {
  nickname: string;
  password: string;
}

interface AuthContextType {
  login: (nickname: string, password: string) => Promise<void>;
  isLoggedIn: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = async (nickname: string, password: string) => {
    try {
      const response = await fetch("http://211.112.175.88:9999/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nickname, password }),
      });

      if (!response.ok) {
        throw new Error("로그인 실패");
      }

      const data = await response.json();
      console.log("로그인 성공:", data);
      setIsLoggedIn(true);

      if (data.token) {
        localStorage.setItem("token", data.token);
      }
    } catch (error) {
      console.error("로그인 에러:", error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ login, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
