import axios from "axios";
import { createAppAsyncThunk } from "../hooks";
import { CategoriesResponse, Category, CategoryFormData } from "../types";

export const getCategories = createAppAsyncThunk(
  "categories/getCategories",
  async () => {
    const response = await axios.get<CategoriesResponse>(
      `http://${process.env.REACT_APP_API_URL}/api/category/getAll`
    );
    return response.data;
  }
);

export const createCategory = createAppAsyncThunk(
  "categories/createCategory",
  async (params: CategoryFormData) => {
    const response = await axios.post<Category>(
      `http://${process.env.REACT_APP_API_URL}/api/category/create`,
      params
    );
    return response.data;
  }
);

export const editCategory = createAppAsyncThunk(
  "categories/editCategory",
  async (params: Category) => {
    const response = await axios.put<Category>(
      `http://${process.env.REACT_APP_API_URL}/api/category/${params.id}`,
      params
    );
    return response.data;
  }
);

export const deleteCategory = createAppAsyncThunk(
  "categories/deleteCategory",
  async (id: number) => {
    const response = await axios.delete<number>(
      `http://${process.env.REACT_APP_API_URL}/api/category/${id}`
    );
    return response.data;
  }
);
