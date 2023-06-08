import React, { useContext, useState, useEffect } from 'react';
import {
  I18nManager,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity, Platform,
  View, ImageBackground, KeyboardAvoidingView, ScrollView
} from 'react-native';
import RNRestart from 'react-native-restart';
import { useTranslation } from '../hooks/useTranslation';
import { i18Storage } from '../local-data/i18nStorage';
import CommonStyles from '../utils/CommonStyles';
import { LocalizationContext } from '../utils/Localization.tsx';
import typography from '../utils/typography';
import LanguageIcon from '../svg/LanguageIcon';
import { UserData } from '../local-data/user-data/UserData';
import AppLoader from '../components/AppLoader';
import ApiServices from '../services/ApiServices';
import { err } from 'react-native-svg/lib/typescript/xml';
import axios from 'axios';
import { EndPoints } from '../services/EndPoints';
import data from '../components/common';
import { useDispatch, useSelector } from 'react-redux';
import Call from '../svg/call.js';
import LockPassword from '../svg/LockPassword.js';
import Toast from 'react-native-simple-toast';

type Props = {
  navigation: any;
};
const Login: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const [MobileNumber, setMobileNumber] = useState('');
  const [mobileError, setMobileError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [language, setLanguage] = useState('');
  const [loader, setLoader] = useState(false);

  const { setLocale, locale, setToken } = useContext(LocalizationContext)!;
  const { T } = useTranslation('Login');

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

    if (MobileNumber.length < 10) {
      console.log('Please Provide valid Username/Email');
      setMobileError(true);
      setPasswordError(false);

      return false;
    } else if (password.length < 8) {
      console.log('Password must contain atleast 8 character');
      setPasswordError(true);
      setMobileError(false);

      return false;
    } else {
      setMobileError(false);
      setPasswordError(false);

      const formData = {
        username: MobileNumber,
        password: password,
      };
      setLoader(true);
      try {
        const response = await ApiServices({
          data: formData,
          url: EndPoints.Login,
          restHeader: {}
        });
        // const response =  dispatch(
        //   getProfileData({
        //     data: formData,
        //     url: EndPoints.Login,
        //   },),
        // );

        console.log('90909090990 response data', response.data);

        if (response.data.success === '1') {
          await UserData.storeUserData('token', response.data.data[0].token);
          setToken(response.data.data[0].token);
          navigation.navigate('Drawer', { screen: 'Dashboard' });
        }
        else if (response.data.success === '0') {
          setPassword('')
          Toast.show(response.data.message, Toast.LONG);
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
    
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          style={{ flex: 1 }}
          // imageStyle={{ borderRadius: 15 }}
          resizeMode="cover"
          source={require('../assets/images/logo-background.png')}>
          <TouchableOpacity
            style={{
              marginTop: 15,
              marginHorizontal: 15,
              alignSelf: I18nManager.isRTL ? 'flex-start' : 'flex-end',
              flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
              alignItems: 'center',
            }}
            onPress={() => selectLanguage()}>
            <View style={{ paddingBottom: 2, borderBottomWidth: 0.5 }}>
              <Text style={[{ marginHorizontal: 5 }, CommonStyles.HelveticaNeue16]}>
                {language}
              </Text>
            </View>
            <LanguageIcon />
          </TouchableOpacity>
          <Image
            style={CommonStyles.loginLogo}
            source={require('../assets/images/Logo.png')}
            resizeMode="contain"
          />
          <View style={[CommonStyles.boxShadow, CommonStyles.loginContainer]}>
            <View style={{ alignItems: 'center', marginVertical: 20 }}>
              <Text
                style={[
                  {
                    fontFamily: typography.HelveticaBold,
                    fontSize: 22,
                    color: '#000000',
                  },
                ]}>
                {T('login')}
              </Text>
            </View>
            <View style={[CommonStyles.inputContainer]}>
              <Call />
              <View style={CommonStyles.inputView}>
                <View>
                  <Text style={[CommonStyles.HelveticaNeue16]}>
                    +249 |
                  </Text>
                </View>
                <TextInput
                  style={[CommonStyles.TextInput, CommonStyles.HelveticaNeue16]}
                  placeholder={T('MobileNumber')}
                  placeholderTextColor="#707070"
                  keyboardType="numeric"
                  maxLength={10}
                  value={MobileNumber}
                  onChangeText={MobileNumber => setMobileNumber(MobileNumber)}
                />
              </View>

            </View>
            {mobileError && (
              <Text
              style={[CommonStyles.Error]}>

                {T('usernameError')}
              </Text>
            )}
            <View style={[CommonStyles.inputContainer]}>
              <LockPassword />
              <View style={CommonStyles.inputView}>
                <TextInput
                  style={[
                    CommonStyles.TextInput,
                    CommonStyles.HelveticaNeue16,
                    { alignSelf: 'flex-start' },
                  ]}
                  placeholder={T('password')}
                  placeholderTextColor="#707070"
                  value={password}
                  secureTextEntry={true}
                  onChangeText={password => setPassword(password)}
                />
              </View>
            </View>
            {passwordError && (
              <Text
              style={[CommonStyles.Error]}>

                {T('passwordError')}
              </Text>
            )}
            <TouchableOpacity
              style={{ width: '100%', alignItems: 'flex-end' }}
              onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={[CommonStyles.HelveticaNeue16, styles.forgot_button]}>
                {T('forgotPassword')}
              </Text>
            </TouchableOpacity>


            <TouchableOpacity
              style={[CommonStyles.loginBtn]}
              onPress={() => {
                signIn();
              }}>
              <Text style={[CommonStyles.HelveticaNeue16, { color: '#ffffff' }]}>
                {T('login')}
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  forgot_button: {
    height: 30,
    color: '#E3C133',
    marginTop: 20,
    marginBottom: 40
  },

});

export default Login;
