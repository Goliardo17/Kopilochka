import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { fetchAccounts, changeAmount, transferAmount, requestOfCreateAccount } from "../../api/accountsApi"

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
    const response = await requestOfCreateAccount(form)

    return response
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

const defaultAccount = (array) => {
  const searchDefault = array.filter((account) => account.default);

  return searchDefault.length == 1
    ? searchDefault[0]
    : console.log("У пользователя " + searchDefault.length + " счетов");
}

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
        console.log(accounts)
        state.items = accounts

        state.selectItem = accounts.length ? accounts[0] : null
      })
      .addCase(createAccount.fulfilled, (state, action) => {
        const accounts = action.payload
        console.log(accounts)
        state.items = accounts
      })
      .addCase(changeAccountAmount.fulfilled, (state, action) => {
        const accounts = action.payload
        state.items = accounts

        const defaultItem = state.selectItem.id ? state.selectItem : defaultAccount(state.items)
        state.selectItem = defaultItem
      })
      .addCase(transferAcountAmount.fulfilled, (state, action) => {
        const accounts = action.payload
        state.items = accounts

        console.log(accounts)

        const defaultItem = state.selectItem.id ? state.selectItem : defaultAccount(state.items)
        state.selectItem = defaultItem
      })
  }
})

export const { setSelectItem } = accountsSlice.actions

export default accountsSlice.reducer