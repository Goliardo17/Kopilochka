import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchHistory, createNewHistory } from "../../api/historyApi";

export const createHistory = createAsyncThunk(
  "histories/createHistory",
  async (form) => {
    const resp = await createNewHistory(form);

    return resp;
  }
);

export const getUserHistory = createAsyncThunk(
  "histories/fetchHistory",
  async (id) => {
    const resp = await fetchHistory(id);

    return resp;
  }
);

export const historiesSlice = createSlice({
  name: "histories",
  initialState: {
    history: [],
    accountHistory: [],
  },
  reducers: {
    selectAccountHistory: (state, action) => {
      const accountId = action.payload;

      state.accountHistory = accountId
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserHistory.fulfilled, (state, action) => {
        const history = action.payload;
        state.history = history;
      })
      .addCase(createHistory.fulfilled, (state, action) => {
        const history = action.payload;
        console.log(history)
        state.history = history;
      })
  },
});

export const { selectAccountHistory } = historiesSlice.actions;

export default historiesSlice.reducer;
