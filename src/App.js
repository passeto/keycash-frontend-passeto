import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { LogBox, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from 'navigators/app';

import {PropertiesProvider} from './contexts/properties'

LogBox.ignoreLogs(['VirtualizedLists', 'componentWillReceiveProps']);

const App = () => {

  useEffect(async () => {
    StatusBar.setBarStyle( 'light-content',true)
    StatusBar.setBackgroundColor("#ff0094")
    SplashScreen.hide();

  }, []);
  
  return (
    <PropertiesProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </PropertiesProvider>
  );
};

export default App;
