import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"

import { RootState } from "./../store"
import { API, AsyncState } from "../../utils/constant"
import { User } from "../../utils/types"

export interface UserState {
  status: AsyncState
  data: User[]
}

export const initialState: UserState = {
  status: AsyncState.IDLE,
  data: [],
}

export const fetchUsers = createAsyncThunk("fetch users", async () => {
  try {
    const response = await axios.get(API)
    return response.data
  } catch (error) {
    if (error) {
      throw new Error(error as string)
    }
  }
})

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    deleteUser: (state, action: PayloadAction<number>) => {
      state.data = state.data.filter((user) => user.id !== action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = AsyncState.LOADING
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = AsyncState.SUCCEEDED
        state.data = action.payload
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = AsyncState.FAILED
      })
  },
})

export const userStore = (state: RootState) => state.users

export const { deleteUser } = userSlice.actions

export default userSlice.reducer
