import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './src/screens/Home';
import SearchScreen from './src/screens/Search';

const routes = {
  Home: Home,
  Search: SearchScreen,
};

const routeConfig = {
  initialRouteName: 'Home',
};
const AppNavigator = createStackNavigator(routes, routeConfig);
const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return <AppContainer />;
}
