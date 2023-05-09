import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image} from 'react-native';
import palette from 'res/palette';
import images from 'res/images';
import colors from 'res/colors';
import PostImage from './PostImage';
import { useTheme } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import xyx from '../../../../res/images/xyx.png'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function PostHeader({post}) {
  const ThemeColors = useTheme().colors;
  const theme = useColorScheme();

  return (
    <View style={[Styles.container,{backgroundColor: ThemeColors.card}]}>
      <View style={Styles.nameContainer}>
        <Image
          source={{uri: 'https://picsum.photos/300'}}
          style={Styles.personImage}
        />
        <View>
          <Text style={[Styles.personName , {color: ThemeColors.text}]}> {post.userName} </Text>
          <Text style={[Styles.placeName, {color: ThemeColors.text}]}> {post.placeName} </Text>
        </View>
      </View>
      <View>
        <TouchableOpacity>
          <View>
          {/* <Image source = {theme === 'dark' ? images.more :   xyx } style={Styles.iconMore} /> */}
          <Icon name="ellipsis-h" size={30} color= {theme === 'dark' ? 'white' : 'black'} />

          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    marginBottom: 6,
    marginStart: 10,
    marginEnd: 10,
    alignItems: 'center',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  personImage: {
    width: 30,
    height: 30,
    borderRadius: 30,
  },
  personName: {
    color: colors.text,
    marginStart: 10,
    fontWeight: 'bold',
  },
  placeName: {
    color: colors.text,
    marginStart: 10,
    fontSize: 12,
  },
  iconMore: {
    height: 15,
    width: 25,

  },
});
