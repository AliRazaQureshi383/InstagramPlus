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
  ScrollView,
} from 'react-native';
import {useColorScheme} from 'react-native';
import images from 'res/images';
import Logo from '../../res/images/logo1b2.png'
import {
  
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { useTheme } from '@react-navigation/native';

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
  const ThemeColors = useTheme().colors;

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
    <ScrollView contentContainerStyle={{ flexGrow  :1,
      backgroundColor:ThemeColors.card,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
  }}>
      <Image
        source={Logo}
        style={{height: 150, width: ('70%'), resizeMode  :'contain', marginTop : 20  }}
      />
      <View style={{marginBottom: 30, marginTop :-10}}>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            fontWeight: 'bold',
            marginHorizontal: 20,
            color : ThemeColors.text
          }}>
          Sign up to see photos and videos from your friends.
        </Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        placeholderTextColor={'grey'}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="First Name"
        placeholderTextColor={'grey'}

        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        placeholderTextColor={'grey'}

        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        placeholderTextColor={'grey'}

        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={'grey'}

        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <GoogleSigninButton
    style={{width: 192, height: 48, marginBottom: 32    }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={()=> signIn()}
        // disabled={this.state.isSigninInProgress}
      />
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
   
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
    alignItems: 'center',
    height: 40,
    marginTop: 30,
    backgroundColor: '#0088f8',
    justifyContent: 'center',
    marginStart: 20,
    marginEnd: 20,
    borderRadius: 5,
    width: '80%',

  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SignupScreen;
