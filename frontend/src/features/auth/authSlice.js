import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';

// const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message:'',
}

//Register a user
export const register = createAsyncThunk('auth/register', async (userData,thunkAPI) => {
  try {
    return await authService.register(userData);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

    return thunkAPI.rejectWithValue(message);
  }
})

//Login a user
export const login = createAsyncThunk('auth/login', async (userData, thunkAPI) => {
  try {
    return await authService.login(userData);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

    return thunkAPI.rejectWithValue(message);
  }
})

//logout

export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout();
})

//get user from local storage
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetUser: (state) => {
      state.isLoading = false
      state.isError = false
      state.isSuccess = false
      state.message= ''
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state,action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(register.rejected, (state,action) => {
        state.isLoading = false
        state.isError = true
        state.user = null
        state.message = action.payload
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state,action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(login.rejected, (state,action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })

  }
})

export const { resetUser } = authSlice.actions;
export default authSlice.reducer