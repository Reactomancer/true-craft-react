import React from "react";
import { useAppSelector } from "../store/hooks";
import { productByIdSelector } from "../store/products/selectors";
import { ProductInfo } from "../components/ProductInfo";

export const ProductContainer: React.FC = () => {
  const product = useAppSelector(productByIdSelector);

  return (
    <div>
      <div className="my-[66px] bg-[#FDF2E9] py-20 flex justify-center text-3xl font-bold">
        {product ? <h1>{product?.productName}</h1> : <p>Loading...</p>}
      </div>
      <ProductInfo product={product} />
    </div>
  );
};
