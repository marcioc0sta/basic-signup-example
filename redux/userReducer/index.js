import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username: "",
  email: "",
  handle: "",
  password: ""
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {}
})


export default userSlice.reducer