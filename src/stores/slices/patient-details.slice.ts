import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import agent from '../../api/agent';
import { Patient } from '../../types/patient';

export interface PatientDetailsState {
  isLoading: boolean;
  patient?: Patient;
}

const initialState: PatientDetailsState = {
  isLoading: false,
};

export const fetchPatientDetails = createAsyncThunk(
  'PATIENT_DETAILS/GET_PATIENT_DETAILS',
  async (id: number) => {
    const resposne = await agent.Patients.getPatientDetails(id);
    return resposne.data;
  },
);

const patientDetailsSlice = createSlice({
  name: 'PATIENT_DETAILS',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPatientDetails.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchPatientDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.patient = action.payload;
      })
      .addCase(fetchPatientDetails.rejected, state => {
        state.isLoading = false;
      });
  },
});

export const {} = patientDetailsSlice.actions;

export default patientDetailsSlice.reducer;
