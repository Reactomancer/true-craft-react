import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

export const userCartSelector = (state: RootState) => state.cart.cart;

export const cartUserInfoSelector = (state: RootState) => state.cart.userInfo;

export const OrdersListSelector = (state: RootState) => state.cart.orderItems;

export const shippingFeeSelector = (state: RootState) => state.cart.shippingFee;

export const userCartTotalSelector = createSelector(
  userCartSelector,
  shippingFeeSelector,
  (cart, shippingFee) => {
    const total = cart?.reduce(
      (accumulator, item) => accumulator + item.product.currentPrice,
      0
    );
    return (total ?? 0) + (shippingFee ?? 0);
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
    const discountPercentage = (totalDiscount ?? 1) / totalCartValue;

    return discountPercentage.toFixed(2);
  }
);
