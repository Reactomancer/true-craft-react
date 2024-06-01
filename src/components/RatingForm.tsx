import { FC } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { AddReviewParams } from "../store/types";
import { Button, Rating, Typography } from "@mui/material";

interface RatingFormProps {
  onSubmit: SubmitHandler<AddReviewParams>;
  defaultValues?: Partial<AddReviewParams>;
}

export const RatingForm: FC<RatingFormProps> = ({
  onSubmit,
  defaultValues,
}) => {
  const { handleSubmit, register, control } = useForm<AddReviewParams>({
    defaultValues,
  });

  return (
    <>
      <Typography component="h3">Add Review</Typography>
      <form className="flex-col p-24 gap-12" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex-col items-center gap-8">
          <label htmlFor="reviewText">Enter text</label>
          <textarea
            placeholder="Write a review"
            id="reviewText"
            className="p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("reviewText", { required: true })}
          />
        </div>
        <div className="flex-col items-center gap-8">
          <label htmlFor="rate">Choose rate</label>
          <div>
            <Controller
              control={control}
              name="rating"
              render={({ field }) => <Rating id="rate" {...field} />}
            />
          </div>
        </div>
        <Button type="submit">Add Review</Button>
      </form>
    </>
  );
};
