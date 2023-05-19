import React from 'react';
import {View, Text} from 'react-native';
import { useTheme } from '@react-navigation/native';

export default function UserBio() {
  const ThemeColors = useTheme().colors;

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        marginStart: 10,
        marginTop: 20,
      }}>
      <View style={{marginBottom: 5}}>
        <Text style={{color: ThemeColors.text, fontWeight: 'bold'}}>Alex</Text>
      </View>
      <View style={{marginBottom: 5}}>
        <Text style={{color: ThemeColors.text}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </Text>
      </View>
    </View>
  );
}
