import React, {useContext, useCallback, useState, useEffect} from 'react';
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
import OtpInputs from 'react-native-otp-inputs';

import {EndPoints} from '../services/EndPoints.js';
import BackArrow from '../svg/BackArrow.js';
import Otpbox from '../components/Otpbox.tsx';
import { moderateScale } from 'react-native-size-matters';

type Props = {
  navigation: any;
};
const Otp: React.FC<Props> = ({navigation, route}) => {
  const [otpNumber, setOtpNumber] = useState('');
  const [Error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [timer, setTimer] = useState(60);
  const timeOutCallback = useCallback(() => {
    if (timer > 0) {
      setTimer(currTimer => currTimer - 1);
    }
  }, []);
  useEffect(() => {
    timer > 0 && setTimeout(timeOutCallback, 1000);
  }, [timer, timeOutCallback]);
  console.log(timer, route.params.number);

  const resetTimer = async () => {
    try {
      const formData = {
        phone_number: route.params.number,
      };
      setLoader(true);
      const response = await ApiServices({
        data: formData,
        url: EndPoints.RequestOtp,
        restHeader: {},
      });
      
      console.log('90909090990 response data', response.data);
      if (response.status===200) {

      if (response.data.success === '1') {
        setTimer(60);
        Toast.show(response.data.message, Toast.LONG);
      } else if (response.data.success === '0') {
        Toast.show(response.data.message, Toast.LONG);
      }}
      else {
        Toast.show('Please try again after some time',Toast.LONG)
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };
  const {T} = useTranslation('OTPScreen');

  const verifyOtp = async () => {
    // <= Added this function
    // const strongRegex = new RegExp(
    //   '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
    // );

    if (otpNumber.length < 4) {
      console.log('Please Provide valid Username/Email');
      setError(true);

      return false;
    } 
    else {
      setError(false);
      const formData = {
        phone_number: route.params.number,
        otp_code:otpNumber
      };
      setLoader(true);
      try {
        const response = await ApiServices({
          data: formData,
          url: EndPoints.ValidateOtp,
          restHeader: {},
        });

        console.log('90909090990 response data', response.data);
        if (response.status===200) {

        if (response.data.success === '1') {
          navigation.navigate('ResetPassword',{number:route.params.number,Otp:otpNumber});
          Toast.show(response.data.message, Toast.LONG);
        } else if (response.data.success === '0') {
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

  const setOtp = (otp: any) => {
    setOtpNumber(otp);
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
                {T('otpVerification')}
              </Text>
            </View>
            <ScrollView horizontal contentContainerStyle={{width:'100%',}}>

            <View style={{marginHorizontal: moderateScale(20)}}>
              <Otpbox setOtp={setOtp} keyboardType="number-pad" />
              {/* <OtpInputs
              autofillFromClipboard={false}
              handleChange={(code: string) => console.log(code)}
              numberOfInputs={4}
              isRTL={true}
              style={{flexDirection:'row'}}
              inputContainerStyles={{backgroundColor:'#F3F3F3',marginHorizontal:10,width:60,height:60,alignItems:'center',justifyContent:'center'}}
              focusStyles={{backgroundColor:'#FFFFFF',borderColor:'#E3C133',borderWidth:1, borderBottomWidth:2}}
              inputStyles={[CommonStyles.HelveticaBold20,{color:'#272727',marginLeft:7}]}
              /> */}
            </View>
            </ScrollView>
            <View style={{alignItems: 'flex-end', marginVertical: moderateScale(10)}}>
              <Text>00 : {timer} sec </Text>
            </View>
            {Error && <Text style={[CommonStyles.Error]}>{T('error')}</Text>}
            <TouchableOpacity
              style={[CommonStyles.loginBtn, {marginTop: moderateScale(60)}]}
              onPress={() => {
                verifyOtp();
              }}>
              <Text style={[CommonStyles.HelveticaNeue16, {color: '#ffffff'}]}>
                {T('verify')}
              </Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <Text style={[CommonStyles.HelveticaNeue16]}>
                {T('didntreceivethecode')}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  if (timer == 0) {
                    resetTimer();
                  }
                }}>
                <Text
                  style={[
                    CommonStyles.HelveticaNeue16,
                    {
                      color: '#E3C133',
                      textDecorationLine: 'underline',
                      textDecorationColor: '#E3C133',
                      marginLeft: moderateScale(5),
                    },
                  ]}>
                  {T('resend')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({});

export default Otp;
