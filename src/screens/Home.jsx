import React from 'react';
import BottomNavbar from './src/screens/BottomNavigation';
import TopNavBar from './src/screens/TopNavigation';
import PoemList from '../components/PoemList';

export default function Home() {
  return (
    <View style={styles.container}>
      <TopNavBar />
      <PoemList />
      <BottomNavbar />
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
