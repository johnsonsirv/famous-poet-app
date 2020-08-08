import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import { Icon } from 'react-native-elements'

export default function TopNavBar() {
  return (
    <View style={styles.topNav}>
      {/* <Icon size='23' name='favorite' color='#000' />
       <Icon name='home' color='#000' />
       <Icon name='search' color='#000' />
      <Icon
        name='list'
        color='#000'
      /> */}

      <View style={styles.brand}>
        <Text style={styles.brandTitle}>Latest</Text>
      </View>
      <View style={styles.topNavIcons}>
        <View>
          <Text style={styles.icon}>Icon</Text>
        </View>
        <View>
          <Text style={styles.icon}>Icon</Text>
        </View>
        <View>
          <Text style={styles.icon}>***</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {},
  topNav: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 21,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  brand: {
    flex: 3,
    padding: 3,
    alignContent: 'center',
  },
  brandTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ccc',
  },
  topNavIcons: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 3,
  },
  icon: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ccc',
  },
});
