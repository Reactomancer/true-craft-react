import { configureStore } from "@reduxjs/toolkit";
import { categoriesSlice } from "./categories/categoriesSlice";
import { productsSlice } from "./products/productsSlice";
import usersSlice from "./users/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
    categories: categoriesSlice.reducer,
    products: productsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
