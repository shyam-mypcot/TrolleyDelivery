import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  Alert, I18nManager
} from 'react-native';
import CommonStyles from '../utils/CommonStyles';
import ForwardArrow from '../svg/ForwardArrow';
import { useTranslation } from '../hooks/useTranslation';
import { UserData } from '../local-data/user-data/UserData';
import { LocalizationContext } from '../utils/Localization.tsx';
import { moderateScale } from 'react-native-size-matters';

type Props = {
  navigation: any;
};
const DrawerComp: React.FC<Props> = ({ navigation }) => {
  const { T } = useTranslation('Dashboard');
  const {setToken} = useContext(LocalizationContext)!;

  const DrawerItem = ({ children, onPress }: { children: string, onPress: () => void }) => {
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={[styles.drawerItem,]}>
          <Text style={[CommonStyles.HelveticaNeue16Green]}>{children}</Text>
          <ForwardArrow style={{ transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }], }} />
        </View>
      </TouchableWithoutFeedback>
    );
  };


  const navigateTo = (to: string, params: any) => {
    navigation.closeDrawer();
    navigation.navigate(to, params);

  };
  return (
    <View style={{ flex: 1, }}>
      <Image
        style={styles.image}
        source={require('../assets/images/Logo.png')}
        resizeMode="contain"
      />
      <View style={{ flex: 1 }}>
        <DrawerItem onPress={() => { navigateTo('Dashboard', {}) }}>{T('dashboard')}</DrawerItem>
        <DrawerItem onPress={() => navigateTo('Orders', { title: T('assignedOrder') })}>
          {T('assignedOrder')}
        </DrawerItem>

        <DrawerItem onPress={() => navigateTo('Revenue', {})}>{T('myRevenue')}</DrawerItem>
        <DrawerItem onPress={() => navigateTo('Profile', {})}>{T('myProfile')}</DrawerItem>
        <DrawerItem onPress={() => navigateTo('Orders', { title: T('completedOrder') })}>
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
                { text: T('no'), onPress: () => { } },
                {
                  text: T('yes'),
                  onPress: () => {
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
          padding:  moderateScale(15),
          marginVertical:  moderateScale(15),
        }}>
        <Text style={[CommonStyles.HelveticaNeue16Green]}>{T('version')} 0.0.1</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  drawerItem: {
    padding:  moderateScale(15),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomWidth:  moderateScale(1),
    borderBottomColor: '#707070',


  },
  image: {
    height:  moderateScale(170),
    width:  moderateScale(170),
    // marginBottom: 30,
    alignSelf: 'center',
  },
});
export default DrawerComp;
