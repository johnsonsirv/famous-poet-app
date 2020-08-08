import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomNavbar from './BottomNavigation';

export default function SearchScreen(props) {
  return (
    <View style={styles.search}>
      <View style={styles.searchArea}>
        <Text style={styles.searchText}>Search Page</Text>
      </View>
      <BottomNavbar navigation={props.navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  searchText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ccc',
  },
  search: {
    flex: 1,
    alignContent: 'space-between',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  searchArea: {
    flex: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});
