import AsyncStorage from '@react-native-async-storage/async-storage';

import {keys} from './keys';

const UserData = {
  storeUserData: async (key, value) => {
    try {
      await AsyncStorage.setItem(keys[key],JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  },

  retreiveUserData: async key => {
    try {
      const awaitedResult = await AsyncStorage.getItem(keys[key]);

      return awaitedResult?JSON.parse(awaitedResult):null ;
    } catch (error) {
      console.log(error);
    }
  },
  clearAsyncUserData: async key => {
    try {
      await AsyncStorage.removeItem(keys[key]);
    } catch (error) {
      console.log(error);
    }
  },
};

export {UserData};
