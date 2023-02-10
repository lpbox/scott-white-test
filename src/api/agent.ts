import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com';

const Patients = {
  getPatients: () => axios.get(`${baseUrl}/users`),
  getPatientDetails: (id: number) => axios.get(`${baseUrl}/users/${id}`),
};

export default {
  Patients,
};
