import React, {useContext, useState, useEffect} from 'react';
import {View, Text, Image, I18nManager, TouchableOpacity} from 'react-native';
import typography from '../utils/typography.js';
import {useNavigation} from '@react-navigation/native';
import LangIcon from '../svg/LangIcon.js';
import CommonStyles from '../utils/CommonStyles.js';
import RNRestart from 'react-native-restart';
import {i18Storage} from '../local-data/i18nStorage.js';
import {LocalizationContext} from '../utils/Localization.tsx';
import {useTranslation} from '../hooks/useTranslation.js';
import { moderateScale } from 'react-native-size-matters';


// @ts-ignore
const Header = ({title}) => {
  const {T} = useTranslation('Dashboard');
  const {setLocale, locale} = useContext(LocalizationContext)!;
  const [language, setLanguage] = useState('');

  const navigation = useNavigation<any>();
  
  const selectLanguage = async () => {
    let currentLanguage = await i18Storage.retreiveAppLanguage();
    await i18Storage.storeRoutes('Drawer');
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
  };
  useEffect(() => {
    setLanguage(locale.toUpperCase());
  }, [locale]);
  const openDrawer = () => navigation.openDrawer();

  return (
    <View
      style={{
        backgroundColor: '#E3C133',
        padding: moderateScale(20),
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={() =>
          title == T('dashboard') ? openDrawer() : navigation.goBack()
        }
        hitSlop={5}
        style={{width: '10%', justifyContent: 'center'}}>
        <Image
          style={{
            width: title == T('dashboard') ? moderateScale(20) : moderateScale(10),
            height: moderateScale(20),
            transform: [{scaleX: I18nManager.isRTL ? -1 : 1}],
          }}
          source={
            title == T('dashboard')
              ? require('../assets/images/hamburger.png')
              : require('../assets/images/back.png')
          }
        />
      </TouchableOpacity>

      <View
        style={{
          width: title == T('dashboard') ? '60%' : '90%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            color: '#fff',
            fontFamily: typography.HelveticaBold,
            fontSize: moderateScale(20),
            marginRight: moderateScale(20),
          }}>
          {title}
        </Text>
      </View>
      {title == T('dashboard') && (
        <>
          <TouchableOpacity
            style={{
              marginHorizontal: moderateScale(15),
              flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
              alignItems: 'center',
            }}
            onPress={() => selectLanguage()}>
            <View style={{paddingBottom: moderateScale(2), borderBottomWidth: moderateScale(0.5)}}>
              <Text
                style={[
                  CommonStyles.HelveticaNeue16,
                  {marginHorizontal: moderateScale(5), color: '#fff'},
                ]}>
                {language}
              </Text>
            </View>
            <LangIcon />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
              style={{
                width: moderateScale(25),
                height: moderateScale(25),
              }}
              source={require('../assets/images/Profile_white.png')}
            />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default Header;
