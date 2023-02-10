import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { List } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { NavigationScreens } from '../../../../navigation/navigation.const';
import { Patient } from '../../../../types/patient';

interface PatientItemProps {
  item: Patient;
  navigation: any;
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
  },
  rightArrowButton: {
    display: 'flex',
    justifyContent: 'center',
  },
});

export const PatientItem = ({ item, navigation }: PatientItemProps) => {
  const handlePressPatient = () => {
    navigation.push(NavigationScreens.PatientDetails, { patientId: item.id });
  };

  return (
    <TouchableOpacity onPress={handlePressPatient} style={styles.container}>
      <List.Item
        title={item.name}
        description={item.email}
        left={() => <FontAwesome size={40} name="user-circle" />}
        right={() => (
          <View style={styles.rightArrowButton}>
            <FontAwesome size={20} name="chevron-right" />
          </View>
        )}
      />
    </TouchableOpacity>
  );
};
