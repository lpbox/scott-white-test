import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import patientsReducer from './slices/patients.slice';
import patientDetailsReducer from './slices/patient-details.slice';

export const store = configureStore({
  reducer: {
    patients: patientsReducer,
    patientDetails: patientDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
