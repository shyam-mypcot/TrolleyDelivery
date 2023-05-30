import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import typography from '../utils/typography';
import {useNavigation} from '@react-navigation/native';

const Header = ({title}) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: '#E3C133',
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={5} style={{width:'10%', justifyContent:'center'}}>
     
        <Image
          style={{
            width: 10,
            height: 20,
          }}
          source={require('../assets/images/back.png')}
        />
        
      </TouchableOpacity>
      <View style={{width: '90%', alignItems:'center', justifyContent:'center'}}>
        <Text
          style={{
            color: '#fff',
            fontFamily: typography.HelveticaBold,
            fontSize: 20,
            marginRight: 20,
          }}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default Header;
