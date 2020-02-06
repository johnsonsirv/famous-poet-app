import React from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';
import logo from '../../assets/logo-2.png';

export default function Home() {
  const onPressButton = e => {
    alert(`Button Test ${e._targetInst.key}`);
  };
  const poems = [
    { id: 1, title: 'sample title' },
    { id: 2, title: 'sample title sample title sample title sample title' },
    { id: 3, title: 'sample title' },
    { id: 4, title: 'sample title' },
    { id: 5, title: 'sample title' },
    { id: 6, title: 'sample title' },
    { id: 7, title: 'sample title' },
    { id: 8, title: 'sample title' },
    { id: 9, title: 'sample title' },
    { id: 10, title: 'sample title' },
    { id: 11, title: 'sample title' },
    { id: 12, title: 'sample title' },
    { id: 13, title: 'sample title' },
    { id: 14, title: 'sample title' },
    { id: 15, title: 'sample title' },
    { id: 16, title: 'sample title' },
    { id: 17, title: 'sample title' },
    { id: 18, title: 'sample title' },
    { id: 19, title: 'sample title' },
    { id: 20, title: 'sample title' },
    { id: 21, title: 'sample title' },
    { id: 22, title: 'sample title' },
    { id: 23, title: 'sample title' },
    { id: 24, title: 'sample title' },
  ];
  return (
    <View style={styles.homePage}>
      <FlatList
        data={poems}
        renderItem={({ item }) => (
          <TouchableHighlight
            key={item.id}
            onPress={e => {
              onPressButton(e);
            }}
            underlayColor="white"
          >
            <View style={styles.list}>
              <View style={styles.track}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.details}>{'Sample descriptiom'}</Text>
              </View>
              <View style={styles.image}>
                <Image source={logo} />
              </View>
            </View>
          </TouchableHighlight>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 11,
  },
  homePage: {
    flex: 8,
    flexDirection: 'row',
  },
  list: {
    flex: 1,
    flexDirection: 'row',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 4,
  },
  track: {
    flex: 5,
    margin: 2,
    padding: 5,
  },
  image: {
    flex: 2.8,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 3,
    width: 120,
    height: 60,
    margin: 2,
  },
});
