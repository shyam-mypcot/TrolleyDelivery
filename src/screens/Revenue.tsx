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
import {useSelector} from 'react-redux';

import Header from '../components/Header';
import CommonStyles from '../utils/CommonStyles';
import Filter from '../svg/Filter';
import FilterInactive from '../svg/FilterInactive';
import data from '../components/common';
import SDGWhite from '../svg/SDGWhite';
import SDGOrange from '../svg/SDGOrange';
import {useTranslation} from '../hooks/useTranslation';
import {moderateScale} from 'react-native-size-matters';

const Revenue = () => {
  const state = useSelector(state => state.dashboardState);

  const {T} = useTranslation('MyRevenue');
  const {T: DD} = useTranslation('DummyData');

  const [active, setActive] = useState(false);
  const [today, setToday] = useState('Today');
  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <Header title={T('myRevenue')} />
      <View style={{padding: moderateScale(10), flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: moderateScale(10),
            justifyContent: 'space-evenly',
            // paddingVertical:  moderateScale(10)
          }}>
          <TouchableOpacity
            onPress={() => setToday('Today')}
            style={[
              CommonStyles.boxShadow,
              {
                backgroundColor: today == 'Today' ? '#E3C133' : '#ffffff',
                borderColor: '#EBA500',
                borderWidth: today == 'Today' ? 0 : moderateScale(1.5),
                paddingVertical: moderateScale(15),
                width: '45%',
                alignItems: 'center',
              },
            ]}>
            {today == 'Today' ? <SDGWhite style={{}} /> : <SDGOrange />}
            <Text
              style={[
                CommonStyles.HelveticaNeue16Green,
                {
                  fontSize: moderateScale(28),
                  fontWeight: '700',
                  color: today == 'Today' ? '#ffffff' : '#272727',
                },
              ]}>
              {state.todayAllRevenue}
            </Text>
            <Text
              style={[
                CommonStyles.HelveticaNeue16Green,
                {color: today == 'Today' ? '#ffffff' : '#272727'},
              ]}>
              {T('todaysRevenue')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setToday('Total')}
            style={[
              CommonStyles.boxShadow,
              {
                backgroundColor: today == 'Total' ? '#E3C133' : '#ffffff',
                paddingVertical: moderateScale(15),
                borderColor: '#EBA500',
                borderWidth: today == 'Total' ? 0 : moderateScale(1.5),
                width: '45%',
                paddingHorizontal: moderateScale(20),
                alignItems: 'center',
              },
            ]}>
            {today == 'Total' ? <SDGWhite style={{}} /> : <SDGOrange />}
            <Text
              style={[
                CommonStyles.HelveticaNeue16Green,
                {
                  fontSize: moderateScale(28),
                  fontWeight: '700',
                  color: today == 'Total' ? '#ffffff' : '#272727',
                },
              ]}>
              {state.allRevenue}
            </Text>
            <Text
              style={[
                CommonStyles.HelveticaNeue16Green,
                {color: today == 'Total' ? '#ffffff' : '#272727'},
              ]}>
              {T('totalRevenue')}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            padding: moderateScale(10),
            marginTop: moderateScale(15),
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={CommonStyles.HelveticaNeue16Green}>
              {T('revenue')} :
            </Text>
            <Text
              style={[
                CommonStyles.HelveticaNeue16Green,
                {marginLeft: moderateScale(5), color: '#000000BF'},
              ]}>
              {today == 'Today' ? state.todayAllRevenue : state.allRevenue} {T('egp')}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={CommonStyles.HelveticaNeue16Green}>{T('filter')}</Text>

            <TouchableOpacity
              style={{marginLeft: moderateScale(10)}}
              onPress={() => setActive(!active)}>
              {active ? (
                <Filter style={{marginRight: moderateScale(12)}} />
              ) : (
                <FilterInactive style={{marginTop: moderateScale(-5)}} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          data={data}
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: moderateScale(10),
          }}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={{
                  marginTop: moderateScale(10),
                  padding: moderateScale(15),
                  borderRadius: moderateScale(10),
                  borderColor: '#F4E1B8',
                  borderWidth: moderateScale(1),
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
                    style={[
                      CommonStyles.rowstyle,
                      {marginBottom: moderateScale(20)},
                    ]}>
                    <Text
                      style={[
                        CommonStyles.HelveticaNeue13,
                        {
                          color: '#707070',
                          backgroundColor: '#F6F6F6',
                          padding: moderateScale(5),
                          paddingHorizontal: moderateScale(10),
                          borderRadius: moderateScale(10),
                        },
                      ]}>
                      {item.Orderid}
                    </Text>
                    <Text
                      style={[
                        CommonStyles.HelveticaNeue13,
                        {
                          color: '#ECBE10',
                          backgroundColor: '#E4C03426',
                          padding: moderateScale(5),
                          paddingHorizontal: moderateScale(10),
                          borderRadius: moderateScale(10),
                        },
                      ]}>
                      {`${DD(item.DeliveryCharge)}`}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: moderateScale(4),
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        width: '38%',
                        justifyContent: 'space-between',
                      }}>
                      <Text style={[CommonStyles.HelveticaNeue13]}>
                        {DD('orderDate&Time')}
                      </Text>
                      <Text style={[CommonStyles.HelveticaNeue13]}>:</Text>
                    </View>
                    <Text
                      style={[
                        CommonStyles.HelveticaNeue13,
                        {marginLeft: moderateScale(5)},
                      ]}>
                      {item.OrderDateTime}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: moderateScale(4),
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        width: '38%',
                        justifyContent: 'space-between',
                      }}>
                      <Text
                        style={[
                          CommonStyles.HelveticaNeue13,
                          {fontSize: moderateScale(12)},
                        ]}>
                        {DD('deliveryDate&Time')}
                      </Text>
                      <Text style={[CommonStyles.HelveticaNeue13]}>:</Text>
                    </View>
                    <Text
                      style={[
                        CommonStyles.HelveticaNeue13,
                        {marginLeft: moderateScale(5), color: '#CB8F00'},
                      ]}>
                      {item.DeliveryDate} {`${DD(item.DeliveryTimeSlot)}`}
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
