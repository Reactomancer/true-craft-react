import React from "react";
import { SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "../store/hooks";
import { loginUser } from "../store/users/actions";
import { LoginFormData } from "../store/users/types";
import { LoginForm } from "../components/LoginForm";

const LoginPageContainer: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleSubmit: SubmitHandler<LoginFormData> = (data) => {
    dispatch(loginUser(data));
  };
  return (
    <>
      <LoginForm onSubmit={handleSubmit} />
    </>
  );
};

export default LoginPageContainer;
