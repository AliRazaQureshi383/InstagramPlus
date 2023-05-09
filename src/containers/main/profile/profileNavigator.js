import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import profileScreen from './profileScreen';
import {Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from 'res/colors';
import images from 'res/images';
import { useTheme } from '@react-navigation/native';
import menuBlack from "../../../res/images/menuBlack.png";
import { useColorScheme } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function profileNavigator() {
  const Stack = createStackNavigator();
  const ThemeColors = useTheme().colors;
  const theme = useColorScheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={profileScreen}
        options={{
          headerTitle: (
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
                Ali
              </Text>
            </TouchableOpacity>
          ),
          headerTitleStyle: {alignSelf: 'center'},
          headerStyle: {
            backgroundColor: ThemeColors.card,
            shadowColor: colors.seperatorLineColor,
          },
          headerRight: () => (
            <TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 10,
                }}>
                {/* <Image
                  source={theme === 'dark' ? images.list3 :  menuBlack}
                  style={{resizeMode: 'contain', width: 25, height: 25}}
                /> */}
<Icon name="bars" size={30} color= {theme === 'dark' ? 'white' : 'black'} />
                
              </View>
            </TouchableOpacity>
          ),
          // headerLeft: () => (
          //   <TouchableOpacity>
          //     <View
          //       style={{
          //         flex: 1,
          //         justifyContent: 'center',
          //         alignItems: 'center',
          //         marginStart: 10,
          //       }}>
          //       <Image
          //         source={images.addIcon}
          //         style={{resizeMode: 'contain', width: 20, height: 20}}
          //       />
          //     </View>
          //   </TouchableOpacity>
          // ),
        }}
      />
    </Stack.Navigator>
  );
}
