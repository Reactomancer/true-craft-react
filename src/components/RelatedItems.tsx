import { FC } from "react";
import { ProductCard } from "./ProductCard";
import { Product } from "../store/types";

interface Prop {
  product: Product;
}

export const RelatedItems: FC<Prop> = ({ product }) => {
  return (
    <div className="border-t-2">
      <h1 className="text-[#B47C4E] font-bold text-center text-2xl mt-10">
        What do customers buy after viewing this item?
      </h1>
      <div className="flex flex-row justify-center">
        {/* placeholder change it with map for the related products and max 4 and remove the prop and put yours Zizo */}
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
      </div>
    </div>
  );
};
