import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import { Icon } from 'react-native-elements'

export default function BottomNavbar(props) {
  const { navigate } = props.navigation;
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
          <Text style={styles.iconText} onPress={() => navigate('Home')}>
            home icon
          </Text>
        </View>
        <View style={styles.icon}>
          <Text style={styles.iconText}>favorite icon</Text>
        </View>
        <View style={styles.icon}>
          <Text style={styles.iconText} onPress={() => navigate('Search')}>
            search icon
          </Text>
        </View>
        <View style={styles.icon}>
          <Text style={styles.iconText}>list icon</Text>
        </View>
        <View style={styles.icon}>
          <Text style={styles.iconText}>teach icon</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    flex: 2,
  },
  iconText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ccc',
  },
  bottomNavigation: {
    flex: 1,
    flexDirection: 'row',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  bottomNavIcons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
