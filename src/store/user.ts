import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { signIn } from './api-actions.ts';
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

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state, action: PayloadAction<UserData>) => (
      {
        ...state,
        ...action.payload,
        isAuthorized: true,
      }
    ));
  },
});

export default userSlice.reducer;
