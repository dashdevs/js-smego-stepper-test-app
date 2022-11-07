import { configureStore } from '@reduxjs/toolkit';
import stepper from 'store/modules/stepper';

export const store = configureStore({
  reducer: { stepper },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
