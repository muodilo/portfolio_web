import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import postServices from './postService';

const initialState = {
  currentPosts: [],
  allPosts:[],
  isCurrentPostsLoading: false,
  isCurrentPostsError: false,
  isCurrentPostsSuccess:false,
  isCurrentPostsErrorMessage: '',
  isAllPostsLoading: false,
  isAllPostsError: false,
  isAllPostsSuccess: false,
  isAllPostsErrorMessage:'',
}

export const getCurrentThreePosts = createAsyncThunk('get/getCurrentThreePosts', async (_, thunkAPI) => {
  try {
    return await postServices.getCurrentThreePosts();
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

    return thunkAPI.rejectWithValue(message);
  }
})

export const getAllPosts = createAsyncThunk('get/getAllPosts', async (_, thunkAPI) => {
  try {
    return await postServices.getAllPosts();
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

    return thunkAPI.rejectWithValue(message);
  }
})

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    reset: (state) => {
      state.isCurrentPostsLoading = false;
      state.isCurrentPostsError = false;
      state.isCurrentPostsSuccess = false;
      state.isCurrentPostsErrorMessage = '';

      state.isAllPostsLoading = false;
      state.isAllPostsError = false;
      state.isAllPostsSuccess = false;
      state.isAllPostsErrorMessage = '';


    }
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentThreePosts.pending, (state) => {
        state.isCurrentPostsLoading = true;
      })
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

      .addCase(getAllPosts.pending, (state) => {
        state.isAllPostsLoading = true;
      })
      .addCase(getAllPosts.fulfilled, (state,action) => {
        state.isAllPostsLoading = false;
        state.isAllPostsSuccess = true;
        state.allPosts = action.payload;
      })
      .addCase(getAllPosts.rejected, (state,action) => {
        state.isAllPostsLoading = false;
        state.isAllPostsError = true;
        state.isAllPostsErrorMessage = action.payload;
      })
    
  }
})

export const { reset } = postSlice.actions;

export default postSlice.reducer;