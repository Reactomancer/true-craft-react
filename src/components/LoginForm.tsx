import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { LoginFormData } from "../store/users/types";

interface Props {
  onSubmit: SubmitHandler<LoginFormData>;
}

export const LoginForm: React.FC<Props> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-[96px] font-bold">Welcome Back !</h1>
      <h2 className="text-[24px] mb-[70px]">Please login in to continue</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center"
      >
        <div className="flex flex-col justify-center items-center mb-[50px]">
          <label className="font-bold text-[36px] mb-[30px]">Email</label>
          <input
            color="info"
            {...register("email", { required: true })}
            className="bg-[#D9D9D9] rounded-lg"
            style={{ fontSize: 30 }}
          />
          {errors.email && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>
        <label className="font-bold text-[36px] mb-[30px]">Password</label>
        <input
          type="password"
          {...register("password", { required: true })}
          className="bg-[#D9D9D9] rounded-lg"
          style={{ fontSize: 30 }}
        />
        {errors.password && (
          <span className="text-red-600">This field is required</span>
        )}

        <Link
          className="font-bold text-[24px] my-[27px] hover:text-blue-600"
          to={"/"}
        >
          Forgot Password ?
        </Link>
        <button
          type="submit"
          className="bg-black text-white rounded-[30px] w-[340px] h-[50px] mb-9 text-[36px] flex justify-center items-center font-bold"
        >
          Login
        </button>
      </form>
    </div>
  );
};
