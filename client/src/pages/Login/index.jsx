import React, { useState, useEffect } from "react";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  //   useEffect(() => {
  //     if (token) {
  //       navigate("/profilePage");
  //     }
  //   }, []);

  return (
    <div>
      {isLogin ? (
        <LoginForm setLogin={setIsLogin} />
      ) : (
        <SignUpForm setLogin={setIsLogin} />
      )}
    </div>
  );
};

export default Login;
