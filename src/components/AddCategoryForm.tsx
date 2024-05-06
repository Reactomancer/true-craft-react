import Button from "@mui/material/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { MouseEventHandler, FC } from "react";
import { CategoryFormData } from "../store/types";

interface AddCatForm {
  onSubmit: SubmitHandler<CategoryFormData>;
  onClose: MouseEventHandler;
}

const AddCategoryForm: FC<AddCatForm> = ({
  onSubmit,
  onClose: handleClose,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryFormData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <input
        {...register("categoryName", { required: true })}
        placeholder="Category Name"
        className="placeholder:text-black text-black px-2 py-1 rounded-full"
      />
      {errors.categoryName && (
        <span className="text-red-500">This field is required</span>
      )}

      <input
        {...register("previewImageLink", { required: true })}
        placeholder="Preview Photo Link"
        className="placeholder:text-black text-black px-2 py-1 rounded-full"
      />
      {errors.previewImageLink && (
        <span className="text-red-500">This field is required</span>
      )}

      <div className="flex flex-row justify-end">
        <Button type="submit">Submit</Button>
        <Button onClick={handleClose}>Cancel</Button>
      </div>
    </form>
  );
};

export default AddCategoryForm;
