import React from 'react';
import { View, StyleSheet } from 'react-native';
import HomeHeaderTitle from './HomeHeaderTitle';
import HomeHeaderButtons from './HomeHeaderButtons';
import PoemList from '../components/PoemList';
import BottomNavbar from './BottomNavigation';

export default function Home(props) {
  return (
    <View style={styles.container}>
      <PoemList />
      <BottomNavbar navigation={props.navigation} />
    </View>
  );
}

Home.navigationOptions = {
  headerTitle: () => <HomeHeaderTitle />,
  headerRight: () => <HomeHeaderButtons />,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
