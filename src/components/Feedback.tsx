import { FC } from "react";
import { Reviews } from "../store/types";
import { Ratings } from "./Ratings";

interface FeedbackProps {
  review: Reviews;
}

export const Feedback: FC<FeedbackProps> = ({
  review: { isVerified, userName, reviewText, rating },
}) => {
  const userInitials = userName.split(" ");

  return (
    <div className="p-10 border-b-stone-700 border">
      <div className="flex flex-row items-center gap-2 mt-4 text-xl">
        <div className="border border-gray-500 p-2 rounded-full">
          {userInitials[0].at(0)} {userInitials[1].at(0)}
        </div>
        <span className="text-2xl">{userName}</span>
        <span className="text-green-800">
          {isVerified ? "verified" : "not verified"}
        </span>
      </div>
      <p className="text-[#A3A3A3] text-xl mt-8 max-w-4xl">{reviewText}</p>

      <Ratings rating={rating.toString()} />
    </div>
  );
};
