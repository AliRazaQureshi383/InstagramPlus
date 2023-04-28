import React from 'react';
import {View, Text, FlatList, Image, ImageBackground, TouchableOpacity} from 'react-native';
import palette from 'res/palette';
import { useNavigation } from '@react-navigation/native';
export default function listings() {
  const navigation = useNavigation();
  const category = [
    {
      _id: '62fe244f58f7aa8230817f89',
      title: 'Garments',
      imageUrl:['https://picsum.photos/id/10/200/200','https://picsum.photos/id/11/200/200','https://picsum.photos/id/12/200/200',]   
        },
    {
      _id: '62fe243858f7aa8230817f86',
      title: 'Electornics',
      imageUrl:['https://picsum.photos/id/20/200/200','https://picsum.photos/id/21/200/200','https://picsum.photos/id/22/200/200',]   
     },
    {
      _id: '62fe241958f7aa8230817f83',
      title: 'Cosmentics',
      imageUrl:['https://picsum.photos/id/30/200/200','https://picsum.photos/id/31/200/200','https://picsum.photos/id/32/200/200',]   
       },
    {
      _id: '62fe246858f7aa8230817f8c',
      title: 'Groceries',
      imageUrl:['https://picsum.photos/id/40/200/200','https://picsum.photos/id/41/200/200','https://picsum.photos/id/42/200/200',]   
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
