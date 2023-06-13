import React, { useEffect, useMemo, useState } from 'react';
import { StyleSheet } from 'react-native';
import * as RNLocalize from 'react-native-localize';
import { i18n } from './I18n';
import { i18Storage } from '../local-data/i18nStorage';
import { UserData } from '../local-data/user-data/UserData';


interface LocalizationContextProps {
    t:any,
    locale:string,
    setLocale:React.Dispatch<React.SetStateAction<string>>,
    token:string
    setToken:React.Dispatch<React.SetStateAction<string>>,
}

export const LocalizationContext = React.createContext<LocalizationContextProps | null>(null);
type Props = {
    children:React.ReactNode
};

const LocalizationContextWrapper:React.FC<Props> = ( props) => {
    const { children } = props;
    const [locale, setLocale] = useState<string>('en');
    const [token, setToken] = useState("");

    const memoizedValues = useMemo(() => {
        i18n.locale = locale;
        return {
            t: (scope: any, options?: any) => i18n.t(scope, { ...options }),
            locale,
            setLocale,
            token,
            setToken,
        };
    }, [locale, token]);

    const setAppLanguage = async (): Promise<void> => {
        const appStoredLang = await i18Storage.retreiveAppLanguage();
        if (!appStoredLang) {
            await i18Storage.storeAppLanguage(locale);
        }
    };

    const checkAppLanguageAndSet = async (): Promise<void> => {
        const appStoredLang = await i18Storage.retreiveAppLanguage();
        const getToken = await UserData.retreiveUserData('token');

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
            getToken !== null && setToken(getToken);
        }
    };

    useEffect(() => {
        setAppLanguage();
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