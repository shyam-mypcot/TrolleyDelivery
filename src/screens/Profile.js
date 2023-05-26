import React, {useEffect, useState} from 'react';
import {View, Image, Text, SafeAreaView,  StyleSheet,FlatList} from 'react-native';
import Header from '../components/Header';
import typography from '../utils/typography';
const Profile = ({navigation}) => {
  const [data, setData] = useState([
    {
      id: 1,
      imgURL: require('../assets/images/Profile.png'),
      title: 'NAME',
      value: 'Shihab 5',
    },
    {
      id: 2,
      imgURL: require('../assets/images/email.png'),
      title: 'EMAIL',
      value: 's6@trolley-sd.com',
    },
    {
      id: 3,
      imgURL: require('../assets/images/phone.png'),
      title: 'PHONE NUMBER',
      value: '0117138796',
    },
    {
      id: 4,
      imgURL: require('../assets/images/person_pin_circle.png'),
      title: 'ADDRESS',
      value: 'Omdurman',
    },
    {
      id: 5,
      imgURL: require('../assets/images/city.png'),
      title: 'CITY',
      value: 'Omdurman',
    },
    {
      id: 6,
      imgURL: require('../assets/images/area.png'),
      title: 'AREA',
      value: 'Aldoha, Al Arda',
    },
  ]);

  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <Header title="My Profile" />
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
                height: 160,
                width: 160,
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
                  fontFamily: typography.GibsonRegular,
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
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingLeft: 50,
            }}>
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: '#E3C133',
              }}></View>
            <View style={{width: '80%'}}>
              <Text
                style={{
                  marginLeft: 10,
                  color: '#777777',
                  fontFamily: typography.GibsonRegular,
                  fontWeight: '600',
                  fontSize: 15,
                }}>
                Total Completed Orders till date
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 15,
            backgroundColor: '#fff',
            borderRadius: 10,
            width: '100%',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
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
                      width: 20,
                      height: 20,
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
                        fontFamily: typography.NeusaNextStdTrialRegular,
                        fontSize: 13,
                        // includeFontPadding: false
                      }}>
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        color: '#515C6F',
                        fontFamily: typography.NeusaNextStdTrialRegular,
                        fontSize: 15,
                        marginTop: 2,
                      }}>
                      {item.value}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};


export default Profile;
