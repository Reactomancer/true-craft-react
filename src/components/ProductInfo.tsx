import React from "react";
import { Product } from "../store/types";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  conversionSelector,
  currencySelector,
} from "../store/products/selectors";
import { addFav } from "../store/users/actions";
import { userByIdSelector } from "../store/users/selectors";
import { addToCart } from "../store/cart/actions";

interface Props {
  product: Product;
}

export const ProductInfo: React.FC<Props> = ({ product }) => {
  const rate = useAppSelector(conversionSelector);
  const currency = useAppSelector(currencySelector);
  const user = useAppSelector(userByIdSelector);
  const dispatch = useAppDispatch();

  const convertedCurrentPrice = `${((rate ?? 1) * product.currentPrice).toFixed(
    2
  )} ${currency ?? "EGP"}`;
  const convertedFirstPrice = `${((rate ?? 1) * product.firstPrice).toFixed(
    2
  )} ${currency ?? "EGP"}`;

  const handleAddFav = () => {
    if (user?.id && product.id) {
      dispatch(addFav({ userId: user?.id, productId: product.id }));
    }
  };

  const handleAddToCart = () => {
    if (product.id) {
      dispatch(addToCart({ productId: product.id }));
    }
  };

  return (
    <div className="  py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 mb-4">
              <img
                className="w-full h-full object-cover"
                src={product?.previewImageLink}
                alt="Product Image"
              />
            </div>
            <div className="flex -mx-2 mb-4">
              <div className="w-1/2 px-2">
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-gray-900  text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 "
                >
                  Add to Cart
                </button>
              </div>
              <div className="w-1/2 px-2">
                <button
                  onClick={handleAddFav}
                  className="w-full bg-gray-200  text-gray-800  py-2 px-4 rounded-full font-bold hover:bg-gray-300 "
                >
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800  mb-2">
              {product?.productName}
            </h2>
            <p className="text-[#8F8F8F]  text-sm mb-4">
              {product?.description}
            </p>
            {product?.rating ? (
              <div className="flex items-center mt-2.5 mb-5">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  {Array.from(
                    { length: Number(product.rating) },
                    (_, index) => (
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
                    )
                  )}
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
              <p className="text-[#8F8F8F]">No rating</p>
            )}
            <div className="flex mb-4 mt-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700">Price: </span>
                <span className="text-gray-600 mr-4">
                  {convertedCurrentPrice}
                </span>
                {convertedCurrentPrice !== convertedFirstPrice && (
                  <span className="text-red-500 line-through">
                    {convertedFirstPrice}
                  </span>
                )}
              </div>
            </div>

            <div>
              <span className="font-bold text-gray-700 ">
                Product Description:
              </span>
              <p className="text-[#8F8F8F]  text-sm mt-2  mb-10">
                {product?.description}
              </p>
              {product?.productMeta.map((charachterstic) => (
                <div className="flex flex-row text-black">
                  <p className="text-[#8F8F8F]  text-lg">
                    {charachterstic.key} :
                  </p>
                  <p className="text-[#8F8F8F] text-lg">
                    &nbsp;{charachterstic.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
