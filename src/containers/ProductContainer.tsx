import React from "react";
import { useAppSelector } from "../store/hooks";
import { productByIdSelector } from "../store/products/selectors";
import { ProductInfo } from "../components/ProductInfo";
import { RelatedItems } from "../components/RelatedItems";
import { Feedback } from "../components/Feedback";

export const ProductContainer: React.FC = () => {
  const product = useAppSelector(productByIdSelector);
  if (product == null) {
    return null;
  }
  return (
    <div>
      <div className="my-[66px] bg-[#FDF2E9] py-20 flex justify-center text-3xl font-bold">
        {product ? <h1>{product?.productName}</h1> : <p>Loading...</p>}
      </div>
      <ProductInfo product={product} />
      <RelatedItems product={product} />
      <Feedback />
    </div>
  );
};
