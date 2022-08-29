import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  Account: {},
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
    },
  },
})

// Action creators are generated for each case reducer function
export const { onchangeValue } = counterSlice.actions

export default counterSlice.reducer