import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username: "",
  email: "",
  handle: "@",
  password: ""
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserState: (state, action) => {
      state.username = action.payload.username
      state.email = action.payload.email
      state.handle = action.payload.handle
    }
  },
  extraReducers: {}
})

export const { updateUserState } = userSlice.actions

export default userSlice.reducer