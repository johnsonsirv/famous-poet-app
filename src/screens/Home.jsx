import React from 'react';
import { View, StyleSheet } from 'react-native';
import BottomNavbar from './BottomNavigation';
import TopNavBar from './TopNavigation';
import PoemList from '../components/PoemList';

export default function Home(props) {
  return (
    <View style={styles.container}>
      <TopNavBar />
      <PoemList />
      <BottomNavbar navigation={props.navigation} />
    </View>
  );
}

Home.navigationOptions = {
  title: 'Latest',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
