import { createSlice } from "@reduxjs/toolkit";
import { getUserData, loginUser } from "./actions";
import { UserData } from "./types";

export interface UsersState {
  user?: UserData;
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  loading: false,
  error: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (login) => {
    login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch user";
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      });
  },
});

export const {} = usersSlice.actions;

export default usersSlice.reducer;
