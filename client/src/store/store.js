import { configureStore } from "@reduxjs/toolkit";
import accountsReducer from "../slices/accounts/accountsSlice";

export default configureStore({
  reducer: {
    accounts: accountsReducer
  }
})