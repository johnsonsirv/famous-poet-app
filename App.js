import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './src/screens/Home';
import SearchScreen from './src/screens/Search';
import PoemTrack from './src/screens/PoemTrack';

const routes = {
  Home: Home,
  Search: SearchScreen,
  Track: PoemTrack,
};

const routeConfig = {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#f7f9fa',
    },
    headerTintColor: '#ccc',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 22,
    },
  },
};
const AppNavigator = createStackNavigator(routes, routeConfig);
const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return <AppContainer />;
}
