import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { fetchCurrencies } from "../../api/currenciesApi.js"

export const getCurrencies = createAsyncThunk(
  'currencies/fetchCurrencies',
  async (id) => {
    const responce = await fetchCurrencies(id)

    return responce
  }
)

export const currenciesSlice = createSlice({
  name: "currency",
  initialState: {
    value: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrencies.fulfilled, (state, action) => {
        state.value = action.payload
      })
  }
})

export const {  } = currenciesSlice.actions

export default currenciesSlice.reducer