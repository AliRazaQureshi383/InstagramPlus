import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { useTheme } from '@react-navigation/native';

export default function ProfileHeader() {
  const ThemeColors = useTheme().colors;

  return (
    <View style={Styles.container}>
      <TouchableOpacity>
        <Image
          source={{uri: 'https://picsum.photos/600'}}
          style={Styles.prfilePicture}
        />
      </TouchableOpacity>

      <View style={Styles.container2}>
        <View style={Styles.container3}>
          <TouchableOpacity>
            <Text style={[Styles.numberContainer, {color : ThemeColors.text}]}>10</Text>
            <Text style={[Styles.text,  {color : ThemeColors.text}]}>Posts</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.container3}>
          <TouchableOpacity>
            <Text style={[Styles.numberContainer,  {color : ThemeColors.text}]}>160</Text>
            <Text style={[Styles.text,  {color : ThemeColors.text}]}>Followers</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.container3}>
          <TouchableOpacity>
            <Text style={[Styles.numberContainer, {color : ThemeColors.text}]}>100</Text>
            <Text style={[Styles.text, {color : ThemeColors.text}]}>Following</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  prfilePicture: {
    height: 80,
    width: 80,
    borderRadius: 100,
    marginLeft: 20,
  },
  numberContainer: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 15,
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    marginEnd: 20,
  },
  text: {
    color: 'white',
    //fontWeight: 'bold',
    alignSelf: 'center',
  },
  container3: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
  },
});
