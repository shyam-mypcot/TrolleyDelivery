import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import CommonStyles from '../utils/CommonStyles';
import { moderateScale } from 'react-native-size-matters';

const RadioButton = ({RadioData,onHandleClick }) => {
  const [value, setValue] = useState(null);
  //   const [RadioData, setRadioData] = useState(route.params.RadioData);
  
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width:'100%'
      }}>
      {RadioData?.map(res => {
        return (
          <TouchableOpacity
            key={res.key}
            style={[styles.container,{marginRight:res.key =='All'?0: moderateScale(20)}]}
            onPress={() => {
              // console.log(res.key)
              setValue(res.key)
              onHandleClick(res.key);
            }}>
            <View style={styles.radioCircle}>
              {value === res.key && <View style={styles.selectedRb} />}
            </View>
            <Text
              style={[
                CommonStyles.HelveticaNeue13,
                {color: '#6F776B', marginLeft:moderateScale(5)},
              ]}>
              {res.text}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    width:'40%',
    marginLeft:moderateScale(50),
  },
  radioCircle: {
    height: moderateScale(20),
    width: moderateScale(20),
    borderRadius: moderateScale(100),
    borderWidth: moderateScale(2),
    borderColor: '#707070',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: moderateScale(10),
    height: moderateScale(10),
    borderRadius: moderateScale(50),
    backgroundColor: '#707070',
  },
});

export default RadioButton;
