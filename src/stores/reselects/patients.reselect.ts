import { RootState } from '..';

export const selectPatients = (state: RootState) => state.patients;

export const selectPatientDetails = (state: RootState) => state.patientDetails;
