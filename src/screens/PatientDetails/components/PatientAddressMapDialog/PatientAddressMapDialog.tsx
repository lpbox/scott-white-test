import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Dialog } from 'react-native-paper';
import { Patient } from '../../../../types/patient';

interface PatientAddressMapDialogProps {
  patient: Patient;
  onDismiss: () => void;
}

const styles = StyleSheet.create({
  mapView: {
    width: '100%',
    height: 450,
  },
});

export const PatientAddressMapDialog = ({
  patient,
  onDismiss,
}: PatientAddressMapDialogProps) => {
  const [region, setRegion] = useState({
    latitude: parseFloat(patient.address.geo.lat),
    longitude: parseFloat(patient.address.geo.lng),
    latitudeDelta: 1,
    longitudeDelta: 1,
  });

  return (
    <Dialog visible onDismiss={onDismiss}>
      <Dialog.Title>Map View</Dialog.Title>
      <Dialog.Content>
        <MapView
          style={styles.mapView}
          region={region}
          onRegionChange={setRegion}>
          <Marker
            coordinate={{
              latitude: parseFloat(patient.address.geo.lat),
              longitude: parseFloat(patient.address.geo.lng),
            }}
          />
        </MapView>
      </Dialog.Content>
    </Dialog>
  );
};
