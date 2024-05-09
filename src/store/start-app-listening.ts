import { createListenerMiddleware } from "@reduxjs/toolkit";
import type { TypedStartListening } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from ".";

export const listenerMiddleware = createListenerMiddleware();

export type AppStartListening = TypedStartListening<RootState, AppDispatch>;

export const startAppListening =
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  listenerMiddleware.startListening as AppStartListening;
