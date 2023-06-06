import React, {useEffect} from 'react';
import {View, StyleSheet, I18nManager} from 'react-native';
import Lottie from 'lottie-react-native';
import truck from '../loaders/truck.json';

const AppLoader = ({}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#ffffff',alignItems:'center',justifyContent:'center'}}>
      <Lottie style={{height:200, left:I18nManager.isRTL?0: -5}} source={truck} autoPlay loop />
    </View>
  );
};

const styles = StyleSheet.create({});

export default AppLoader;
