import React from 'react';
import {FlatList, View} from 'react-native';
import Post from './post/Post';
import colors from '../../../res/colors';
import {Text} from 'react-native';
import {Image} from 'react-native';
import images from 'res/images';
import StoryContainer from './story/StoryContainer';
import { useTheme } from '@react-navigation/native';

export default function homeScreen({navigation}) {
  const ThemeColors = useTheme().colors;

  const data = [
    {key: '1'},
    {key: '2'},
    {key: '3'},
    {key: '4'},
    {key: '5'},
    {key: '6'},
    {key: '7'},
    {key: '8'},
    {key: '9'},
    {key: '10'},
  ];

  const storyOnPress = () => navigation.navigate('StoryScreen');

  const post = {
    userName: 'Alex',
    placeName: 'Istanbul, Turkey',
    imgUrl: 'https://picsum.photos/1920/1080',
    likeCount: 103,
    commentCount: 21,
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam maecenas sed enim ut sem viverra.',
    publishDate: new Date().toDateString(),
  };
  const stories = [
    {
      key: 'Ali',
      hasStory: true,
      src: 'https://picsum.photos/600',
    },
    {
      key: 'RAZA',
      hasStory: true,
      src: 'https://picsum.photos/600',
    },
    {
      key: 'Alee',
      hasStory: true,
      src: 'https://picsum.photos/600',
    },
    {
      key: 'Ali raza qureshi',
      hasStory: true,
      src: 'https://picsum.photos/600',
    },
    {
      key: 'instagram',
      hasStory: true,
      src: 'https://picsum.photos/600',
    },
    {
      key: 'new story',
      hasStory: true,
      src: 'https://picsum.photos/600',
    },
  ];

  return (
    <FlatList
      style={{backgroundColor: ThemeColors.card}}
      data={data}
      ListHeaderComponent={() => (
        <StoryContainer stories={stories} storyOnPress={storyOnPress} />
      )}
      renderItem={({item, index}) => (
        /*<View style={{flex: 1, alignItems: 'center'}}>
          <Image
            source={images.harun}
            style={{height: 512, width: 512, resizeMode: 'contain'}}
          />
        </View>
        */
        <Post post={post} />
      )}
    />
  );
}
