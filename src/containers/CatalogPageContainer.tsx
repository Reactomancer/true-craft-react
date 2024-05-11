import React from "react";
import { CatalogCard } from "../components/CatalogCard";
import { useAppSelector } from "../store/hooks";
import { categoriesSelector } from "../store/categories/selectors";
import { Link } from "react-router-dom";

export const CatalogPageContainer: React.FC = () => {
  const categories = useAppSelector(categoriesSelector);

  return (
    <div>
      <div className="my-[66px] bg-[#FDF2E9] py-20 flex justify-center text-3xl font-bold">
        Lets Start shopping from TrueCraft!
      </div>
      <div className="p-10 flex flex-row flex-wrap gap-10 items-center justify-center border-b border-b-black">
        {categories?.map((category) => (
          <Link key={category.id} to={`${category.id}`}>
            <CatalogCard key={category.id} category={category} />
          </Link>
        ))}
      </div>
    </div>
  );
};
