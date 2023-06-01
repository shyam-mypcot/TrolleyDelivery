import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import CommonStyles from '../utils/CommonStyles';
import typography from '../utils/typography';
import Header from '../components/Header';
import {useTranslation} from '../hooks/useTranslation';

const ResetPassword = ({navigation}) => {
  const {T} = useTranslation('ResetPassword');

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const signIn = () => {
    // <= Added this function
    const strongRegex = new RegExp(
      '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
    );

    if (!strongRegex.test(email)) {
      setEmailError(true);
      return false;
    } else {
      navigation.navigate('Login');
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Header title={T('resetPassword')} />
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          // alignItems: 'center',
          padding: 20,
          //   justifyContent: 'center',
        }}>
        <Text
          style={{
            fontFamily: typography.HelveticaBold,
            fontSize: 16,
            color: '#707070',
          }}>
          {T('message')}
        </Text>
        <View style={[styles.inputView]}>
          <TextInput
            style={[styles.TextInput, CommonStyles.HelveticaNeue16]}
            placeholder={T('emailAdress')}
            placeholderTextColor="#707070"
            onChangeText={email => setEmail(email)}
          />
        </View>
        {emailError && (
          <Text
            style={[
              {
                fontFamily: typography.Helvetica,
                fontSize: 14,
                color: 'red',
              },
            ]}>
            {T('error')}
          </Text>
        )}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 35,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#F2D847',
              padding: 10,
              paddingHorizontal: 35,
              borderRadius: 10,
            }}
            onPress={() => {
              signIn();
            }}>
            <Text style={[CommonStyles.HelveticaNeue16, {color: '#ffffff'}]}>
              {T('continue')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputView: {
    backgroundColor: '#fff',
    // borderRadius: 30,
    borderBottomColor: '#707070',
    borderBottomWidth: 1,
    // width: '70%',
    height: 45,
    marginTop: 20,
    // alignItems: 'center',
  },
  TextInput: {
    height: 50,
    flex: 1,
    // padding: 10,
    // marginLeft: 20,
  },
});

export default ResetPassword;
