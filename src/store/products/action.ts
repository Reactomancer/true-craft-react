import axios from "axios";
import { createAppAsyncThunk } from "../hooks";
import { Product, ProductSearchParams, ProductsResponse } from "../types";

export const getProducts = createAppAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await axios.get<ProductsResponse>(
      `http://${process.env.REACT_APP_API_URL}/api/product/getAllProducts`
    );
    return response.data;
  }
);

export const createProduct = createAppAsyncThunk(
  "products/createProduct",
  async (params: Product) => {
    const response = await axios.post<Product>(
      `http://${process.env.REACT_APP_API_URL}/api/product/create`,
      params
    );
    return response.data;
  }
);

export const getProductsByCategoryId = createAppAsyncThunk(
  "products/getProductsByCategoryId",
  async (id: string | undefined) => {
    const response = await axios.get<ProductsResponse>(
      `http://${process.env.REACT_APP_API_URL}/api/product/getAll/${id}`
    );
    return response.data;
  }
);

export const editProduct = createAppAsyncThunk(
  "products/editProduct",
  async (params: Product) => {
    const response = await axios.put<Product>(
      `http://${process.env.REACT_APP_API_URL}/api/product/update/${params.id}`,
      params
    );
    return response.data;
  }
);

export const deleteProduct = createAppAsyncThunk(
  "products/deleteProduct",
  async (id: number) => {
    const response = await axios.delete<number>(
      `http://${process.env.REACT_APP_API_URL}/api/product/${id}`
    );
    return response.data;
  }
);

export const getProductById = createAppAsyncThunk(
  "products/getProductById",
  async (id: string | undefined) => {
    const response = await axios.get<Product>(
      `http://${process.env.REACT_APP_API_URL}/api/product/${id}`
    );
    return response.data;
  }
);

export const searchProducts = createAppAsyncThunk(
  "products/searchProducts",
  async (params: ProductSearchParams) => {
    const response = await axios.get<ProductsResponse>(
      `http://${process.env.REACT_APP_API_URL}/api/product/search/${params.searchText}`
    );
    return response.data;
  }
);

export const getBestSales = createAppAsyncThunk(
  "products/bestSales",
  async () => {
    const response = await axios.get<ProductsResponse>(
      `http://${process.env.REACT_APP_API_URL}/api/product/bestsales`
    );
    return response.data;
  }
);
