import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import CommonStyles from '../utils/CommonStyles';

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
            style={[styles.container,{marginRight:res.key =='All'?0:20}]}
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
                {color: '#6F776B', marginLeft: 5},
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
    marginLeft:50,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#707070',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: '#707070',
  },
});

export default RadioButton;
