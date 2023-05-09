import AppNavigator from './src/AppNavigator';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './src/redux/store/store';
import { store } from './src/redux/store/store';
import {Provider} from 'react-redux';
import { Text } from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import { useColorScheme } from 'react-native';

function App() {
  const theme = useColorScheme();
  return  <Provider store = {store}> 
  <PersistGate loading={<Text>Loading ...</Text>}  persistor={persistor}>
  <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}  >{<AppNavigator />}</NavigationContainer>
  </PersistGate>
  </Provider>


}

export default App;


