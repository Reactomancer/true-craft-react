import { configureStore } from "@reduxjs/toolkit";
import { categoriesSlice } from "./categories/categoriesSlice";
import { productsSlice } from "./products/productsSlice";
import usersSlice from "./users/usersSlice";
import { listenerMiddleware } from "./start-app-listening";
import { cartSlice } from "./cart/cartSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
    categories: categoriesSlice.reducer,
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).prepend(listenerMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
