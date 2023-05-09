import React from 'react';
import {createStackNavigator, TransitionSpecs} from '@react-navigation/stack';
import homeScreen from './homeScreen';
import StoryScreen from './story/StoryScreen';
import StoryCamera from './StoryCamera/StoryCamera';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import palette from 'res/palette';
import images from 'res/images';
import colors from '../../../res/colors';
import DirectMessageScreen from './DirectMessage/DirectMessageScreen';
import { useTheme } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import sendBlack from '../../../res/images/sendBlack.png'
import cameraBlack from '../../../res/images/cameraBlack.png'

export default function () {
  const Stack = createStackNavigator();
  StatusBar.setBarStyle('light-content');
  const ThemeColors = useTheme().colors;
  const theme = useColorScheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={homeScreen}
        options={({navigation}) => ({
          title: '',
          headerStyle: {
            backgroundColor: ThemeColors.card,
            shadowColor: colors.seperatorLineColor,
          },
          headerLeft: () => (
            <View style={Styles.headerLeftContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate('StoryCameraScreen')}>
              
              
              
              
                {/* <Image
                  source={ theme === 'dark' ? images.photo_camera : cameraBlack}
                  style={Styles.headerLeftImage}
                /> */}

<Icon name="camera" size={30} color= {theme === 'dark' ? 'white' : 'black'} />

                
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <View>
              <TouchableOpacity
                style={Styles.headerRightContainer}
                onPress={() => navigation.navigate('DirectMessageScreen')}>
               
               
               
                {/* <Image
                  source={theme === 'dark' ? images.direct_message : sendBlack}
                  style={Styles.headerRightImage}
                /> */}

<Icon name="send-o" size={30} color= {theme === 'dark' ? 'white' : 'black'} />



              </TouchableOpacity>
            </View>
          ),
          headerTitle: (
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={images.logo}
                style={{width: 110, resizeMode: 'contain'}}
              />
            </TouchableOpacity>
          ),
          headerTitleStyle: {alignSelf: 'center'},
        })}
      />
      <Stack.Screen name="Story" component={StoryScreen} />
      <Stack.Screen
        name="StoryCamera"
        component={StoryCamera}
        options={{gestureDirection: 'horizontal-inverted'}} //for left to right transition
      />
    </Stack.Navigator>
  );
}

const Styles = StyleSheet.create({
  headerLeftContainer: palette.header.headerLeftContainer,
  headerLeftImage: palette.header.headerLeftImage,
  headerRightContainer: palette.header.headerRightContainer,
  headerRightImage: palette.header.headerRightImage,
});
