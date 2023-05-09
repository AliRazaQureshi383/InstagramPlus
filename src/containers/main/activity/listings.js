import React from 'react';
import {View, Text, FlatList, Image, ImageBackground, TouchableOpacity} from 'react-native';
import palette from 'res/palette';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';

export default function listings() {
  const navigation = useNavigation();
  const value = useSelector((state)=> state);
  console.log('ppppp',value.loginReducer.data);
  const ThemeColors = useTheme().colors;

  const category = value.loginReducer.data;
  return (

    <View style={[palette.container.center, {backgroundColor : ThemeColors.card}]}>
    
      <Text style={[palette.text, {color : ThemeColors.text}]}>Market Place</Text>
      <FlatList
        // refreshControl={
        //   <RefreshControl
        //     refreshing={refeshing}
        //     onRefresh={handleOnRefresh}
        //   />
        // }
        // showsHorizontalScrollIndicator={false}
        // initialNumToRender={5}
        // horizontal={true}
        data={category}
        // keyExtractor={(item) => item._id}
        renderItem={({item, index}) => (
      <TouchableOpacity  onPress={()=> navigation.navigate('listingDetails', {params : item})}>

          <View
            key={item._id}
            style={{marginLeft: 5, marginBottom: 10, marginRight: 5}}>
            <Text style={{color: 'white' , alignSelf : 'center'}}>{item.title}</Text>
            <Image
              style={{height: 350, width: 350}}
              source={{uri:item?.imageUrl[0]}}
            />
          </View>
          </TouchableOpacity>
        )}
      />

          </View>
  );
}
