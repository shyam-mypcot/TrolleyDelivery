import React, {useEffect, useMemo, useState} from 'react';
import {StyleSheet} from 'react-native';
import * as RNLocalize from 'react-native-localize';
import {i18n} from './I18n';
import {i18Storage} from '../local-data/i18nStorage';
import { UserData } from '../local-data/user-data/UserData';

export const LocalizationContext = React.createContext(null);

const LocalizationContextWrapper = props => {
  const {children} = props;
  const [locale, setLocale] = useState('en');
  const [token, setToken] = useState(false);

  const memoizedValues = useMemo(() => {
    i18n.locale = locale;
    return {
      t: (scope, options) => i18n.t(scope, {...options}),
      locale,
      setLocale,
      token,
      setToken
    };
  }, [locale,token]);

  const setAppLanguage = async () => {
    const appStoredLang = await i18Storage.retreiveAppLanguage();
    if(!appStoredLang){
      await i18Storage.storeAppLanguage(locale)
    }
  }
  const checkAppLanguageAndSet = async () => {
    
    const appStoredLang = await i18Storage.retreiveAppLanguage();
    const getToken = await UserData.retreiveUserData("token")


    if (!appStoredLang) {
      if (
        RNLocalize.getLocales()[0].languageCode !== 'en' &&
        RNLocalize.getLocales()[0].languageCode !== 'ar'
      ) {
        setLocale('en');
      }
      setLocale(RNLocalize.getLocales()[0].languageCode);
    }
    if (appStoredLang) {
      setLocale(appStoredLang);
      getToken !== null && setToken(getToken) 
    }
  };
  useEffect(() => {
    setAppLanguage()
    checkAppLanguageAndSet();
  }, []);

  return (
    <LocalizationContext.Provider value={memoizedValues}>
      {children}
    </LocalizationContext.Provider>
  );
};

export default LocalizationContextWrapper;

const styles = StyleSheet.create({});
