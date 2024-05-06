import axios from "axios";
import { createAppAsyncThunk } from "../hooks";
import { LoginFormData, RegisterFormData } from "./types";

export const loginUser = createAppAsyncThunk(
  "user/loginUser",
  async (params: LoginFormData) => {
    const response = await axios.post(
      `http://${process.env.REACT_APP_API_URL}/api/auth/login`,
      params
    );
    localStorage.setItem("handMade-token", response.data.id);
    return response.data;
  }
);

export const loginAdmin = createAppAsyncThunk(
  "user/loginAdmin",
  async (params: LoginFormData) => {
    const response = await axios.post(
      `http://${process.env.REACT_APP_API_URL}/api/auth/login`,
      {
        ...params,
        role: "admin",
      }
    );
    localStorage.setItem("handMade-token", response.data.id);
    return response.data;
  }
);

export const registerUser = createAppAsyncThunk(
  "user/registerUser",
  async (params: RegisterFormData) => {
    const response = await axios.post(
      `http://${process.env.REACT_APP_API_URL}/api/auth/register`,
      params
    );
    localStorage.setItem("handMade-token", response.data.id);
    return response.data;
  }
);

export const getUserData = createAppAsyncThunk("user/getUserData", async () => {
  const token = localStorage.getItem("handMade-token");
  if (!token) {
    throw new Error("Token Not Found");
  }
  const config = {
    headers: {
      Authorization: token,
    },
  };
  const response = await axios.get(
    `http://${process.env.REACT_APP_API_URL}/api/auth/user`,
    config
  );
  return response.data;
});
