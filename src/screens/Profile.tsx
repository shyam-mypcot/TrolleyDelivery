import React, {useEffect, useContext, useState} from 'react';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  I18nManager,
} from 'react-native';
import Header from '../components/Header.tsx';
import typography from '../utils/typography.js';
import {useTranslation} from '../hooks/useTranslation.js';
import {LocalizationContext} from '../utils/Localization.tsx';
import {EndPoints} from '../services/EndPoints.js';
import ApiServices from '../services/ApiServices.tsx';
import Toast from 'react-native-simple-toast';
import AppLoader from '../components/AppLoader.tsx';
import axios from 'axios';
import {UserData} from '../local-data/user-data/UserData.js';
import {moderateScale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {getProfileData} from '../redux/reducers/ProfileState.tsx';

const Profile = ({navigation}) => {
  // const state = useSelector(state => state.loginState);
  const dispatch = useDispatch();
  const state = useSelector(state => state.profileState);
  const [loader, setLoader] = useState(false);
  const {token} = useContext(LocalizationContext)!;

  const {T} = useTranslation('Profile');
  // console.log(state, 'state.........');
  const [data, setData] = useState([
    {
      id: 1,
      imgURL: require('../assets/images/Profile.png'),
      title: T('name'),
      value: state.name,
      // value: T('shihab'),
    },
    {
      id: 2,
      imgURL: require('../assets/images/email.png'),
      title: T('email'),
      value: state.email,
      // value: T('trolleyMail'),
    },
    {
      id: 3,
      imgURL: require('../assets/images/phone.png'),
      title: T('phoneNumber'),
      value: state.phone,
      // value: '0117138796',
    },
    {
      id: 4,
      imgURL: require('../assets/images/person_pin_circle.png'),
      title: T('address'),
      value: state.address,
      // value: T('omdurman'),
    },
    {
      id: 5,
      imgURL: require('../assets/images/city.png'),
      title: T('city'),
      value: state.city,
      // value: T('omdurman'),
    },
    {
      id: 6,
      imgURL: require('../assets/images/area.png'),
      title: T('area'),
      value: state.area,
      // value: T('aldohaAlArda'),
    },
  ]);
  const getData = async () => {
    const formData = {};
    setLoader(true);
    try {
      // const response = await ApiServices({
      //   data: formData,
      //   url: EndPoints.ViewProfile,
      //   restHeader: {
      //     "x-access-token":token,
      //     // 'X-Access-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzM4NCJ9.eyJ1aWQiOiIxNSIsImF1ZCI6Imh0dHA6Ly9teXBjb3QuY29tIiwic2NvcGVzIjpbInVzZXIiXSwiaXNzIjoiaHR0cDovL2FwaS5teXBjb3QuY29tIiwiZXhwIjoxNjg2NTk3MzQ2fQ.QS9Trj1PNRJXwFaPxJMHqYM6FtEkg_8GkXkuXcUOJEy7XXgQU1JDZt7G7fZ5DIIapHs6ydsyiGmIN-fQxnmMnzp4afLouZ-pLB3lXAl8FiQT4yBNSXP9_DqmkA9tpWEDDA5iI9NKrmvVugPf-hw2VQ42xC7SEj4WmFeJJOgc3slLST63O3EpQQU3orJv36LLt2rynYYEBcaUOH3t3XVUanxxQVLiYXa5eN9sJ0_eIu5exn2etsKA7trjuRWC6pMl9yO_6qsS7o_spwk1oBFwpATt4Q2x0UZNqft0xMBpLrL-9xJnrFaJJVG8HyojLn7xaK5t0vFqM-cuksQkhxazIg',
      //   },
      // });
      const response = await dispatch(
        // @ts-ignore
        getProfileData({
          data: formData,
          url: EndPoints.ViewProfile,
          restHeader: {
            'x-access-token': token,
          },
        }),
      );

      console.log('90909090990 response ', JSON.stringify(response, null, 2));
      console.log('90909090990 response data', response.payload);
      if (response.payload.success === '1') {
        // {"address": "Omdurman", "area_name": null, "city_name": "Omdurman", "email": "aa@trolley-sd.com", "name": "Ahmed Elsir", "phone": "0999360003", "total_completed_order": "1"

        Toast.show(response.payload.message, Toast.LONG);
      } else if (response.payload.success === '0') {
        Toast.show(response.payload.message, Toast.LONG);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loader) {
    return <AppLoader />;
  }
  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <Header title={T('myProfile')} />
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            paddingHorizontal: moderateScale(20),
            paddingVertical: moderateScale(15),
          }}>
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fff',
              borderRadius: moderateScale(10),
              paddingVertical: moderateScale(10),
            }}>
            <View
              style={[
                {
                  height: moderateScale(200),
                  width: moderateScale(200),
                  borderRadius: moderateScale(200),
                  backgroundColor: '#E3C133',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                },
              ]}>
              <View
                style={{
                  height: moderateScale(170),
                  width: moderateScale(170),
                  borderRadius: moderateScale(200),
                  backgroundColor: '#fff',
                  justifyContent: 'center',
                  alignItems: 'center',
                  zIndex: 9999,
                  position: 'absolute',
                }}>
                <Text
                  style={{
                    color: '#717C8E',
                    fontSize: moderateScale(50),
                    fontWeight: '500',
                    fontFamily: typography.GibsonSemiBold,
                  }}>
                  {state.totalCompletedOrder}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: moderateScale(15),
                // justifyContent: 'space-evenly',
                paddingLeft: moderateScale(30),
              }}>
              <View
                style={{
                  width: moderateScale(20),
                  height: moderateScale(20),
                  backgroundColor: '#E3C133',
                  borderRadius: moderateScale(5),
                }}
              />
              <View style={{width: '80%'}}>
                <Text
                  style={{
                    marginLeft: moderateScale(10),
                    color: '#777777',
                    fontFamily: typography.GibsonSemiBold,
                    fontWeight: '600',
                    fontSize: moderateScale(15),
                  }}>
                  {T('message')}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <ScrollView
          horizontal
          contentContainerStyle={{
            width: '100%',
            paddingHorizontal: moderateScale(20),
            paddingBottom: moderateScale(45),
          }}>
          <View
            style={{
              paddingHorizontal: moderateScale(20),
              paddingVertical: moderateScale(10),
              backgroundColor: '#fff',
              borderRadius: moderateScale(10),
              width: '100%',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.23,
              shadowRadius: 2.62,
              elevation: 4,
              marginTop: 20,
            }}>
            <FlatList
              data={data}
              renderItem={({item}) => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingVertical: moderateScale(10),
                    }}>
                    <Image
                      style={{
                        width:
                          item.id == 4 ? moderateScale(25) : moderateScale(20),
                        height:
                          item.id == 4 ? moderateScale(25) : moderateScale(20),
                      }}
                      source={item.imgURL}
                      resizeMode="contain"
                    />

                    <View style={{marginLeft: moderateScale(20)}}>
                      <Text
                        adjustsFontSizeToFit
                        allowFontScaling
                        style={{
                          color: '#A8ADB7',
                          fontFamily: typography.Helvetica,
                          fontSize: moderateScale(13),
                          // includeFontPadding: false
                          // textAlign:I18nManager.isRTL?"right":'left'
                        }}>
                        {item.title}
                      </Text>
                      <Text
                        style={{
                          color: '#515C6F',
                          fontFamily: typography.HelveticaNeue,
                          fontSize: moderateScale(15),
                          marginTop: moderateScale(1),
                          // textAlign:I18nManager.isRTL?"right":'left'
                        }}>
                        {item.value}
                      </Text>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
