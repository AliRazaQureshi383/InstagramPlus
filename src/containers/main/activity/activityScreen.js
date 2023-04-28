import React from 'react';
import {View, Text, FlatList, Image, ImageBackground, TouchableOpacity} from 'react-native';
import palette from 'res/palette';
export default function activityScreen() {
  const category = [
    {
      _id: '62fe244f58f7aa8230817f89',
      title: 'Garments',
      image: '../../../res/images/like.png',
    },
    {
      _id: '62fe243858f7aa8230817f86',
      title: 'Electornics',
      image: '../../../res/images/like.png',
    },
    {
      _id: '62fe241958f7aa8230817f83',
      title: 'Cosmentics',
      image: '../../../res/images/like.png',
    },
    {
      _id: '62fe246858f7aa8230817f8c',
      title: 'Groceries',
      image: '../../../res/images/like.png',
    },
  ];
  return (

    <View style={palette.container.center}>
    
      <Text style={palette.text}>Market Place</Text>
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
      <TouchableOpacity>

          <View
            key={item._id}
            style={{marginLeft: 5, marginBottom: 10, marginRight: 5}}>
            <Text style={{color: 'white' , alignSelf : 'center'}}>{item.title}</Text>
            <Image
              style={{height: 350, width: 350}}
              source={require('../../../res/images/facebookLogo.png')}
            />
          </View>
          </TouchableOpacity>
        )}
      />

          </View>
  );
}
