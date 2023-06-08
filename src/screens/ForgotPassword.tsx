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
import { useTranslation } from '../hooks/useTranslation.js';
import CommonStyles from '../utils/CommonStyles.js';
import typography from '../utils/typography.js';
import AppLoader from '../components/AppLoader.tsx';
import ApiServices from '../services/ApiServices.tsx';
import Toast from 'react-native-simple-toast';

import { EndPoints } from '../services/EndPoints.js';
import Call from '../svg/call.js';
import BackArrow from '../svg/BackArrow.js';
type Props = {
  navigation: any;
};
const ForgotPassword: React.FC<Props> = ({ navigation }) => {


  const [MobileNumber, setMobileNumber] = useState('');
  const [mobileError, setMobileError] = useState(false);
  const [loader, setLoader] = useState(false);

  const { T } = useTranslation('ForgotPassword');
  const { T: LD } = useTranslation('Login');



  const sendOtp = async () => {
    // <= Added this function
    // const strongRegex = new RegExp(
    //   '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
    // );

    if (MobileNumber.length < 10) {
      console.log('Please Provide valid Username/Email');
      setMobileError(true);

      return false;
    } else {
      setMobileError(false);
      const formData = {
        phone_number: MobileNumber,
      };
      setLoader(true);
      try {
        const response = await ApiServices({
          data: formData,
          url: EndPoints.RequestOtp,
          restHeader: {}
        });
        

        console.log('90909090990 response data', response.data);
        
        if (response.data.success === '1') {
          // navigation.navigate('ResetPassword',);
          Toast.show(response.data.message, Toast.LONG);
        }
        else if (response.data.success === '0') {
          Toast.show(response.data.message, Toast.LONG);
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
      style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          style={{ flex: 1 }}
          // imageStyle={{ borderRadius: 15 }}
          resizeMode="cover"
          source={require('../assets/images/logo-background.png')}>

          <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 30, marginLeft: 30,alignItems:'flex-start' }} hitSlop={5}>
            <View style={{ transform: [{ scaleX: I18nManager.isRTL? -1:1 }] }}>

              <BackArrow />
            </View>
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
                {T('forgotPassword')}
              </Text>
              <Text
                style={[
                  CommonStyles.HelveticaNeue16
                ]}>
                {T('message')}
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
                  placeholder={LD('MobileNumber')}
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
                {LD('usernameError')}
              </Text>
            )}

            <TouchableOpacity
              style={[CommonStyles.loginBtn, { marginTop: 60 }]}
              onPress={() => {
                sendOtp();
              }}>
              <Text style={[CommonStyles.HelveticaNeue16, { color: '#ffffff' }]}>
                {T('send')}
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

export default ForgotPassword;
