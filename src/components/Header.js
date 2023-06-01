import React, {useContext, useState, useEffect} from 'react';
import {View, Text, Image, I18nManager, TouchableOpacity} from 'react-native';
import typography from '../utils/typography';
import {useNavigation} from '@react-navigation/native';
import LanguageIcon from '../svg/LanguageIcon';
import CommonStyles from '../utils/CommonStyles';
import global from './global';
import RNRestart from 'react-native-restart';
import {i18Storage} from '../local-data/i18nStorage';
import {LocalizationContext} from '../utils/Localization';

const Header = ({title}) => {
  const {setLocale, locale} = useContext(LocalizationContext);

  const navigation = useNavigation();
  const selectLanguage = async () => {
    let currentLanguage = await i18Storage.retreiveAppLanguage();
    if (currentLanguage === 'en') {
      console.log('is this working');
      // setLanguage('AR')

      setLocale('ar');
      await i18Storage.storeAppLanguage('ar');
      await I18nManager.forceRTL(true);
      RNRestart.restart();
    }
    if (currentLanguage === 'ar') {
      // setLanguage('EN')
      setLocale('en');
      await i18Storage.storeAppLanguage('en');
      await I18nManager.forceRTL(false);
      RNRestart.restart();
    }
  };
  return (
    <View
      style={{
        backgroundColor: '#E3C133',
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        hitSlop={5}
        style={{width: '10%', justifyContent: 'center'}}>
        <Image
          style={{
            width: 10,
            height: 20,
            transform: [{scaleX: I18nManager.isRTL ? -1 : 1}],
          }}
          source={require('../assets/images/back.png')}
        />
      </TouchableOpacity>
      <View
        style={{width: '90%', alignItems: 'center', justifyContent: 'center',flexDirection:'row'}}>
        <Text
          style={{
            color: '#fff',
            fontFamily: typography.HelveticaBold,
            fontSize: 20,
            marginRight: 20,
          }}>
          {title}
        </Text>
        {/* <TouchableOpacity
          style={{
            margin: 15,
            flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
            alignItems: 'center',
          }}
          onPress={() => selectLanguage()}>
          <View style={{paddingBottom: 2, borderBottomWidth: 0.5}}>
            <Text style={[{marginHorizontal: 5}, CommonStyles.HelveticaNeue16]}>
              {global.language}
            </Text>
          </View>
          <LanguageIcon />
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default Header;
