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
const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const signIn = () => {
    // <= Added this function
    const strongRegex = new RegExp(
      '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
    );

    if (!strongRegex.test(email)) {
      console.log('Please Provide valid Username/Email');
      setEmailError(true);
      setPasswordError(false);

      return false;
    } else if (password.length < 8) {
      console.log('Password must contain atleast 8 character');
      setPasswordError(true);
      setEmailError(false);

      return false;
    } else {
      setEmailError(false);
      setPasswordError(false);
      navigation.navigate('Drawer', {screen: 'Dashboard'});
    }
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/images/Logo.png')}
        resizeMode="contain"
      />
      <View style={{alignItems: 'center', marginBottom: 20}}>
        <Text
          style={[
            {
              fontFamily: typography.HelveticaBold,
              fontSize: 22,
              color: 'orange',
            },
          ]}>
          Login
        </Text>
      </View>
      <View style={[styles.inputView]}>
        <TextInput
          style={[styles.TextInput, CommonStyles.HelveticaNeue16]}
          placeholder="Username"
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
          Please Provide valid Username/Email
        </Text>
      )}
      <View style={styles.inputView}>
        <TextInput
          style={[styles.TextInput, CommonStyles.HelveticaNeue16]}
          placeholder="Password"
          placeholderTextColor="#707070"
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />
      </View>
      {passwordError && (
        <Text
          style={[
            {
              fontFamily: typography.Helvetica,
              fontSize: 14,
              color: 'red',
            },
          ]}>
          Password must contain atleast 8 character
        </Text>
      )}
      <TouchableOpacity
        style={{width: '100%', alignItems: 'flex-end'}}
        onPress={() => navigation.navigate('ResetPassword')}>
        <Text style={[CommonStyles.HelveticaNeue16, styles.forgot_button]}>
          Forgot Password ?
        </Text>
      </TouchableOpacity>

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
            LOGIN
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    padding: 20,
    justifyContent: 'center',
  },
  image: {
    height: 170,
    width: 170,
    // marginBottom: 30,
    alignSelf: 'center',
  },
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
  forgot_button: {
    height: 30,
    color: '#000',
    marginTop: 20,

    // marginBottom: 30,
  },
  loginBtn: {
    width: '40%',
    borderRadius: 15,
    height: 50,
    alignItems: 'center',
    alignSelf: 'center',
    // justifyContent: 'center',
    paddingVertical: 10,
    marginTop: 40,
    backgroundColor: '#F2D847',
  },
});

export default Login;
