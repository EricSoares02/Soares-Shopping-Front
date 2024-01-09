import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/user-reducer";

const rootReducer = combineReducers({
    userSlice,
});



const store = configureStore({
  reducer: rootReducer,
});


export default store;
