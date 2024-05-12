import React from "react";
import { Product } from "../store/types";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import {
  conversionSelector,
  currencySelector,
} from "../store/products/selectors";

interface Props {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const rate = useAppSelector(conversionSelector);
  const currency = useAppSelector(currencySelector);

  const convertedCurrentPrice = `${((rate ?? 1) * product.currentPrice).toFixed(
    2
  )} ${currency ?? "EGP"}`;
  const convertedFirstPrice = `${((rate ?? 1) * product.firstPrice).toFixed(
    2
  )} ${currency ?? "EGP"}`;

  return (
    <NavLink
      to={`/catalog/${product.categoryId}/${product.id}`}
      className="flex flex-col"
    >
      <div className="w-full h-max max-w-sm rounded-lg shadow  border-gray-700">
        <img
          className="p-8 rounded-t-lg w-[382px] h-[382px]"
          src={product.previewImageLink}
          alt="product image"
        />

        <div className="px-5 pb-5 flex flex-col gap-4">
          <h5 className="text-xl h-[56px] font-semibold tracking-tight  text-black">
            {product.productName}
          </h5>

          {product.rating ? (
            <div className="flex items-center mt-2.5 mb-5">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                {Array.from({ length: Number(product.rating) }, (_, index) => (
                  <svg
                    key={index}
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                ))}
                {Array.from(
                  { length: 5 - Number(product.rating) },
                  (_, index) => (
                    <svg
                      key={index + Number(product.rating)}
                      className="w-4 h-4 text-gray-200 dark:text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375 a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  )
                )}
              </div>
              <span className=" text-xs font-semibold px-2.5 py-0.5 rounded bg-blue-200 text-blue-800 ms-3">
                {product.rating}
              </span>
            </div>
          ) : (
            <p className="text-black">No rating</p>
          )}
          <div className="flex items-center justify-between ">
            {product.currentPrice === product.firstPrice ? (
              <span className="text-xl font-bold text-black">
                {convertedCurrentPrice}
              </span>
            ) : (
              <div className="flex flex-row justify-between w-full">
                <span className="text-xl font-bold  text-black">
                  {convertedCurrentPrice}
                </span>
                <span className="text-xl font-bold text-black dark:text-red-800 line-through pr-2">
                  {convertedFirstPrice}
                </span>
              </div>
            )}
          </div>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add to cart
          </button>
        </div>
      </div>
    </NavLink>
  );
};
