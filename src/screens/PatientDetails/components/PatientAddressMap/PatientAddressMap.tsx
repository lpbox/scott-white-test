import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Patient } from '../../../../types/patient';

interface PatientAddressMapProps {
  patient: Patient;
}

const styles = StyleSheet.create({
  mapView: {
    width: '100%',
    height: 450,
  },
});

export const PatientAddressMap = ({ patient }: PatientAddressMapProps) => {
  const [region, setRegion] = useState({
    latitude: parseFloat(patient.address.geo.lat),
    longitude: parseFloat(patient.address.geo.lng),
    latitudeDelta: 1,
    longitudeDelta: 1,
  });

  return (
    <MapView style={styles.mapView} region={region} onRegionChange={setRegion}>
      <Marker
        coordinate={{
          latitude: parseFloat(patient.address.geo.lat),
          longitude: parseFloat(patient.address.geo.lng),
        }}
      />
    </MapView>
  );
};
