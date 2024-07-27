import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchHistory } from "../../api/historyApi";

export const getUserHistory = createAsyncThunk(
  "histories/fetchHistory",
  async () => {
    const resp = await fetchHistory();

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
      const accountHistory = action.payload;
      state.accountHistory = accountHistory
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserHistory.fulfilled, (state, action) => {
        const history = action.payload;
        state.history = history;
      })
  },
});

export const { selectAccountHistory } = historiesSlice.actions;

export default historiesSlice.reducer;
