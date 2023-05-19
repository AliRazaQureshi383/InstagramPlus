import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import images from 'res/images';
import {Image, StatusBar} from 'react-native';
import palette from 'res/palette';
import colors from 'res/colors';
import { View } from 'react-native';
import homeNavigator from './home/homeNavigator';
import activityNavigator from './activity/activityNavigator';
import addPostNavigator from './addPost/addPostNavigator';
import profileNavigator from './profile/profileNavigator';
import searchNavigator from './search/searchNavigator';
import { useTheme } from '@react-navigation/native';

export default function TabNavigator({NavigateToStoryCamera}) {
  const Tab = createBottomTabNavigator();
  
  const ThemeColors = useTheme().colors;

  return (
    <React.Fragment>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: true,
          showIcon: true,
          style: {
            backgroundColor: ThemeColors.card,
            borderTopColor: colors.seperatorLineColor,
          },
        }}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? images.home_selected : images.home;
            } else if (route.name === 'Search') {
              iconName = focused ? images.search_selected : images.search;
            } else if (route.name === 'AddPost') {
              iconName = focused ? images.add_selected : images.add;
            } else if (route.name === 'Activity') {
              iconName = focused ? images.activity_selected : images.activity;
            } else if (route.name === 'Profile') {
              iconName = focused ? images.profile_selected : images.profile;
            }

            return  <View>
            <Image
              source={require('../../res/images/home1.png')}
              resizeMode="contain"
              style={[{
                height: 20,
                width: 20,
                alignSelf: 'center'},
                {tintColor: focused ? 'black' : 'grey'},
              ]}
            />
  
          </View>
          },
        })}>
        <Tab.Screen name="Home" component={homeNavigator} 
         options={{
          headerShown: false,}}
        />
        <Tab.Screen name="Search"  
      options={{
        headerShown: false,
        tabBarIcon: ({focused}) => (
          <View>
            <Image
              source={require('../../res/images/search1.png')}
              resizeMode="contain"
              style={[{
                height: 20,
                width: 20,
                alignSelf: 'center'},
                {tintColor: focused ? 'black' : 'grey'},
              ]}
            />
  
          </View>
        ),
       
      }} component={searchNavigator} />
        <Tab.Screen name="AddPost" 
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                  source={require('../../res/images/more1.png')}
                  resizeMode="contain"
                  style={[{
                    height: 20,
                    width: 20,
                    alignSelf: 'center'},
                    {tintColor: focused ? 'black' : 'grey'},
                  ]}
                />
      
              </View>
            ),
           
          }} component={addPostNavigator} />
        <Tab.Screen name="Market Place"   options={{
        headerShown: false,
        tabBarIcon: ({focused}) => (
          <View>
            <Image
              source={require('../../res/images/marketplace.png')}
              resizeMode="contain"
              style={[{
                height: 20,
                width: 20,
                alignSelf: 'center'},
                {tintColor: focused ? 'black' : 'grey'},
              ]}
            />
  
          </View>
        ),
       
      }} component={activityNavigator} />
        <Tab.Screen name="Profile"  options={{
        headerShown: false,
        tabBarIcon: ({focused}) => (
          <View>
            <Image
              source={require('../../res/images/profile1.png')}
              resizeMode="contain"
              style={[{
                height: 20,
                width: 20,
                alignSelf: 'center'},
                {tintColor: focused ? 'black' : 'grey'},
              ]}
            />
  
          </View>
        ),
       
      }}  component={profileNavigator} />
      </Tab.Navigator>
    </React.Fragment>
  );
}
