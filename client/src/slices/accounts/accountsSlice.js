import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { fetchAccounts, changeAmount, transferAmount, closeAccount, requestOfCreateAccount } from "../../api/accountsApi"

export const getUserAccounts = createAsyncThunk(
  'accounts/fetchAccounts',
  async (id) => {
    const responce = await fetchAccounts(id)

    return responce
  }
)

export const createAccount = createAsyncThunk(
  'accounts/createAccount',
  async (form) => {
    await requestOfCreateAccount(form)
    
    const responce = await fetchAccounts(form.userId)

    return responce
  }
)

export const changeAccountAmount = createAsyncThunk(
  'accounts/changeAmount',
  async (form) => {
    const resp = await changeAmount(form)

    return resp
  }
)

export const transferAcountAmount = createAsyncThunk(
  'accounts/transferAmount',
  async (form) => {
    const responce = await transferAmount(form)

    return responce
  }
)

export const canCloseAccount = createAsyncThunk(
  'accounts/close',
  async (form) => {
    const responce = await closeAccount(form)

    return responce
  }
)

export const accountsSlice = createSlice({
  name: "accounts",
  initialState: {
    items: [],
    selectItem: {}
  },
  reducers: {
    setDefaultItem: (state, action) => {
      state.selectItem = action.payload
    },
    setSelectItem: (state, action) => {
      state.selectItem = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserAccounts.fulfilled, (state, action) => {
        const accounts = action.payload
        state.items = accounts

        state.selectItem = accounts.length ? accounts[0] : null
      })
      .addCase(createAccount.fulfilled, (state, action) => {
        const accounts = action.payload
        state.items = accounts

        state.selectItem = accounts.length ? accounts[0] : null
      })
      .addCase(changeAccountAmount.fulfilled, (state, action) => {
        const accounts = action.payload
        state.items = accounts

        state.selectItem = accounts.length ? accounts[0] : null
      })
      .addCase(transferAcountAmount.fulfilled, (state, action) => {
        const accounts = action.payload
        state.items = accounts

        state.selectItem = accounts.length ? accounts[0] : null
      })
      .addCase(canCloseAccount.fulfilled, (state, action) => {
        const accounts = action.payload
        state.items = accounts

        state.selectItem = accounts.length ? accounts[0] : null
      })
  }
})

export const { setSelectItem } = accountsSlice.actions

export default accountsSlice.reducer