import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import loginSlice from '../slices/loginSlice';
import lorbSlice from '../slices/lorbSlice';
import userSlice from '../slices/userSlice';


export const store = configureStore({
  reducer: {
    login:loginSlice,
    lorb:lorbSlice,
    user:userSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
