import React, {useContext, useState, useEffect} from 'react';
import {View, Text, Image, I18nManager, TouchableOpacity} from 'react-native';
import typography from '../utils/typography';
import {useNavigation} from '@react-navigation/native';
import LangIcon from '../svg/LangIcon';
import CommonStyles from '../utils/CommonStyles';
import RNRestart from 'react-native-restart';
import {i18Storage} from '../local-data/i18nStorage';
import {LocalizationContext} from '../utils/Localization.tsx';
import {useTranslation} from '../hooks/useTranslation';

const Header = ({title}) => {
  const {T} = useTranslation('Dashboard');
  const {setLocale, locale} = useContext(LocalizationContext);
  const [language, setLanguage] = useState('');

  const navigation = useNavigation();
  console.log(
    'navigation.getState().........',
    navigation.getState().routes.at(-1).name,
  );
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
        padding: 20,
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
            width: title == T('dashboard') ? 20 : 10,
            height: 20,
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
            fontSize: 20,
            marginRight: 20,
          }}>
          {title}
        </Text>
      </View>
      {title == T('dashboard') && (
        <>
          <TouchableOpacity
            style={{
              marginHorizontal: 15,
              flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
              alignItems: 'center',
            }}
            onPress={() => selectLanguage()}>
            <Image />
            <View style={{paddingBottom: 2, borderBottomWidth: 0.5}}>
              <Text
                style={[
                  CommonStyles.HelveticaNeue16,
                  {marginHorizontal: 5, color: '#fff'},
                ]}>
                {language}
              </Text>
            </View>
            <LangIcon />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
              style={{
                width: 25,
                height: 25,
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
