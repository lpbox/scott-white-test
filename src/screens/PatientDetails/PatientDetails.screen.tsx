import React, { useEffect } from 'react';
import {
  Linking,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { ActivityIndicator, Appbar, Avatar, Text } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../../stores';
import { selectPatientDetails } from '../../stores/reselects/patients.reselect';
import { fetchPatientDetails } from '../../stores/slices/patient-details.slice';
import { PatientAddressMap } from './components/PatientAddressMap/PatientAddressMap';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
  },
  heading: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    marginBottom: 12,
  },
  contactInformation: {
    marginBottom: 24,
  },
  contactInformationTitle: {
    textAlign: 'center',
    marginBottom: 12,
  },
  contactInformationEmail: {
    marginBottom: 12,
  },
  contactInformationPhone: {
    marginTop: 12,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactInformationPhoneButton: {
    marginLeft: 12,
    borderWidth: 1,
    borderRadius: 100,
    padding: 6,
  },
});

export const PatientDetails = ({ navigation, route }: any) => {
  const dispatch = useAppDispatch();
  const { patient, isLoading } = useAppSelector(selectPatientDetails);

  useEffect(() => {
    dispatch(fetchPatientDetails(route.params.patientId));
  }, [dispatch, route.params.patientId]);

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={handleGoBack} />
        <Appbar.Content title="Patient Details" />
      </Appbar.Header>

      {!isLoading && patient && (
        <ScrollView style={styles.container}>
          <View style={styles.heading}>
            <Avatar.Text
              size={120}
              label={patient.name.slice(0, 2).toUpperCase()}
              style={styles.avatar}
            />
            <Text variant="headlineLarge">{patient.name}</Text>
            <Text variant="titleMedium">{patient.username}</Text>
          </View>
          <View style={styles.contactInformation}>
            <Text
              variant="headlineLarge"
              style={styles.contactInformationTitle}>
              Contact Information
            </Text>
            <Text variant="titleLarge" style={styles.contactInformationEmail}>
              {patient.email}
            </Text>

            <Text variant="titleLarge">{patient.address.street}</Text>
            <Text variant="titleLarge">{patient.address.suite}</Text>
            <Text variant="titleLarge">{patient.address.city}</Text>
            <Text variant="titleLarge">{patient.address.zipcode}</Text>

            <View style={styles.contactInformationPhone}>
              <Text variant="titleLarge">{patient.phone}</Text>
              <TouchableOpacity
                style={styles.contactInformationPhoneButton}
                onPress={() => Linking.openURL(`tel:${patient.phone}`)}>
                <FontAwesome size={20} name="phone" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.contactInformation}>
            <Text
              variant="headlineLarge"
              style={styles.contactInformationTitle}>
              Company
            </Text>

            <Text variant="titleLarge">{patient.company.name}</Text>
            <Text variant="titleLarge">{patient.company.catchPhrase}</Text>
            <Text variant="titleLarge">{patient.company.bs}</Text>
          </View>
          <PatientAddressMap patient={patient} />
        </ScrollView>
      )}
      {isLoading || (!patient && <ActivityIndicator />)}
    </>
  );
};
