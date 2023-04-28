import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import activityScreen from './activityScreen';
import colors from 'res/colors';
import {Text} from 'react-native';

export default function activityNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Market Place"
        component={activityScreen}
        options={{
          //headerTransparent: true,
          headerTitle: () => (
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 17}}>
              Market Place
            </Text>
          ),
          headerStyle: {
            backgroundColor: colors.bottomBackGround,
            shadowColor: colors.seperatorLineColor,
          },
        }}
      />
    </Stack.Navigator>
  );
}
