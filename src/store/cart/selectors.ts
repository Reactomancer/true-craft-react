import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

export const userCartSelector = (state: RootState) => state.cart.cart;

export const userCartTotalSelector = createSelector(
  userCartSelector,
  (cart) => {
    return cart?.reduce(
      (accumulator, item) => accumulator + item.product.currentPrice,
      0
    );
  }
);

export const userCartDiscountPercentageSelector = createSelector(
  userCartSelector,
  userCartTotalSelector,
  (cart, total) => {
    const totalDiscount = cart?.reduce(
      (accumulator, item) =>
        accumulator + (item.product.firstPrice - item.product.currentPrice),
      0
    );

    const totalCartValue = total || 0;
    const discountPercentage = totalDiscount ?? 1 / totalCartValue;

    return discountPercentage;
  }
);
