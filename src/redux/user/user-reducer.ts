import { createSlice } from "@reduxjs/toolkit";


const token = localStorage.getItem("token") ?? "";
const name = localStorage.getItem("name") ?? "";


const initialState = {
  access_token: token, 
  user_name: name 
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.access_token = action.payload.access_token;
      state.user_name = action.payload.user_name;

      localStorage.setItem("token", JSON.stringify(state.access_token));
      localStorage.setItem("name", JSON.stringify(state.user_name));
    },

    logout: (state) => {
      state.access_token = "";
      state.user_name = "";

      localStorage.setItem("token", JSON.stringify(state.access_token));
      localStorage.setItem("name", JSON.stringify(state.user_name));
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
