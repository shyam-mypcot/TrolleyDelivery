import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  I18nManager,
} from 'react-native';
import Header from '../components/Header';
import typography from '../utils/typography';
import {useTranslation} from '../hooks/useTranslation';

const Profile = ({navigation}) => {
  const {T} = useTranslation('Profile');

  const [data, setData] = useState([
    {
      id: 1,
      imgURL: require('../assets/images/Profile.png'),
      title: T('name'),
      value: T('shihab'),
    },
    {
      id: 2,
      imgURL: require('../assets/images/email.png'),
      title: T('email'),
      value: 's6@trolley-sd.com',
    },
    {
      id: 3,
      imgURL: require('../assets/images/phone.png'),
      title: T('phoneNumber'),
      value: '0117138796',
    },
    {
      id: 4,
      imgURL: require('../assets/images/person_pin_circle.png'),
      title: T('address'),
      value: T('omdurman'),
    },
    {
      id: 5,
      imgURL: require('../assets/images/city.png'),
      title: T('city'),
      value: T('omdurman'),
    },
    {
      id: 6,
      imgURL: require('../assets/images/area.png'),
      title: T('area'),
      value: T('aldohaAlArda'),
    },
  ]);

  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <Header title={T('myProfile')} />
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={{paddingHorizontal: 20, paddingVertical: 15}}>
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fff',
              borderRadius: 10,
              paddingVertical: 10,
            }}>
            <View
              style={[
                {
                  height: 200,
                  width: 200,
                  borderRadius: 200,
                  backgroundColor: '#E3C133',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                },
              ]}>
              <View
                style={{
                  height: 170,
                  width: 170,
                  borderRadius: 200,
                  backgroundColor: '#fff',
                  justifyContent: 'center',
                  alignItems: 'center',
                  zIndex: 9999,
                  position: 'absolute',
                }}>
                <Text
                  style={{
                    color: '#717C8E',
                    fontSize: 50,
                    fontWeight: '500',
                    fontFamily: typography.GibsonSemiBold,
                  }}>
                  150
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
                // justifyContent: 'space-evenly',
                alignItems: 'center',
                paddingLeft: 30,
              }}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: '#E3C133',
                  borderRadius:5

                }}></View>
              <View style={{width: '80%'}}>
                <Text
                  style={{
                    marginLeft: 10,
                    color: '#777777',
                    fontFamily: typography.GibsonSemiBold,
                    fontWeight: '600',
                    fontSize: 15,
                  }}>
                  {T('message')}
                </Text>
              </View>
            </View>
          </View>
          </View>

          <ScrollView
            horizontal
            contentContainerStyle={{width: '100%', paddingHorizontal: 20,paddingBottom:15}}>
            <View
              style={{
                paddingHorizontal: 20,
                paddingVertical: 10,
                backgroundColor: '#fff',
                borderRadius: 10,
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
                        paddingVertical: 10,
                      }}>
                      <Image
                        style={{
                          width: item.id == 4 ? 25 : 20,
                          height: item.id == 4 ? 25 : 20,
                        }}
                        source={item.imgURL}
                        resizeMode="contain"
                      />

                      <View style={{marginLeft: 20}}>
                        <Text
                          adjustsFontSizeToFit
                          allowFontScaling
                          style={{
                            color: '#A8ADB7',
                            fontFamily: typography.Helvetica,
                            fontSize: 13,
                            // includeFontPadding: false
                            // textAlign:I18nManager.isRTL?"right":'left'
                          }}>
                          {item.title}
                        </Text>
                        <Text
                          style={{
                            color: '#515C6F',
                            fontFamily: typography.HelveticaNeue,
                            fontSize: 15,
                            marginTop: 1,
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
