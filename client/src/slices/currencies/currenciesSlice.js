import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { fetchCurrencies } from "../../api/currenciesApi.js"

export const getCurrencies = createAsyncThunk(
  'currencies/fetchCurrencies',
  async () => {
    const responce = await fetchCurrencies()

    return responce
  }
)

export const currenciesSlice = createSlice({
  name: "currency",
  initialState: {
    value: []
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurrencies.fulfilled, (state, action) => {
        state.value = action.payload
      })
  }
})

export default currenciesSlice.reducer