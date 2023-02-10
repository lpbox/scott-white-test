import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { PatientDetails } from '../screens/PatientDetails/PatientDetails.screen';
import { Patients } from '../screens/Patients/Patients.screen';
import { NavigationScreens } from './navigation.const';

const Stack = createNativeStackNavigator();

export const MainNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={NavigationScreens.Patients}>
      <Stack.Screen
        name={NavigationScreens.Patients}
        options={{ headerShown: false }}
        component={Patients}
      />
      <Stack.Screen
        name={NavigationScreens.PatientDetails}
        options={{ headerShown: false }}
        component={PatientDetails}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
