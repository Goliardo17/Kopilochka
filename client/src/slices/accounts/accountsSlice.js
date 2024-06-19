import { createSlice } from "@reduxjs/toolkit"
import { accounts } from "../../helpers/constant"
import { changeAmount } from "../../helpers/addAmount"

export const accountsSlice = createSlice({
  name: "accounts",
  initialState: {
    value: accounts,
  },
  reducers: {
    changeAccountAmount: (state, action) => {
      const transfer = action.payload
      const store = [...state.value]

      const newState = changeAmount(store, transfer)
      
      state.value = newState
    }
  }
})

export const { changeAccountAmount } = accountsSlice.actions

export default accountsSlice.reducer