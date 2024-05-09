import { RootState } from "..";

export const productsSelector = (state: RootState) => state.products.products;

export const productsByCatIdSelector = (state: RootState) =>
  state.products.products;
