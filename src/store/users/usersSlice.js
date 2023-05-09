import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const url = 'https://randomuser.me/api/?results=5'

const initialState = {
  users: [],
  isLoading: false,
  error: undefined,
}

export const getUsers = createAsyncThunk('users/getUsers', async () => {
  try {

    const response = await axios(url)
    return response.data.results
  } catch (error) {
    
  }
})

const UsersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) =>{
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true
      })

      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false
        state.users = action.payload
      })

      .addCase(getUsers.rejected, (state) => {
        state.isLoading = false
      })

  },
})

export default UsersSlice.reducer;