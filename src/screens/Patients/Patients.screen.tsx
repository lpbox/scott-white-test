import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { ActivityIndicator, Appbar, Divider } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../../stores';
import { selectPatients } from '../../stores/reselects/patients.reselect';
import { fetchPatients } from '../../stores/slices/patients.slice';
import { PatientItem } from './components/PatientItem/PatientItem';

export const Patients = (props: any) => {
  const dispatch = useAppDispatch();
  const { patients, isLoading } = useAppSelector(selectPatients);

  useEffect(() => {
    dispatch(fetchPatients());
  }, [dispatch]);

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Patients" />
      </Appbar.Header>
      <FlatList
        data={patients}
        renderItem={listProps => (
          <PatientItem key={listProps.index} {...props} {...listProps} />
        )}
        ItemSeparatorComponent={Divider}
      />
      {isLoading && <ActivityIndicator />}
    </>
  );
};
