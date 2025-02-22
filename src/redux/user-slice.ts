import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: {
    email: string;
    password: string;
    loggedIn: boolean;
  } | null;
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signUpUser: (
      state,
      action: PayloadAction<{ email: string; password: string }>,
    ) => {
      state.user = { ...action.payload, loggedIn: false };
    },
    loginUser: (
      state,
      action: PayloadAction<{ email: string; password: string }>,
    ) => {
      if (
        state.user &&
        state.user.email === action.payload.email &&
        state.user.password === action.payload.password
      ) {
        state.user.loggedIn = true;
      } else {
        alert("Invalid credentials");
      }
    },
  },
});

export const { signUpUser, loginUser } = userSlice.actions;
export default userSlice.reducer;
