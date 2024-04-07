import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import projectServices from './projectService';

const initialState = {
  currentProjects: [],
  allProjects: [],
  isCurrentProjectsLoading: false,
  isCurrentProjectsError: false,
  isCurrentProjectsSuccess:false,
  isCurrentProjectsErrorMessage: '',
  isAllProjectsLoading: false,
  isAllProjectsError: false,
  isAllProjectsSuccess: false,
  isAllProjectsErrorMessage:'',
}

export const getCurrentThreeProjects = createAsyncThunk('project/getCurrentThreeProjects', async (_, thunkAPI) => {
  try {
    return await projectServices.getCurrentThreeProjects();
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

    return thunkAPI.rejectWithValue(message);
  }
})

export const getAllProjects = createAsyncThunk('project/getAllProjects', async (_, thunkAPI) => {
  try {
    return await projectServices.getAllProjects();
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

    return thunkAPI.rejectWithValue(message);
  }
})


export const createProject = createAsyncThunk('project/createProject', async (formData, thunkAPI) => {
  try {
    const token = thunkAPI.getState().reducer.auth.user.token;
    console.log(token)
    return await projectServices.createProject(formData,token);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

    return thunkAPI.rejectWithValue(message);
    
  }
})

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    reset: (state) => {
      state.isCurrentProjectsLoading = false;
      state.isCurrentProjectsError = false;
      state.isCurrentProjectsErrorMessage = '';

      state.isAllProjectsLoading = false;
      state.isAllProjectsError = false;
      state.isAllProjectsErrorMessage = '';

      state.creaingProjectDoneMessage = '';
      state.creatingProjectFailedMessage = '';
      state.creatingProjectIsLoading = false;


    }
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentThreeProjects.pending, (state) => {
        state.isCurrentPostsLoading = true;
      })
      .addCase(getCurrentThreeProjects.fulfilled, (state,action) => {
        state.isCurrentProjectsLoading = false;
        state.isCurrentProjectsSuccess = true;
        state.currentProjects = action.payload;
      })
      .addCase(getCurrentThreeProjects.rejected, (state,action) => {
        state.isCurrentProjectsLoading = false;
        state.isCurrentProjectsError = true;
        state.isCurrentProjectsErrorMessage = action.payload;
      })

      .addCase(getAllProjects.pending, (state) => {
        state.isAllPostsLoading = true;
      })
      .addCase(getAllProjects.fulfilled, (state,action) => {
        state.isAllProjectsLoading = false;
        state.isAllProjectsSuccess = true;
        state.allProjects = action.payload;
      })
      .addCase(getAllProjects.rejected, (state,action) => {
        state.isAllProjectsLoading = false;
        state.isAllProjectsError = true;
        state.isAllProjectsErrorMessage = action.payload;
      })

      .addCase(createProject.pending, (state) => {
        state.creatingPostIsLoading = true;
      })
      .addCase(createProject.fulfilled, (state,action) => {
        state.creatingProjectIsLoading= false;
        state.isSuccess = true;
        state.creaingProjectDoneMessage= action.payload;
      })
      .addCase(createProject.rejected, (state,action) => {
        state.creatingProjectIsLoading = false;
        state.isSuccess = false;
        state.creatingProjectFailedMessage= action.payload;
      })
    
  }
})

export const { reset } = projectSlice.actions;

export default projectSlice.reducer;