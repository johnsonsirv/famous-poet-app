import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeHeaderTitle() {
  return (
    <View>
      <Text style={styles.brandTitle}>Latest</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  brandTitle: {
    color: '#ccc',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
