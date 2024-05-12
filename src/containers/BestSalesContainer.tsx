import React from "react";
import { useAppSelector } from "../store/hooks";
import { bestSalesSelector } from "../store/products/selectors";
import { ProductCard } from "../components/ProductCard";

export const BestSalesContainer: React.FC = () => {
  const bestSales = useAppSelector(bestSalesSelector);
  console.log(bestSales);
  return (
    <div>
      <div className="my-[66px] bg-[#FDF2E9] py-20 flex justify-center text-3xl font-bold">
        Best Sales
      </div>
      {bestSales?.length ? (
        <div className="p-10 flex flex-row flex-wrap gap-10 items-center justify-center border-b border-b-black">
          {bestSales?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-2xl">No Products</p>
      )}
    </div>
  );
};
