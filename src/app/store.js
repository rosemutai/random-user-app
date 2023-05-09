import { configureStore } from '@reduxjs/toolkit';
import UsersReducer from '../store/users/usersSlice'

export const store = configureStore({
  reducer: {
    users: UsersReducer
  }
})

export default store