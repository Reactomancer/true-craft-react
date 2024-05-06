import { RootState } from "..";

export const userByIdSelector = (state: RootState) => state.users.user;
