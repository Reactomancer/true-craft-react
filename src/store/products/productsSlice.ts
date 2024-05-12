import { createSlice } from "@reduxjs/toolkit";
import { ProductsState } from "../types";
import {
  createProduct,
  deleteProduct,
  editProduct,
  getProductById,
  getProducts,
  getProductsByCategoryId,
  searchProducts,
} from "./action";

const initialState: ProductsState = {
  loading: false,
  error: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(getProducts.pending, (state) => {
      state.loading = true;
    });

    addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload.products;
    });

    addCase(getProductsByCategoryId.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload.products;
    });
    addCase(getProducts.rejected, (state) => {
      state.loading = false;
      state.error = "Failed to fetch products";
    });

    addCase(createProduct.pending, (state) => {
      state.loading = true;
    });

    addCase(createProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.products?.push(action.payload);
    });

    addCase(searchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.search = action.payload.products;
    });

    addCase(getProductById.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
    });

    addCase(createProduct.rejected, (state) => {
      state.loading = false;
      state.error = "Failed to fetch products";
    });
    addCase(deleteProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.products = state.products?.filter(
        (product) => action.payload !== product.id
      );
    });
    addCase(editProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.products = state.products?.map((category) => {
        if (category.id === action.payload.id) {
          return action.payload;
        }
        return category;
      });
    });
  },
});
