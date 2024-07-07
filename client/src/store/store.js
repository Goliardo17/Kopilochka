import { configureStore } from "@reduxjs/toolkit";
import accountsReducer from "../slices/accounts/accountsSlice";
import currenciesReducer from "../slices/currencies/currenciesSlice";
import historiesReducer from "../slices/histories/historiesSlice";

export default configureStore({
  reducer: {
    accounts: accountsReducer,
    currencies: currenciesReducer,
    histories: historiesReducer
  }
})