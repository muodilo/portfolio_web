import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import postServices from './postService';

const initialState = {
  currentPosts: [],
  isCurrentPostsLoading: false,
  isCurrentPostsError: false,
  isCurrentPostsSuccess:false,
  isCurrentPostsErrorMessage:false,
}

export const getCurrentThreePosts = createAsyncThunk('get/getCurrentThreePosts', async (_, thunkAPI) => {
  try {
    return await postServices.getCurrentThreePosts();
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

    return thunkAPI.rejectWithValue(message);
  }
})

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentThreePosts.pending, (state) => {
        state.isCurrentPostsLoading = true;
      })
    builder
      .addCase(getCurrentThreePosts.fulfilled, (state,action) => {
        state.isCurrentPostsLoading = false;
        state.isCurrentPostsSuccess = true;
        state.currentPosts = action.payload;
      })
      .addCase(getCurrentThreePosts.rejected, (state,action) => {
        state.isCurrentPostsLoading = false;
        state.isCurrentPostsError = true;
        state.isCurrentPostsErrorMessage = action.payload;
      })
    
  }
})

export default postSlice.reducer;