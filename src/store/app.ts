import { createSlice } from '@reduxjs/toolkit';
import { loadFilms } from './api-actions.ts';

interface AppSliceState {
  pendingRequestsCount: number;
}

const initialState: AppSliceState = {
  pendingRequestsCount: 0,
};

function increaseCount(state: AppSliceState) {
  state.pendingRequestsCount++;
}

function decreaseCount(state: AppSliceState) {
  state.pendingRequestsCount--;
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadFilms.pending, increaseCount);
    builder.addCase(loadFilms.fulfilled, decreaseCount);
  },
});

export default appSlice.reducer;
