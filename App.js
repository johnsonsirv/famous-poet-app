import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './src/screens/BottomNavigation';
import TopNavBar from './src/screens/TopNavigation';
import Home from './src/screens/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <TopNavBar />
      <Home />
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
