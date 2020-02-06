import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomNavbar from './BottomNavigation';

export default function PoemTrack(props) {
  const { navigation } = props;
  return (
    <View style={styles.track}>
      <View style={styles.trackArea}>
        <Text style={styles.trackText}>
          TrackId:{' '}
          {JSON.stringify(
            navigation.getParam('trackId', 'no-track-id-selected')
          )}{' '}
        </Text>
        <Text style={styles.trackText}>
          Title:{' '}
          {JSON.stringify(navigation.getParam('trackTitle', 'default title'))}{' '}
        </Text>
      </View>
      <BottomNavbar navigation={props.navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  trackText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ccc',
  },
  track: {
    flex: 1,
    alignContent: 'space-between',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  trackArea: {
    flex: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});
