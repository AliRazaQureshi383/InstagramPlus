import React from 'react';
import {View, Text} from 'react-native';
import palette from 'res/palette';
import ProfileHeader from './ProfileHeader';
import {ScrollView, FlatList} from 'react-native-gesture-handler';
import UserBio from './UserBio';
import EditProfileButton from './EditProfileButton';
import ConstantStories from './ConstantStories';
import LineSeperator from './LineSeperator';
import ProfileGrid from './ProfileGrid';
import colors from '../../../res/colors';
import GridIcon from './gridIcon';
import { useTheme } from '@react-navigation/native';

const data = [{key: '1'}];

export default function profileScreen() {
  const ThemeColors = useTheme().colors;

  return (
    <FlatList
      style={{flex: 1, backgroundColor: ThemeColors.card}}
      /*<ProfileHeader />
      <UserBio />
      <EditProfileButton />
      <ConstantStories />
      <LineSeperator />
      <ProfileGrid />*/
      data={data}
      renderItem={() => (
        <>
          <ProfileHeader />
          <UserBio />
          <EditProfileButton />
          {/* <ConstantStories /> */}
          <LineSeperator />
          <GridIcon />
          <ProfileGrid />
        </>
      )}
    />
  );
}
