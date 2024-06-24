import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCategories } from "../../api/categoriesApi.js";

export const getUserCategories = createAsyncThunk(
  "categories/fetchCategories",
  async (id) => {
    const responce = await fetchCategories(id);

    return responce;
  }
);

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    revenuesCategory: [],
    expenditureCategory: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserCategories.fulfilled, (state, action) => {
        const categories = action.payload;

        const revenues = categories.filter((category) => category.type === "revenues")
        const expenditure = categories.filter((category) => category.type === "expenditure")

        state.revenuesCategory = revenues;
        state.expenditureCategory = expenditure;
      })
  },
});

export const {  } = categoriesSlice.actions

export default categoriesSlice.reducer