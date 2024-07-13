// src/store/authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: !!localStorage.getItem('token'),
    token: localStorage.getItem('token') || null,
  },
  reducers: {
    signin: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload;
      localStorage.setItem('token', action.payload);
    // toast.success('Logged Out Successfully');
    },
    signout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      localStorage.removeItem('token');
      toast.success('Logged Out Successfully');
    },
  },
});

export const { signin, signout } = authSlice.actions;

export default authSlice.reducer;
