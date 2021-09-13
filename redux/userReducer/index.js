import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";

export const USER_STATUSES = {
  IDLE: "idle",
  SUCCESS: "success",
  FAILED: "failed"
}

const initialState = {
  username: "",
  email: "",
  handle: "@",
  status: USER_STATUSES.IDLE
}

export const sendUserToApi = createAsyncThunk(
  'user/client/sendUserToApi',
  async (userInfo) => {
    const response = await axios.post('http://localhost:3001/users', userInfo)
    return response.status
  }
)

export const userSlice = createSlice({
  name: 'user/client',
  initialState,
  reducers: {
    updateUserState: (state, action) => {
      state.username = action.payload.username
      state.email = action.payload.email
      state.handle = action.payload.handle
    }
  },
  extraReducers: {
    [sendUserToApi.fulfilled]: state => {
      state.status = USER_STATUSES.SUCCESS
    },
    [sendUserToApi.rejected]: state => {
      state.status = USER_STATUSES.FAILED
    }
  }
})

export const { updateUserState } = userSlice.actions

export default userSlice.reducer