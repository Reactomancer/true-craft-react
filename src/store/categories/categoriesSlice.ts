import { createSlice } from "@reduxjs/toolkit";
import { CategoriesState } from "../types";
import {
  createCategory,
  deleteCategory,
  editCategory,
  getCategories,
} from "./actions";

const initialState: CategoriesState = {
  loading: false,
  error: null,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(getCategories.pending, (state) => {
      state.loading = true;
    });
    addCase(getCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = action.payload.categories;
    });
    addCase(getCategories.rejected, (state) => {
      state.loading = false;
      state.error = "Failed to fetch categories";
    });

    addCase(createCategory.pending, (state) => {
      state.loading = true;
    });
    addCase(createCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.categories?.push(action.payload);
    });
    addCase(createCategory.rejected, (state) => {
      state.loading = false;
      state.error = "Failed to fetch categories";
    });
    addCase(deleteCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = state.categories?.filter(
        (category) => action.payload !== category.id
      );
    });
    addCase(editCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = state.categories?.map((category) => {
        if (category.id === action.payload.id) {
          return action.payload;
        }
        return category;
      });
    });
  },
});
