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
        <Text>List</Text>
      </View>
      <View style={styles.topNavIcons}>
        <View>
          <Text>Icon</Text>
        </View>
        <View>
          <Text>Icon</Text>
        </View>
        <View>
          <Text>***</Text>
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
    borderWidth: 1,
  },
  brand: {
    flex: 3,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  topNavIcons: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderStyle: 'solid',
    borderWidth: 1,
  },
});
