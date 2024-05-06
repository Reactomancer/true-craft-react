import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispatch, RootState } from ".";
import { useSelector } from "react-redux";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const createAppAsyncThunk = <Returned, ThunkArg = void>(
  typePrefix: string,
  payloadCreator: (arg: ThunkArg, thunkAPI: unknown) => Promise<Returned>
) => {
  return createAsyncThunk(typePrefix, async (arg: ThunkArg, thunkAPI) => {
    const response = await payloadCreator(arg, thunkAPI);
    return response;
  });
};
