import {View, Text} from 'react-native';
import React from 'react';
import AppNavigator from './src/AppNavigator';
import {Provider} from 'react-redux';

import 'react-native-gesture-handler';
import LocalizationContextWrapper from './src/utils/Localization';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <LocalizationContextWrapper>
        <AppNavigator />
      </LocalizationContextWrapper>
    </Provider>
  );
};

export default App;
