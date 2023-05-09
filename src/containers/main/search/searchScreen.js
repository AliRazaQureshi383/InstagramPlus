import React from 'react';
import {View, Text, TextInputComponent} from 'react-native';
import palette from 'res/palette';
import {WebView} from 'react-native-webview';
import {RNCamera} from 'react-native-camera';
import SearchGrid from './SearchGrid';
import SearchTopTags from './SearchTopTags';
import { useTheme } from '@react-navigation/native';

export default function searchScreen() {
  const ThemeColors = useTheme().colors;

  return (
    <View style={{backgroundColor: ThemeColors.card}}>
      <SearchTopTags />
      <SearchGrid />
    </View>
  );
}
