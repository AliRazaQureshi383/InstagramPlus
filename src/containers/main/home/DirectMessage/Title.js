import React from 'react';
import {View, Text} from 'react-native';
import DirectMessageScreen from './DirectMessageScreen';
import { useTheme } from '@react-navigation/native';

export default function Title() {
  const ThemeColors = useTheme().colors;

  return (
    <View style={{marginTop: 10, marginStart: 10}}>
      <Text style={{color: ThemeColors.text, fontWeight: 'bold', fontSize: 18}}>
        Messages
      </Text>
    </View>
  );
}
