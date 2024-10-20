import React from "react";
import { Product } from "../store/types";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  conversionSelector,
  currencySelector,
} from "../store/products/selectors";
import { userByIdSelector } from "../store/users/selectors";
import { addFav } from "../store/users/actions";
import { addToCart } from "../store/cart/actions";

interface Props {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const dispatch = useAppDispatch();

  const rate = useAppSelector(conversionSelector);
  const currency = useAppSelector(currencySelector);
  const user = useAppSelector(userByIdSelector);

  const handleAddToCart = () => {
    if (product.id) {
      dispatch(addToCart({ productId: product.id }));
    }
  };

  const handleAddFav = () => {
    if (user?.id && product.id) {
      dispatch(addFav({ userId: user?.id, productId: product.id }));
    }
  };

  const convertedCurrentPrice = `${((rate ?? 1) * product.currentPrice).toFixed(
    2
  )} ${currency ?? "EGP"}`;
  const convertedFirstPrice = `${((rate ?? 1) * product.firstPrice).toFixed(
    2
  )} ${currency ?? "EGP"}`;

  return (
    <div className="flex flex-col">
      <div className="w-full h-max max-w-sm rounded-lg shadow  border-gray-700">
        <NavLink
          to={`/catalog/${product.categoryId}/${product.id}`}
          className="flex flex-col"
        >
          <img
            className="p-8 rounded-t-lg w-[382px] h-[382px]"
            src={product.previewImageLink}
            alt="product image"
          />
        </NavLink>

        <div className="px-5 pb-5 flex flex-col gap-4">
          <NavLink
            to={`/catalog/${product.categoryId}/${product.id}`}
            className="flex flex-col"
          >
            <h5 className="text-xl h-[56px] font-semibold tracking-tight  text-black">
              {product.productName}
            </h5>
          </NavLink>
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
          <button
            onClick={handleAddToCart}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to Cart
          </button>
          <button
            onClick={handleAddFav}
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};
