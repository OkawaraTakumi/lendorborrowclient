import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import loginSlice from '../slices/loginSlice';
import lorbSlice from '../slices/lorbSlice';


export const store = configureStore({
  reducer: {
    login:loginSlice,
    lorb:lorbSlice
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
