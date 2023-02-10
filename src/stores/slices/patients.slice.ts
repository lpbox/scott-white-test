import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import agent from '../../api/agent';
import { Patient } from '../../types/patient';

export interface PatientsState {
  isLoading: boolean;
  patients: Patient[];
}

const initialState: PatientsState = {
  isLoading: false,
  patients: [],
};

export const fetchPatients = createAsyncThunk(
  'PATIENTS/GET_PATIENTS',
  async () => {
    const resposne = await agent.Patients.getPatients();
    return resposne.data;
  },
);

const patientsSlice = createSlice({
  name: 'PATIENTS',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPatients.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchPatients.fulfilled, (state, action) => {
        state.isLoading = false;
        state.patients = action.payload;
      })
      .addCase(fetchPatients.rejected, state => {
        state.isLoading = false;
      });
  },
});

export const {} = patientsSlice.actions;

export default patientsSlice.reducer;
