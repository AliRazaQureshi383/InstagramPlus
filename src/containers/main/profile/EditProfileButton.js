import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../../../res/colors';
import { useTheme } from '@react-navigation/native';

export default function EditProfileButton() {
  const ThemeColors = useTheme().colors;

  return (
    <TouchableOpacity>
      <View style={{marginTop: 10}}>
        <View
          style={{
            flex: 1,
            height: 30,
            borderRadius: 5,
            marginStart: 10,
            marginEnd: 10,
            backgroundColor: ThemeColors.card,
            justifyContent: 'center',
            borderColor: '#262626',
            borderWidth: 1,
          }}>
          <View style={{alignItems: 'center'}}>
            <Text style={{color: ThemeColors.text}}>Edit Profile</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
