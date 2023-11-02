import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { signIn, signOut, verifyToken } from './api-actions.ts';
import { UserData } from '../types/user.ts';

interface UserSliceState extends UserData {
  isAuthorized: boolean;
}

const initialState: UserSliceState = {
  isAuthorized: false,
  name: '',
  avatarUrl: '',
  email: '',
  token: '',
};

function authorize(state: UserSliceState, action: PayloadAction<UserData>) {
  return {
    ...state,
    ...action.payload,
    isAuthorized: true,
  };
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, authorize);
    builder.addCase(verifyToken.fulfilled, authorize);
    builder.addCase(signOut.fulfilled, () => initialState);
  },
});

export default userSlice.reducer;
