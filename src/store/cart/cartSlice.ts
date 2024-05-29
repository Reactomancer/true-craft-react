import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { deleteProductFromCart, getOrders, getUserCart } from "./actions";
import { CartInitialState, CartUserInfo } from "./types";

const initialState: CartInitialState = {};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addUserInfo: (draft, { payload }: PayloadAction<CartUserInfo>) => {
      draft.userInfo = payload;
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(getUserCart.fulfilled, (draft, { payload }) => {
      draft.cart = payload;
    });

    addCase(getOrders.fulfilled, (draft, { payload }) => {
      draft.orderItems = payload;
    });

    addCase(deleteProductFromCart.fulfilled, (draft, { payload }) => {
      draft.cart = draft.cart?.filter(
        (product) => product.product.id !== payload
      );
    });
  },
});
