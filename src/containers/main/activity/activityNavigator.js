import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import activityScreen from './activityScreen';
import colors from 'res/colors';
import {Text} from 'react-native';
import { useTheme } from '@react-navigation/native';

export default function activityNavigator() {
  const Stack = createStackNavigator();
  const ThemeColors = useTheme().colors;

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Market Place"
        component={activityScreen}
        options={{
          //headerTransparent: true,
          headerTitle: () => (
            <Text style={{color: ThemeColors.text, fontWeight: 'bold', fontSize: 17}}>
              Market Place
            </Text>
          ),
          headerStyle: {
            backgroundColor: ThemeColors.card,
            shadowColor: colors.seperatorLineColor,
          },
        }}
      />
    </Stack.Navigator>
  );
}
