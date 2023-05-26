import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import CommonStyles from '../utils/CommonStyles';

const RadioButton = (route) => {
  const [value, setValue] = useState(null);
//   const [data, setData] = useState(route.params.data);
const [data, setData] = useState([
	{
		key: 'Pending ',
		text: 'Pending ',
	},
	{
		key: 'Paid',
		text: 'Paid',
	},
	{
		key: 'All',
		text: 'All',
	},
  ])

  return (
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
      {data.map(res => {
        return (
          <View key={res.key} style={styles.container}>
            
            <TouchableOpacity
              style={styles.radioCircle}
              onPress={() => {
                setValue(res.key);
              }}>
              {value === res.key && <View style={styles.selectedRb} />}
            </TouchableOpacity>
            <Text style={[CommonStyles.HelveticaNeue13, {color: '#6F776B',marginLeft:5}]}>
              {res.text}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  radioCircle: {
    height: 15,
    width: 15,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#707070',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 5,
    height: 5,
    borderRadius: 50,
    backgroundColor: '#707070',
  },
});

export default RadioButton;
