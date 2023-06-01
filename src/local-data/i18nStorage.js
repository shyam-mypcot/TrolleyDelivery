import AsyncStorage from '@react-native-async-storage/async-storage';

import {i18StorageKeys} from './keys';

const i18Storage = {
  storeAppLanguage: async value => {
    try {
      await AsyncStorage.setItem(i18StorageKeys.language, value);
    } catch (error) {
      console.log(error);
    }
  },

  storeRoutes: async value => {
    try {
      await AsyncStorage.setItem(i18StorageKeys.routes, value);
    } catch (error) {
      console.log(error);
    }
  },

  retreiveRoutes: async () => {
    try {
      const awaitedResult = await AsyncStorage.getItem(i18StorageKeys.routes);

      return awaitedResult;
    } catch (error) {
      console.log(error);
    }
  },

  clearAsyncItem: async key => {
    try {
      await AsyncStorage.removeItem(i18StorageKeys[key]);
    } catch (error) {
      console.log(error);
    }
  },

  retreiveAppLanguage: async () => {
    try {
      const awaitedResult = await AsyncStorage.getItem(i18StorageKeys.language);
        console.log('awaitedResult......',awaitedResult);
      return awaitedResult;
    } catch (error) {
      console.log(error);
    }
  },
};

export {i18Storage};
