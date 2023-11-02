import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { signIn, signOut } from './api-actions.ts';
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
  reducers: {
    setIsAuthorized: (state, action: PayloadAction<boolean>) => (
      {
        ...state,
        isAuthorized: action.payload,
      }
    )
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state, action: PayloadAction<UserData>) => (
      {
        ...state,
        ...action.payload,
        isAuthorized: true,
      }
    ));
    builder.addCase(signOut.fulfilled, () => initialState);
  },
});

export default userSlice.reducer;
