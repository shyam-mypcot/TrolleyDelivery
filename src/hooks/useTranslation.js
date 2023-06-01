import {useCallback, useContext} from 'react';
import {LocalizationContext} from '../utils/Localization';
const useTranslation = (screenName) => {
  const {t, locale} = useContext(LocalizationContext);
  const T = useCallback(
    name => {
      return t(name, {scope:screenName});
    },
    [locale],
  );
  return {T};
};

export {useTranslation};
