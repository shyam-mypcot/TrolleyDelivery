import React, {useContext, useState, useEffect} from 'react';
import {
  I18nManager,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import RNRestart from 'react-native-restart';
import {useTranslation} from '../hooks/useTranslation';
import {i18Storage} from '../local-data/i18nStorage';
import CommonStyles from '../utils/CommonStyles';
import {LocalizationContext} from '../utils/Localization';
import typography from '../utils/typography';
import LanguageIcon from '../svg/LanguageIcon';
import {UserData} from '../local-data/user-data/UserData';
import AppLoader from '../components/AppLoader';
import ApiServices from '../services/ApiServices';
import {err} from 'react-native-svg/lib/typescript/xml';
import axios from 'axios';
import {EndPoints} from '../services/EndPoints';
import data from '../components/common';
import LoginState, {getLoginData} from '../redux/reducers/LoginState';
import {useDispatch, useSelector} from 'react-redux';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const [email, setEmail] = useState(__DEV__ ? '0999360003' : '');
  const [password, setPassword] = useState(__DEV__ ? '12345678' : '');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [language, setLanguage] = useState('');
  const [loader, setLoader] = useState(false);

  const {setLocale, locale, setToken} = useContext(LocalizationContext);
  const {T} = useTranslation('Login');

  const selectLanguage = async () => {
    let currentLanguage = await i18Storage.retreiveAppLanguage();
    console.log(language, 'before change', currentLanguage);
    if (currentLanguage === 'en') {
      console.log('is this working');
      // setLanguage('AR')

      setLocale('ar');
      await i18Storage.storeAppLanguage('ar');
      I18nManager.forceRTL(true);
      RNRestart.restart();
    }
    if (currentLanguage === 'ar') {
      // setLanguage('EN')
      setLocale('en');
      await i18Storage.storeAppLanguage('en');
      I18nManager.forceRTL(false);
      RNRestart.restart();
    }
    console.log(language, 'after change');
  };

  const signIn = async () => {
    // <= Added this function
    // const strongRegex = new RegExp(
    //   '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
    // );
    const strongRegex = new RegExp('');

    if (email.length < 10) {
      console.log('Please Provide valid Username/Email');
      setEmailError(true);
      setPasswordError(false);

      return false;
    } else if (password.length < 8) {
      console.log('Password must contain atleast 8 character');
      setPasswordError(true);
      setEmailError(false);

      return false;
    } else {
      setEmailError(false);
      setPasswordError(false);

      const formData = {
        username: email,
        password: password,
      };
      setLoader(true);
      try {
        // const response = await ApiServices({
        //   data: formData,
        //   url: EndPoints.Login,
        // });
        const response = await dispatch(
          getLoginData({
            data: formData,
            url: EndPoints.Login,
          }),
        );

        console.log('90909090990 response data', response.payload);

        if (response.payload.success === '1') {
          await UserData.storeUserData('token', response.payload.data[0].token);
          setToken(response.payload.data[0].token);
          navigation.navigate('Drawer', {screen: 'Dashboard'});
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
      // await UserData.storeUserData('token', true);
      // setToken(true);
      // navigation.navigate('Drawer', {screen: 'Dashboard'});
    }
  };

  useEffect(() => {
    setLanguage(locale.toUpperCase());
  }, [locale]);

  if (loader) {
    return <AppLoader />;
  }
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <TouchableOpacity
        style={{
          margin: 15,
          alignSelf: I18nManager.isRTL ? 'flex-start' : 'flex-end',
          flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
          alignItems: 'center',
        }}
        onPress={() => selectLanguage()}>
        <View style={{paddingBottom: 2, borderBottomWidth: 0.5}}>
          <Text style={[{marginHorizontal: 5}, CommonStyles.HelveticaNeue16]}>
            {language}
          </Text>
        </View>
        <LanguageIcon />
      </TouchableOpacity>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../assets/images/Logo.png')}
          resizeMode="contain"
        />
        <View style={{alignItems: 'center', marginBottom: 20}}>
          <Text
            style={[
              {
                fontFamily: typography.HelveticaBold,
                fontSize: 22,
                color: 'orange',
              },
            ]}>
            {T('login')}
          </Text>
        </View>
        {/* <View style={[styles.inputView]}>
          <TextInput
            style={[styles.TextInput, CommonStyles.HelveticaNeue16]}
            placeholder={T('username')}
            placeholderTextColor="#707070"
            onChangeText={email => setEmail(email)}
          />
        </View> 
         {emailError && (
          <Text
            style={[
              {
                fontFamily: typography.Helvetica,
                fontSize: 14,
                color: 'red',
              },
            ]}>
            {T('usernameError')}
          </Text>
        )} */}
        <View style={[styles.inputView]}>
          <TextInput
            style={[styles.TextInput, CommonStyles.HelveticaNeue16]}
            placeholder={T('MobileNumber')}
            placeholderTextColor="#707070"
            keyboardType="numeric"
            maxLength={10}
            onChangeText={email => setEmail(email)}
          />
        </View>
        {emailError && (
          <Text
            style={[
              {
                fontFamily: typography.Helvetica,
                fontSize: 14,
                color: 'red',
              },
            ]}>
            {T('usernameError')}
          </Text>
        )}
        <View style={styles.inputView}>
          <TextInput
            style={[
              styles.TextInput,
              CommonStyles.HelveticaNeue16,
              {alignSelf: 'flex-start'},
            ]}
            placeholder={T('password')}
            placeholderTextColor="#707070"
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}
          />
        </View>
        {passwordError && (
          <Text
            style={[
              {
                fontFamily: typography.Helvetica,
                fontSize: 14,
                color: 'red',
              },
            ]}>
            {T('passwordError')}
          </Text>
        )}
        <TouchableOpacity
          style={{width: '100%', alignItems: 'flex-end'}}
          onPress={() => navigation.navigate('ResetPassword')}>
          <Text style={[CommonStyles.HelveticaNeue16, styles.forgot_button]}>
            {T('forgotPassword')}
          </Text>
        </TouchableOpacity>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 35,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#F2D847',
              padding: 10,
              paddingHorizontal: 35,
              borderRadius: 10,
            }}
            onPress={() => {
              signIn();
            }}>
            <Text style={[CommonStyles.HelveticaNeue16, {color: '#ffffff'}]}>
              {T('login')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    padding: 20,
    justifyContent: 'center',
  },
  image: {
    height: 170,
    width: 170,
    // marginBottom: 30,
    alignSelf: 'center',
  },
  inputView: {
    backgroundColor: '#fff',
    // borderRadius: 30,
    borderBottomColor: '#707070',
    borderBottomWidth: 1,
    // width: '70%',

    height: 45,
    marginTop: 20,
  },
  TextInput: {
    height: 50,
    flex: 1,
    // writingDirection:'rtl',

    // padding: 10,
    // marginLeft: 20,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  forgot_button: {
    height: 30,
    color: '#000',
    marginTop: 20,

    // marginBottom: 30,
  },
  loginBtn: {
    width: '40%',
    borderRadius: 15,
    height: 50,
    alignItems: 'center',
    alignSelf: 'center',
    // justifyContent: 'center',
    paddingVertical: 10,
    marginTop: 40,
    backgroundColor: '#F2D847',
  },
});

export default Login;
