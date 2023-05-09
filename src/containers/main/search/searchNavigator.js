import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import searchScreen from './searchScreen';
import {View, Text, Dimensions} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import colors from 'res/colors';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import { useTheme } from '@react-navigation/native';

export default function searchNavigator() {
  const Stack = createStackNavigator();
  const ThemeColors = useTheme().colors;

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={searchScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: ThemeColors.card,
            shadowColor: 'transparent',
          },
          headerTitle: () => <View></View>,
          headerLeft: () => (
            <View style={{marginHorizontal: 5, marginVertical: 10 ,}}>
              <TextInput
                style={{
                  backgroundColor: '#FAF9F6',
                  height: 35,
                  width: Dimensions.get('screen').width - 10,
                  fontWeight: 'bold',
                  borderRadius: 10,
                  paddingStart: 20,
                  fontSize: 16,
                  color: 'white',
                }}
                placeholder="Search"
                placeholderTextColor={colors.textFaded2}
              />
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
