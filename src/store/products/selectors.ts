import { RootState } from "..";

export const productsSelector = (state: RootState) => state.products.products;

export const productsByCatIdSelector = (state: RootState) =>
  state.products.products;

export const productByIdSelector = (state: RootState) => state.products.product;

export const productSearchSelector = (state: RootState) =>
  state.products.search;
