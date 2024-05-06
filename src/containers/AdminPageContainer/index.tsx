import React from "react";
import { SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "../../store/hooks";
import { loginAdmin } from "../../store/users/actions";
import { LoginFormData } from "../../store/users/types";
import { AdminLogin } from "../../components/AdminLogin";

const AdminLoginPageContainer: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleSubmit: SubmitHandler<LoginFormData> = (data) => {
    dispatch(loginAdmin(data));
  };
  return (
    <>
      <AdminLogin onSubmit={handleSubmit} />
    </>
  );
};

export default AdminLoginPageContainer;
