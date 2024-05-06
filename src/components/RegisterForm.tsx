import { useForm, SubmitHandler } from "react-hook-form";
import { RegisterFormData } from "../store/users/types";

interface Props {
  onSubmit: SubmitHandler<RegisterFormData>;
}

export const RegisterForm: React.FC<Props> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormData>();

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-[96px] font-bold">Get Started !</h1>
      <h2 className="text-[24px] mb-[70px]">
        Please enter your details to sign up
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center"
      >
        <div className="flex flex-col justify-center items-center mb-[50px]">
          <label className="font-bold text-[36px] mb-[30px]">First Name</label>
          <input
            color="info"
            {...register("firstName", { required: true })}
            className="bg-[#D9D9D9] rounded-lg"
            style={{ fontSize: 30 }}
          />
          {errors.firstName && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>
        <div className="flex flex-col justify-center items-center mb-[50px]">
          <label className="font-bold text-[36px] mb-[30px]">Last Name</label>
          <input
            color="info"
            {...register("lastName", { required: true })}
            className="bg-[#D9D9D9] rounded-lg"
            style={{ fontSize: 30 }}
          />
          {errors.lastName && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>
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
        <div className="flex flex-col justify-center items-center mb-[50px]">
          <label className="font-bold text-[36px] mb-[30px]">
            Repeat Password
          </label>
          <input
            type="password"
            {...register("repeatPassword", {
              validate: (value) =>
                value === watch("password") || "The passwords do not match",
            })}
            className="bg-[#D9D9D9] rounded-lg"
            style={{ fontSize: 30 }}
          />
          {errors.repeatPassword && (
            <span className="text-red-600">
              {errors.repeatPassword.message}
            </span>
          )}
        </div>
        <div className="flex flex-col justify-center items-center mb-[50px]">
          <label className="font-bold text-[36px] mb-[30px]">Phone</label>
          <input
            color="info"
            {...register("phone", { required: true })}
            className="bg-[#D9D9D9] rounded-lg"
            style={{ fontSize: 30 }}
          />
          {errors.phone && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>
        <button
          type="submit"
          className="bg-black text-white rounded-[30px] w-[340px] h-[50px] mb-9 text-[36px] flex justify-center items-center font-bold"
        >
          Register
        </button>
      </form>
    </div>
  );
};
