import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SearchScreen() {
  return (
    <View style={styles.search}>
      <View>
        <Text style={styles.searchText}>Search Page</Text>
      </View>
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
    flexDirection: 'row',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#ccc',
  },
});
