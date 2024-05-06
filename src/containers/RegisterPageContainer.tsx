import React from "react";
import { SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "../store/hooks";
import { registerUser } from "../store/users/actions";
import { RegisterFormData } from "../store/users/types";
import { RegisterForm } from "../components/RegisterForm";

const RegisterPageContainer: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleSubmit: SubmitHandler<RegisterFormData> = (data) => {
    dispatch(registerUser(data));
  };
  return (
    <>
      <RegisterForm onSubmit={handleSubmit} />
    </>
  );
};

export default RegisterPageContainer;
