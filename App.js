import {View, Text} from 'react-native';
import React from 'react';
import AppNavigator from './src/AppNavigator';
import 'react-native-gesture-handler';
import LocalizationContextWrapper from './src/utils/Localization';

const App = () => {
  return (
    <LocalizationContextWrapper>
      <AppNavigator />
    </LocalizationContextWrapper>
  );
};

export default App;
