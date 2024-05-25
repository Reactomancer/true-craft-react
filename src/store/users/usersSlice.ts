import { createSlice } from "@reduxjs/toolkit";
import { addFav, deleteFav, getUserData, loginUser } from "./actions";
import { UserData } from "./types";

export interface UsersState {
  user?: UserData;
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  user: { favorites: [] },
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
      .addCase(addFav.fulfilled, (state, action) => {
        state.loading = false;
        state.user?.favorites.push(action.payload);
      })

      .addCase(loginUser.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch user";
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(deleteFav.fulfilled, (draft, { payload }) => {
        if (draft.user) {
          draft.user.favorites = draft.user?.favorites.filter(
            (favorite) => favorite.id !== payload.favoriteId
          );
        }
      });
  },
});

export default usersSlice.reducer;
