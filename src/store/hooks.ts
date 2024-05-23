import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispatch, RootState } from ".";
import { useSelector } from "react-redux";
import {
  AsyncThunk,
  AsyncThunkPayloadCreator,
  createAsyncThunk,
} from "@reduxjs/toolkit";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

type ThunkApiConfig = {
  state: RootState;
  dispatch: AppDispatch;
};

export const createAppAsyncThunk = <Returned, ThunkArg = void>(
  type: string,
  thunkPayloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg>
): AsyncThunk<Returned, ThunkArg, ThunkApiConfig> =>
  createAsyncThunk<Returned, ThunkArg, ThunkApiConfig>(
    type,
    thunkPayloadCreator
  );
