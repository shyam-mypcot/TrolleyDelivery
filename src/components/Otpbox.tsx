import { View, Text, FlatList, TextInput, StyleSheet, TouchableWithoutFeedback, I18nManager } from 'react-native';
import React, { useEffect } from 'react';
import CommonStyles from '../utils/CommonStyles';

const Otpbox = (props) => {
  const [otp, setOtp] = React.useState([
    {
      OTPValue: '',
    },
    {
      fakeValue: '',
    },
    {
      fakeValue: '',
    },
    {
      fakeValue: '',
    },
  ]);

  const textInputRef = React.useRef<TextInput>(null);

  const renderItem = ({  index }) => {
    return (
      <TouchableWithoutFeedback onPress={() => textInputRef.current?.focus()}>
        <View
          style={{
            borderWidth: index === otp[0].OTPValue!.length ? 1 : 0,
            borderBottomWidth:index === otp[0].OTPValue!.length ? 2 : 0,
            backgroundColor:index === otp[0].OTPValue!.length ? '#ffffff' : '#F3F3F3',
            borderRadius: 6,
            height: 60,
            width: 60,
            justifyContent: 'center',
            borderColor: '#E3C133',
            alignItems: 'center',
            //   backgroundColor: index === otp[0].value.length ? 'red' : 'yellow',
          }}>
          <Text
            style={[CommonStyles.HelveticaBold16,{color:'#272727',}]}
            children={otp[0].OTPValue![index]}
          />
          {index === otp[0].OTPValue!.length ? (
            <View
              style={[
                StyleSheet.absoluteFillObject,
                {
                  borderWidth: 1,
                  height: '70%',
                  width: 0.1,
                  top: 8,
                  left: 7,
                },
              ]}
            />
          ) : null}
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={{ height: 70 }}>
      <FlatList
        keyboardShouldPersistTaps="handled"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={otp}
        style={{ flex: 1 }}
        contentContainerStyle={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}
        renderItem={renderItem}
      />

      <TextInput
        ref={textInputRef}
        value={otp[0].OTPValue}
        onChangeText={text => {
          const newOTP = otp.map((item, index) => {
            item.OTPValue = text;
            return item;
          });
          setOtp(newOTP);
          console.log('otp........',otp[0].OTPValue);
          
          props.setOtp(otp[0].OTPValue)
        }}
        keyboardType={props.keyboardType}
        maxLength={4}
        style={{
          ...StyleSheet.absoluteFillObject,
          //   height: 50,
          //   width: 50,
          //   left: 50,
          //   textAlign: 'center',
          //   color: 'red',
          opacity: 0,
          textAlign: I18nManager.isRTL ? "right" : "left"
        }}
      />
    </View>
  );
};

export default Otpbox;