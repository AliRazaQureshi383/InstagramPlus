import { StyleSheet, Text, View , TextInput} from 'react-native'
import React from 'react'
import { useForm,Controller } from 'react-hook-form';

const CustomInput = ({control, name, placeholder, rules = {}, secureTextEntery}) => {
    // const {
    //     control,
    //     handleSubmit,
    //     formState: { errors },
    //   } = useForm();
  return (
    <Controller
    control={control}
    name ={name}
    rules= {rules}
    render ={({field :{value , onChange , onBlur}, fieldState : {error} })=>
    
    <>
    <TextInput
      style={[styles.userNameContainer, {borderColor : error ? 'red' : '#262626'}]}
      placeholder={placeholder}
      placeholderTextColor={'grey'}
      value ={value}
      onChangeText = {onChange}
      onBlur= {onBlur}
      color  = 'grey'
       
      secureTextEntery ={secureTextEntery}
     
    />
   {  error &&  <Text style = {{color: 'red', alignSelf :'stretch' , marginLeft :20 , marginTop :-10}}>{error.message || 'Error'}</Text>}

</>
  
  }
  

  />
  )
}

export default CustomInput

const styles = StyleSheet.create({
  userNameContainer: {
    borderColor: '#262626',
    // backgroundColor: '#262626',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    //alignItems: 'center',
    marginStart: 20,
    marginEnd: 20,
    marginTop: 20,
    marginBottom: 20,
  }
})