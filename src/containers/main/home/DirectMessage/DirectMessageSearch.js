import React from 'react';
import {View, Dimensions, TextInput, Text} from 'react-native';
import colors from 'res/colors';
import { useTheme } from '@react-navigation/native';

export default function DirectMessageSearch() {
  const ThemeColors = useTheme().colors;

  return (
    <View>
      <TextInput
        placeholder="Search"
        placeholderTextColor={colors.textFaded2}
        style={{
          backgroundColor: ThemeColors.card,
          height: 40,
          borderRadius: 10,
          marginHorizontal: 10,
          marginVertical: 10,
          fontWeight: 'bold',
          paddingStart: 10,
          fontSize: 16,
          color: 'white',
        }}
      />
    </View>
  );
}
