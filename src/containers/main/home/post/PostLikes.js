import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import colors from 'res/colors';
import { useTheme } from '@react-navigation/native';

export default function PostLikes({post}) {
  const ThemeColors = useTheme().colors;

  return (
    <TouchableOpacity
      onPress={() => console.log('Pressed Post Likes')}
      style={{marginLeft: 15, marginTop: 10, marginEnd: 15}}>
      <Text style={{color: ThemeColors.text, fontWeight: 'bold'}}>
        {post.likeCount} likes{' '}
      </Text>
    </TouchableOpacity>
  );
}
