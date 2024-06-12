import { Product } from "../types";

export interface CartItem {
  product: Product;
  id: number;
  sessionId: number;
}

export interface CartUserInfo {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  city: string;
  zipCode: number;
  address: string;
  userId: number;
}

export interface Order {
  id: number;
  userId: number;
  total: number;
  address: string;
  zipCode: null;
  city: null;
  country: null;
  createdAt: string;
  updatedAt: string;
}

export interface CartInitialState {
  cart?: CartItem[];
  userInfo?: CartUserInfo;
  orderItems?: { orders: Order[] };
  shippingFee?: number;
}
