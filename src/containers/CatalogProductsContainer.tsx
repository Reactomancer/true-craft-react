import React from "react";
import { useAppSelector } from "../store/hooks";
import { categoriesSelector } from "../store/categories/selectors";
import { productsSelector } from "../store/products/selectors";
import { ProductCard } from "../components/ProductCard";
interface Props {
  categoryId?: string;
}

export const CatalogProductsContainer: React.FC<Props> = ({ categoryId }) => {
  const categories = useAppSelector(categoriesSelector);
  const category = categories?.find((cat) => cat.id == Number(categoryId));
  const products = useAppSelector(productsSelector);
  return (
    <div>
      <div className="my-[66px] bg-[#FDF2E9] py-20 flex justify-center text-3xl font-bold">
        {category ? <h1>{category?.categoryName}</h1> : <p>Loading...</p>}
      </div>
      {products?.length ? (
        <div className="p-10 flex flex-row flex-wrap gap-10 items-center justify-center border-b border-b-black">
          {products?.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-2xl">No Products</p>
      )}
    </div>
  );
};
