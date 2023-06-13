import React, {useContext, useState, useEffect} from 'react';
import {
  I18nManager,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  View,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {useTranslation} from '../hooks/useTranslation.js';
import CommonStyles from '../utils/CommonStyles.js';
import typography from '../utils/typography.js';
import AppLoader from '../components/AppLoader.tsx';
import ApiServices from '../services/ApiServices.tsx';
import Toast from 'react-native-simple-toast';

import {EndPoints} from '../services/EndPoints.js';
import Call from '../svg/call.js';
import BackArrow from '../svg/BackArrow.js';
import LockPassword from '../svg/LockPassword.js';
import { moderateScale } from 'react-native-size-matters';

type Props = {
  navigation: any;
};
const ResetPassword: React.FC<Props> = ({navigation, route}) => {
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  const [passwordError, setPasswordError] = useState(false);
  const [loader, setLoader] = useState(false);

  const {T} = useTranslation('ResetPassword');

  const resetPassword = async () => {
    // <= Added this function
    // const strongRegex = new RegExp(
    //   '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
    // );

    if (password.length < 6 || confirmpassword.length < 6) {
      setPasswordError(true);

      return false;
    } else if (password != confirmpassword) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
      const formData = {
        phone_number: route.params.number,
        password:password,
        confirm_password:confirmpassword,
        otp_code: route.params.Otp
      };
      setLoader(true);
      try {
        const response = await ApiServices({
          data: formData,
          url: EndPoints.ForgetPassword,
          restHeader: {}
        });

        console.log('90909090990 response data', response.data);
        if (response.status===200) {

        if (response.data.success === '1') {
          navigation.navigate('Login');
          Toast.show(response.data.message, Toast.LONG);
        }
        else if (response.data.success === '0') {
          Toast.show(response.data.message, Toast.LONG);
        }
      }
      else {
        Toast.show('Please try again after some time',Toast.LONG)
      }
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
  };

  if (loader) {
    return <AppLoader />;
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          style={{flex: 1}}
          // imageStyle={{ borderRadius: 15 }}
          resizeMode="cover"
          source={require('../assets/images/logo-background.png')}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={CommonStyles.backArrow}
            hitSlop={5}>
            <View style={{transform: [{scaleX: I18nManager.isRTL ? -1 : 1}]}}>
              <BackArrow />
            </View>
          </TouchableOpacity>
          <Image
            style={CommonStyles.loginLogo}
            source={require('../assets/images/Logo.png')}
            resizeMode="contain"
          />
          <View style={[CommonStyles.boxShadow, CommonStyles.loginContainer]}>
            <View style={{alignItems: 'center', marginVertical: moderateScale(20)}}>
              <Text
                style={[
                  CommonStyles.LoginTitle
                ]}>
                {T('resetPassword')}
              </Text>
              <Text
                style={[CommonStyles.HelveticaNeue16, {textAlign: 'center'}]}>
                {T('message')}
              </Text>
            </View>

            <View style={[CommonStyles.inputContainer]}>
              <LockPassword />
              <View style={CommonStyles.inputView}>
                <TextInput
                  style={[
                    CommonStyles.TextInput,
                    CommonStyles.HelveticaNeue16,
                    {alignSelf: 'flex-start'},
                  ]}
                  placeholder={T('enterNewPassword')}
                  placeholderTextColor="#707070"
                  value={password}
                  secureTextEntry={true}
                  onChangeText={password => setPassword(password)}
                />
              </View>
            </View>
            <View style={[CommonStyles.inputContainer]}>
              <LockPassword />
              <View style={CommonStyles.inputView}>
                <TextInput
                  style={[
                    CommonStyles.TextInput,
                    CommonStyles.HelveticaNeue16,
                    {alignSelf: 'flex-start'},
                  ]}
                  placeholder={T('confirmPassword')}
                  placeholderTextColor="#707070"
                  value={confirmpassword}
                  secureTextEntry={true}
                  onChangeText={confirmpassword =>
                    setConfirmPassword(confirmpassword)
                  }
                />
              </View>
            </View>
            {passwordError && (
              <Text style={[CommonStyles.Error]}>{T('error')}</Text>
            )}

            <TouchableOpacity
              style={[CommonStyles.loginBtn, {marginTop: moderateScale(60)}]}
              onPress={() => {
                resetPassword();
              }}>
              <Text style={[CommonStyles.HelveticaNeue16, {color: '#ffffff'}]}>
                {T('reset')}
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  
});

export default ResetPassword;
