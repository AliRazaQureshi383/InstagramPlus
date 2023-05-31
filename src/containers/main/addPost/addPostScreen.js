import React from 'react';
import {View, Text, Button, TextInputBase, TextInput, Alert} from 'react-native';
import palette from 'res/palette';
import { useTheme } from '@react-navigation/native';
import { usePostListingsMutation } from '../../../services/api';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import CustomInput from '../../../components/CustomInput';
export default function addPostScreen() {
  const ThemeColors = useTheme().colors;

  const value = useSelector((state)=> state);
  const token = value.loginReducer.token;
  const [createResponse, responseInfo] = usePostListingsMutation();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const ManualSignIn = ()=>{
    let data= {
      title,
      description,
      user_id : '14',
      token
    }
  createResponse(data).then(res => {
  console.log('response====okokokok==>',res);
  res && ( Alert.alert('Posted Successfully')  )
  
  })
  .catch(err => {
  console.log('err', err);
  });
  }
  const handleTitleChange = (text) => {
    setTitle(text);
  };

  const handleDescriptionChange = (text) => {
    setDescription(text);
  };



  const handleSubmit = () => {
    // Handle the submission of the title and description data
    console.log('Title:', title);
    console.log('Description:', description);

    ManualSignIn();
  };

  return (
    <View style={[palette.container.center, {backgroundColor : ThemeColors.card}]}>


<View style ={{width :('90%')}} >
      <TextInput
        placeholder="Enter title"
        value={title}
        onChangeText={handleTitleChange}
        style = {{borderColor :'black', borderWidth :1}}
      />
      <TextInput
        placeholder="Enter description"
        value={description}
        style = {{borderColor :'black', borderWidth :1, marginVertical :10 , height :180}}
multiline = {true}
        onChangeText={handleDescriptionChange}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>     
    </View>
  );
}
