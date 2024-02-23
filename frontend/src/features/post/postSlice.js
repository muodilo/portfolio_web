import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import postServices from './postService';

const initialState = {
  currentPosts: [],
  allPosts: [],
  singlePost:{},
  isCurrentPostsLoading: false,
  isCurrentPostsError: false,
  isCurrentPostsSuccess:false,
  isCurrentPostsErrorMessage: '',
  isAllPostsLoading: false,
  isAllPostsError: false,
  isAllPostsSuccess: false,
  isAllPostsErrorMessage:'',
  isSinglePostLoading: false,
  isSinglePostError: false,
  isSinglePostSuccess: false,
  isSinglePostErrorMessage:'',
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

export const getSpecificPost = createAsyncThunk('post/getSpecificPost', async (id, thunkAPI) => {

  try {
    return await postServices.getSpecificPost(id);
    
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
      state.isCurrentPostsErrorMessage = '';

      state.isAllPostsLoading = false;
      state.isAllPostsError = false;
      state.isAllPostsErrorMessage = '';

      state.isSinglePostLoading = false;
      state.isSinglePostError = false;
      state.isSinglePostErrorMessage = '';


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

      .addCase(getSpecificPost.pending, (state) => {
        state.isSinglePostLoading = true;
      })
      .addCase(getSpecificPost.fulfilled, (state,action) => {
        state.isSinglePostLoading = false;
        state.isSinglePostSuccess = true;
        state.singlePost = action.payload;
      })
      .addCase(getSpecificPost.rejected, (state,action) => {
        state.isSinglePostLoading = false;
        state.isSinglePostError = true;
        state.isSinglePostErrorMessage = action.payload;
      })
    
  }
})

export const { reset } = postSlice.actions;

export default postSlice.reducer;