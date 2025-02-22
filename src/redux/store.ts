import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user-slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// Infer types for Redux hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
