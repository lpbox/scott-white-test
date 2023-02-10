import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  divider: {
    borderBottomWidth: 4,
    borderColor: '#000000',
  },
});

export const Divider = () => <View style={styles.divider} />;
