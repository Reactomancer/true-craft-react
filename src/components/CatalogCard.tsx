import React from "react";
import { Category } from "../store/types";

interface Props {
  category: Category;
}
export const CatalogCard: React.FC<Props> = ({ category }) => {
  return (
    <div className="flex flex-col items-center border-2">
      <img
        className="w-60 h-60 border-b"
        src={category.previewImageLink}
        alt=""
      />

      <p className="text-2xl p-3">{category.categoryName}</p>
    </div>
  );
};
