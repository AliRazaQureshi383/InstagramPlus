// {
// 	"user": {
// 		"first_name":"ali",
// 		"email":"ali.raza@aldaimsolutions.com",
// 		"password":"123456",
// 		"password_confirmation":"123456"
// 	}
// }

import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextComponent,
  Alert,
} from 'react-native';
import {useColorScheme} from 'react-native';
import images from 'res/images';
import {
  
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import {useEffect} from 'react';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {useSignInMutation} from '../../services/api';

import axios from 'axios'
const SignupScreen = () => {
  const [createResponse, responseInfo] = useSignInMutation();

  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const theme = useColorScheme();

  const handleSignup = () => {
    // Perform sign up logic here
  };
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
      "253730982593-fhq544g34hil0vkk849pab27s4uschnk.apps.googleusercontent.com",
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('userInfo',userInfo.user);
      userInfo.user.email && (navigation.navigate('Login'), Alert.alert('Signin Successfull')  )
      // fetchUserData = createAsyncThunk(
      //   'user/fetchUserData',
      //   async () => {
      //     const response = await axios.get('https://example.com/api/userdata');
      //     return response.data;
      //   }
      // );
      let data= {
        		first_name: userInfo.user.name,
        		email: userInfo.user.email,
        		password:"123456",
        		password_confirmation:"123456"
        	}
      createResponse(data).then(res => {
        console.log('response======>',res);
        // if (res.data.statusCode == '200') {
        //   dispatch(login(data));
        //   console.log('res.data.token', res.data.Data.access_token);
        //   let value = {
        //     token: res.data.Data.access_token,
        //   };

        //   dispatch(token(value));
      //   } else if (res.data.statusCode == '400') {
      //     setInvalidMsg('Email or Password is Incorrect');
      //   }
      })
      .catch(err => {
        console.log('err', err);
      });

      this.setState({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={theme === 'dark' ? images.logo : images.logoBlack}
        style={{height: 70, width: 200}}
      />
      <View style={{marginVertical: 30}}>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            fontWeight: 'bold',
            marginHorizontal: 20,
          }}>
          Sign up to see photos and videos from your friends.
        </Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={()=> signIn()}
        // disabled={this.state.isSigninInProgress}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  input: {
    width: '80%',
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    width: '80%',
    marginBottom : 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SignupScreen;
