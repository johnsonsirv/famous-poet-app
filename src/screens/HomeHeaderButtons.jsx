import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeHeaderButtons() {
  return (
    <View style={styles.topNavIcons}>
      <View style={styles.icon}>
        <Text style={styles.iconText}>A</Text>
      </View>
      <View style={styles.icon}>
        <Text style={styles.iconText}>T</Text>
      </View>
      <View style={styles.icon}>
        <Text style={styles.iconText}>***</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topNavIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 3,
    width: 150,
  },
  icon: {
    padding: 1,
  },
  iconText: {
    color: '#ccc',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
