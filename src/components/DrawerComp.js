import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import CommonStyles from '../utils/CommonStyles';

const DrawerComp = ({navigation}) => {
  const DrawerItem = ({children, onPress, style}) => {
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={[styles.drawerItem, style]}>
          <Text style={[CommonStyles.HelveticaNeue16Green]}>{children}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };
  const navigateTo = (to, params) => {
    navigation.closeDrawer();
    navigation.navigate(to, params);
  };
  return (
    <View style={{flex: 1,}}>
      <Image
        style={styles.image}
        source={require('../assets/images/Logo.png')}
        resizeMode="contain"
      />
      <View style={{flex:1}}>
      <DrawerItem onPress={() => navigateTo('Dashboard')}>Dashboard</DrawerItem>
      <DrawerItem onPress={() => navigateTo('Orders')}>
        Assigned Orders
      </DrawerItem>
      
      <DrawerItem onPress={() => navigateTo('Revenue')}>My Revenue</DrawerItem>
      <DrawerItem
        onPress={() => {
          navigation.closeDrawer();
        //   navigation.replace('Login');
        Alert.alert(
      'Logout',
      'Are you sure you want to logout',
      [
        {text: 'NO', onPress: () => {}},
        {
          text: 'YES',
          onPress: () => navigation.replace('Login'),
        },
      ],
    );

        }}>
        Logout
      </DrawerItem>
      </View>
      <View
        style={{
          alignItems: 'center',
        //   alignSelf:'flex-end',
          padding: 15,
          marginVertical:15,
        }}>
        <Text style={[CommonStyles.HelveticaNeue16Green]}>Version 0.0.1</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  drawerItem: {
    padding: 15,
    alignItems: 'flex-start',
    borderBottomWidth:1,
    borderBottomColor:'#707070'
  },
  image: {
    height: 170,
    width: 170,
    // marginBottom: 30,
    alignSelf: 'center',
  },
});
export default DrawerComp;
