import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import Header from '../components/Header';
import CommonStyles from '../utils/CommonStyles';
import Filter from '../svg/Filter';
import FilterInactive from '../svg/FilterInactive';
import data from '../components/common';
import SDGWhite from '../svg/SDGWhite';
import SDGOrange from '../svg/SDGOrange';
const Revenue = () => {
  const [active, setActive] = useState(false);
  const [today, setToday] = useState(false);
  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <Header title="My Revenue" />
      <View style={{padding: 10, flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity
            onPress={() => setToday(!today)}
            style={[
              CommonStyles.boxShadow,
              {
                backgroundColor: today ? '#E3C133' : '#ffffff',
                padding: 10,
                alignItems: 'center',
              },
            ]}>
            {today ? <SDGWhite style={{}} /> : <SDGOrange />}
            <Text
              style={[
                CommonStyles.HelveticaNeue16Green,
                {
                  fontSize: 28,
                  fontWeight: '700',
                  color: today ? '#ffffff' : '#6F776B',
                },
              ]}>
              1400
            </Text>
            <Text
              style={[
                CommonStyles.HelveticaNeue16Green,
                {color: today ? '#ffffff' : '#6F776B'},
              ]}>
              Today's Revenue
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setToday(!today)}
            style={[
              CommonStyles.boxShadow,
              {
                backgroundColor: !today ? '#E3C133' : '#ffffff',
                padding: 10,
                paddingHorizontal: 20,
                alignItems: 'center',
              },
            ]}>
            {!today ? <SDGWhite style={{}} /> : <SDGOrange />}
            <Text
              style={[
                CommonStyles.HelveticaNeue16Green,
                {
                  fontSize: 28,
                  fontWeight: '700',
                  color: !today ? '#ffffff' : '#6F776B',
                },
              ]}>
              80000
            </Text>
            <Text
              style={[
                CommonStyles.HelveticaNeue16Green,
                {color: !today ? '#ffffff' : '#6F776B'},
              ]}>
              Total Revenue
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={CommonStyles.HelveticaNeue16Green}>
            Revenue : {today ? 1400 : 80000} SDG
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={CommonStyles.HelveticaNeue16Green}>Filter</Text>

            <TouchableOpacity
              style={{marginLeft: 10}}
              onPress={() => setActive(!active)}>
              {active ? (
                <Filter style={{marginRight: 12}} />
              ) : (
                <FilterInactive style={{marginTop: -5}} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          data={data}
          contentContainerStyle={{flexGrow: 1, paddingBottom: 10}}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={{
                  marginTop: 10,
                  padding: 10,
                  paddingLeft: 20,
                  borderRadius: 10,
                  borderColor: '#F4E1B8',
                  borderWidth: 1,
                  backgroundColor: '#ffffff',
                  shadowColor: '#F2C506',
                  shadowOffset: {
                    width: 0,
                    height: 3,
                  },
                  shadowOpacity: 0.29,
                  shadowRadius: 4.65,

                  elevation: 7,
                }}
                onPress={() => {}}>
                <View style={{}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={[
                        CommonStyles.HelveticaNeue16,
                        {color: '#6F776B'},
                      ]}>
                      Order No.:
                    </Text>
                    <Text
                      style={[
                        CommonStyles.HelveticaNeue16,
                        {color: '#707070'},
                      ]}>
                      Delivery Charge :
                    </Text>
                  </View>
                  <View style={CommonStyles.rowstyle}>
                    <Text
                      style={[
                        CommonStyles.HelveticaNeue16,
                        {color: '#707070'},
                      ]}>
                      {item.Orderid}
                    </Text>
                    <Text
                      style={[
                        CommonStyles.HelveticaNeue16,
                        {color: '#F2C506'},
                      ]}>
                      {item.DeliveryCharge}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 4,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        width: '35%',
                        justifyContent: 'space-between',
                      }}>
                      <Text style={[CommonStyles.HelveticaNeue13]}>
                        Order Date & Time
                      </Text>
                      <Text style={[CommonStyles.HelveticaNeue13]}>:</Text>
                    </View>
                    <Text
                      style={[CommonStyles.HelveticaNeue13, {marginLeft: 10}]}>
                      {item.OrderDateTime}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 4,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        width: '35%',
                        justifyContent: 'space-between',
                      }}>
                      <Text style={[CommonStyles.HelveticaNeue13]}>
                        Delivery
                      </Text>
                      <Text style={[CommonStyles.HelveticaNeue13]}>:</Text>
                    </View>
                    <Text
                      style={[
                        CommonStyles.HelveticaNeue13,
                        {marginLeft: 10, color: '#723D16'},
                      ]}>
                      {item.DeliveryDate} {item.DeliveryTimeSlot}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Revenue;
