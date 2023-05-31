import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  Image,
  StatusBar,
  Alert,
  ScrollView
} from 'react-native';
import {useSignInMutation , useLogInMutation} from'../src/services/api';
import { useForm,Controller } from 'react-hook-form';

import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { useEffect } from 'react';
import palette from 'res/palette';
import TabNavigator from './containers/main/TabNavigator';
import MainNavigator from './containers/main/MainNavigator';
import {TouchableOpacity} from 'react-native-gesture-handler';
import images from 'res/images';
import googleLogo from '../src/res/images/googleLogo.png'
import TopLogo from '../src/res/images/logo1b2.png'
import colors from './res/colors';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import SignupScreen from './containers/auth/SignupScreen';
import { useNavigation } from '@react-navigation/native';
import CustomInput from './components/CustomInput';
import { useSelector, useDispatch } from 'react-redux';
import { login } from './redux/reducer/reducer';
StatusBar.setBarStyle('light-content');

export default function AppNavigator() {
  const [createResponse, responseInfo] = useSignInMutation();
  const [createResponseLogin, responseInfoLogin] = useLogInMutation();
  const value = useSelector((state)=> state);
const dispatch = useDispatch();

  const ThemeColors = useTheme().colors;
  const theme = useColorScheme();
const navigation = useNavigation();
  const [validate, setValidate] = React.useState(false); 
  function LoginScreen() {
    const _signInAsync = async (data) => {
      console.log(data);
//       createResponseLogin(data).then(res => {
//         console.log('response======>',res);

//      if(res.data.auth_token)
// {


//           dispatch(login({token : res.data.auth_token }  ))

          
          
          setValidate(true)
//         }

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
      // })
      // .catch(err => {
      //   console.log('err', err);
      // });
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
              password:"zxcvbnmm",
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
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
    return (
      <ScrollView contentContainerStyle={[Styles.container, {backgroundColor : ThemeColors.card}]}>
        <View style={Styles.logoContainer}>
          <Image source={ TopLogo }  style={{height: 150, width: ('70%'), resizeMode  :'contain'}} />
        </View>
        {/* <View style={[Styles.userNameContainer, {backgroundColor : ThemeColors.card }]}> */}

        <CustomInput
          control={control}
          name = "username"
          placeholder= 'writte here'
          rules={{required : 'user name is required'}}

          />
        {/* </View> */}
        {/* <View style={[Styles.passwordContainer,{backgroundColor : ThemeColors.card}]}> */}
        <CustomInput
          control={control}
          name = "password"
          placeholder= 'writte here'
          secureTextEntery 
          rules={{required : 'pasword is required', minLength : {value :8 , message : 'password sould atleast 8 charecter long'}}}

          />
        {/* </View> */}
        <View style={Styles.forgotPasswordContainer}>
          <TouchableOpacity>
            <Text style={Styles.forgotPasswordText}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={Styles.loginContainer} onPress={handleSubmit(_signInAsync)}>
          <Text style={Styles.loginText}>Log In</Text>
        </TouchableOpacity>
        <View
          style={{
            //flex: 0.1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 30,
          }}>
          <View style={{flex: 1, height: 1, backgroundColor: '#262626'}}></View>
          <Text style={{marginLeft: 40, marginRight: 40, color: '#969696'}}>
            OR
          </Text>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: '#262626',
            }}></View>
        </View>
        <View
          style={{
            marginTop: 40,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image source={googleLogo} style={{width: 20, height: 20}} />
          <TouchableOpacity style={{alignItems: 'center', marginStart: 10}}
                  onPress={()=> signIn()}

          >
            <Text style={{color: '#008bef'}}>Log In With Google</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginTop: 50}}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#262626',
              height: 1,
            }}></View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Text style={{color: '#969696'}}>Don't have an account ?</Text>
          <TouchableOpacity onPress={()=>{navigation.navigate('Signup')}} >
            <Text style={{color: '#008bef'}}> Sign Up.</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
  const Stack = createStackNavigator();
  return validate ? (
    <MainNavigator />
  ) : (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerStyle: {backgroundColor: '#000'},
          headerTintColor: '#fff',
          headerTransparent: true,
          title: '',
        }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          headerStyle: {backgroundColor: '#000'},
          headerTintColor: '#fff',
          headerTransparent: true,
          title: '',
        }}
      />
    </Stack.Navigator>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  userNameContainer: {
    borderColor: '#262626',
    backgroundColor: colors.loginInputBackground,
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    //alignItems: 'center',
    marginStart: 20,
    marginEnd: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  userNameInput: {
    marginStart: 10,
    color: 'white',
  },
  passwordContainer: {
    borderColor: '#262626',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    //alignItems: 'center',
    marginStart: 20,
    marginEnd: 20,
    backgroundColor: colors.loginInputBackground,
    marginBottom: 20,
  },
  passwordInput: {marginStart: 10, color: 'white'},
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginEnd: 20,

  },
  forgotPasswordText: {
    color: '#0088f8',
  },
  loginContainer: {
    alignItems: 'center',
    height: 40,
    marginTop: 30,
    backgroundColor: '#0088f8',
    justifyContent: 'center',
    marginStart: 20,
    marginEnd: 20,
    borderRadius: 5,
  },
  loginText: {
    color: '#fff',
  },
});
