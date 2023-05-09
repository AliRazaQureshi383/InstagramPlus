import React from 'react';
import {View, Text} from 'react-native';
import palette from 'res/palette';
import { useTheme } from '@react-navigation/native';

export default function addPostScreen() {
  const ThemeColors = useTheme().colors;

  return (
    <View style={[palette.container.center, {backgroundColor : ThemeColors.card}]}>
      <Text style={[palette.text, {color : ThemeColors.text }]}>Add Post</Text>
    </View>
  );
}
