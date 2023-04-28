

import { View, Text } from 'react-native'
import React from 'react'
import listings from './listings';
import listingDetails from './listingDetails';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const activityScreen = () => {
  
  return (
    <Stack.Navigator>
    <Stack.Screen name="listings" options={{ headerShown: false }}  component={listings} />
    <Stack.Screen name="listingDetails" options={{ headerShown: false }}  component={listingDetails} />
    
  </Stack.Navigator>
  )
}

export default activityScreen

