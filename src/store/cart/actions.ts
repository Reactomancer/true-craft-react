import axios from "axios";
import { createAppAsyncThunk } from "../hooks";
import { Product } from "../types";
import { userByIdSelector } from "../users/selectors";
import { CartItem, CartUserInfo } from "./types";
import { userCartTotalSelector } from "./selectors";

export const addToCart = createAppAsyncThunk(
  "cart/addToCart",
  async ({ productId }: { productId: number }, { getState }) => {
    const user = userByIdSelector(getState());

    const response = await axios.post<Product>(
      `http://${process.env.REACT_APP_API_URL}/api/cart/add`,
      { productId, sessionId: user?.shoppingSession?.id }
    );

    return response.data;
  }
);

export const deleteProductFromCart = createAppAsyncThunk(
  "cart/deleteProductFromCart",
  async (params: { sessionId: number; productId: number }) => {
    const response = await axios.delete<number>(
      `http://${process.env.REACT_APP_API_URL}/api/cart/remove`,
      { params }
    );
    return response.data;
  }
);

export const getOrders = createAppAsyncThunk(
  "cart/getProductsFromCart",
  async (userId: number) => {
    const response = await axios.get(
      `http://${process.env.REACT_APP_API_URL}/api/order/getAll/${userId}`
    );
    return response.data;
  }
);

export const submitOrder = createAppAsyncThunk(
  "order/submitOrder",
  async (params: CartUserInfo, { getState }) => {
    const user = userByIdSelector(getState());
    const total = userCartTotalSelector(getState());

    const response = await axios.post(
      `http://${process.env.REACT_APP_API_URL}/api/order/create`,
      { ...params, userId: user?.id, total }
    );
    return response.data;
  }
);

export const getUserCart = createAppAsyncThunk("cart/getUserCart", async () => {
  const token = localStorage.getItem("handMade-token");
  if (!token) {
    throw new Error("Token Not Found");
  }

  const config = {
    headers: {
      Authorization: token,
    },
  };

  const response = await axios.get<CartItem[]>(
    `http://${process.env.REACT_APP_API_URL}/api/cart/get`,
    config
  );
  return response.data;
});
