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

export interface CartInitialState {
  cart?: CartItem[];
  userInfo?: CartUserInfo;
}
