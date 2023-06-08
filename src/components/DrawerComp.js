import React,{useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  Alert,I18nManager
} from 'react-native';
import CommonStyles from '../utils/CommonStyles';
import ForwardArrow from '../svg/ForwardArrow';
import {useTranslation} from '../hooks/useTranslation';
import { UserData } from '../local-data/user-data/UserData';
import {LocalizationContext} from '../utils/Localization';

const DrawerComp = ({navigation}) => {
  const {T} = useTranslation('Dashboard');
  const {setToken} = useContext(LocalizationContext);

  const DrawerItem = ({children, onPress, style}) => {
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={[styles.drawerItem, ]}>
          <Text style={[CommonStyles.HelveticaNeue16Green]}>{children}</Text>
          <ForwardArrow style={{transform: [{scaleX: I18nManager.isRTL ? -1 : 1}],}} />
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
      <DrawerItem onPress={() => navigateTo('Dashboard')}>{T('dashboard')}</DrawerItem>
      <DrawerItem onPress={() => navigateTo('Orders',{title: T('assignedOrder')})}>
      {T('assignedOrder')}
      </DrawerItem>
      
      <DrawerItem onPress={() => navigateTo('Revenue')}>{T('myRevenue')}</DrawerItem>
      <DrawerItem onPress={() => navigateTo('Profile')}>{T('myProfile')}</DrawerItem>
      <DrawerItem onPress={() => navigateTo('Orders',{title: T('completedOrder')})}>
      {T('completedOrder')}
      </DrawerItem>
      <DrawerItem
        onPress={() => {
          navigation.closeDrawer();
        //   navigation.replace('Login');
        Alert.alert(
      T('logout'),
      T('logoutMessage'),
      [
        {text: T('no'), onPress: () => {}},
        {
          text: T('yes'),
          onPress: () =>{ 
            UserData.clearAsyncUserData('token')
            setToken('')
            navigation.replace('Login')
            }
        },
      ],
    );

        }}>
        {T('logout')}
      </DrawerItem>
      </View>
      <View
        style={{
          alignItems: 'center',
        //   alignSelf:'flex-end',
          padding: 15,
          marginVertical:15,
        }}>
        <Text style={[CommonStyles.HelveticaNeue16Green]}>{T('version')} 0.0.1</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  drawerItem: {
    padding: 15,
    alignItems: 'center',
    justifyContent:'space-between',
    flexDirection:'row',
    borderBottomWidth:1,
    borderBottomColor:'#707070',
    

  },
  image: {
    height: 170,
    width: 170,
    // marginBottom: 30,
    alignSelf: 'center',
  },
});
export default DrawerComp;
