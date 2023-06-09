import {
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  I18nManager,
} from 'react-native';
import React, {useEffect} from 'react';

const OTPPin = () => {
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

  const renderItem = ({index}: {index: any}) => {
    return (
      <TouchableWithoutFeedback onPress={() => textInputRef.current?.focus()}>
        <View
          style={{
            borderColor: '#E3C133',
            borderWidth: index === otp[0].OTPValue!.length ? 2 : 1,
            borderRadius: 6,
            height: 50,
            width: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{}} >children={otp[0].OTPValue![index]} </Text>
          {index === otp[0].OTPValue!.length ? (
            <View
              style={[
                StyleSheet.absoluteFillObject,
                {
                  borderWidth: 9,
                  height: '10%',
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
    <View style={{height: 500}}>
      <FlatList
        keyboardShouldPersistTaps="handled"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={otp}
        style={{flex: 1,opacity:0}}
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
        }}
        keyboardType="number-pad"
        maxLength={4}
        style={{
          ...StyleSheet.absoluteFillObject,
          //   height: 50,
          //   width: 50,
          //   left: 50,
          //   textAlign: 'center',
          //   color: 'red',
          opacity: 0,
          textAlign: I18nManager.isRTL ? 'right' : 'left',
        }}
      />
    </View>
  );
};

export default OTPPin;
