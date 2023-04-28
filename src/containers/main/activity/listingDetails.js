import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import {FlatList} from 'react-native-gesture-handler';

const listingDetails = ({route}) => {
  
  const images = route.params.params.imageUrl;
  const title = route.params.params.title;

  return (
    <View style = {{flex :1}}> 
    <View>

    <SwiperFlatList
    autoplay
    autoplayDelay={2}
    autoplayLoop
    index={2}
    showPagination
    data={images}
    renderItem={({ item }) => (
        <View style={{padding: 10}}>
        <Image style={{height: 300, width: 380}} source={{uri: item}} />
        <>
        <Text style = {{color :'red' , fontSize :20, padding :20}} >{item}</Text>

        </>
      </View>
    )}
  />
  <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
  </View>
  </View>
  );
};

export default listingDetails;
const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
