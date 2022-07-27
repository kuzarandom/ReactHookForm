import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  Account: {
    // username: null,
    // password: null,
    // prefix: null,
    // prefixEn: null,
    // name: null,
    // lastname: null,
    // cardType: null,
    // idCard: null,
    // dateIssue: null,
    // dateExpiry: null,
    // nameEn: null,
    // lastnameEn: null,
    // Email: null,
    // dateOfBirth: null,
    // address: null,
    // nameOther: null,
    // lastnameOther: null,
    // addressOther: null,
    // tel: null,
    // role: null
  },
  Text: 'This is redux',
  Array: {
    key3: 'value3',
    key4: 'value4'
  }
}

export const counterSlice = createSlice({
  name: 'AccountValue',
  initialState,
  reducers: {
    onchangeValue: (state, actions) => {
      // state.Account = actions.payload
      state.Account = actions.payload
      state.Text = "Hello change"
      // state.Account.username = state.Account.username ? state.Account.username : actions.payload.username
      // state.Account.password = state.Account.password ? state.Account.password : actions.payload.password
      // state.Account.prefix = actions.payload.prefix
      // state.Account.prefixEn = actions.payload.prefixEn
      // state.Account.name = actions.payload.name
      // state.Account.lastname = actions.payload.lastname
      // state.Account.dateIssue = actions.payload.dateIssue
      // state.Account.dateExpiry = actions.payload.dateExpiry
      // console.log(state.Account)
    },
  },
})

// Action creators are generated for each case reducer function
export const { onchangeValue } = counterSlice.actions

export default counterSlice.reducer