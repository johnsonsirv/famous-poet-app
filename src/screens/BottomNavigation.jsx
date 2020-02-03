import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import { Icon } from 'react-native-elements'

export default function Navbar() {
  return (
    <View style={styles.bottomNavigation}>
      {/* <Icon size='23' name='favorite' color='#000' />
       <Icon name='home' color='#000' />
       <Icon name='search' color='#000' />
      <Icon
        name='list'
        color='#000'
      /> */}
      <View style={styles.bottomNavIcons}>
        <View style={styles.icon}>
          <Text>home icon</Text>
        </View>
        <View style={styles.icon}>
          <Text>favorite icon</Text>
        </View>
        <View style={styles.icon}>
          <Text>search icon</Text>
        </View>
        <View style={styles.icon}>
          <Text>list icon</Text>
        </View>
        <View style={styles.icon}>
          <Text>teach icon</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    flex: 2,
    fontSize: 12,
  },
  bottomNavigation: {
    flex: 1,
    flexDirection: 'row',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  bottomNavIcons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
