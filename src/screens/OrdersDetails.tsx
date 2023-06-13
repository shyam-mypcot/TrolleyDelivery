import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  I18nManager,
  Platform,
  Linking,
} from 'react-native';
import Header from '../components/Header';
import CommonStyles from '../utils/CommonStyles';
import MapsWhitebg from '../svg/MapsWhitebg';
import CallOrangebg from '../svg/CallOrangebg';
import {useTranslation} from '../hooks/useTranslation';
import {moderateScale} from 'react-native-size-matters';

const OrdersDetails = ({navigation, route}) => {
  const {T} = useTranslation('DummyData');
  const openMap = () => {
    const scheme = Platform.select({
      ios: 'maps://0,0?q=',
      android: 'geo:0,0?q=',
    });
    const latLng = `${selectedData.Lattitude},${selectedData.Longitude}`;
    const label = 'Custom Label';
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });

    Linking.openURL(url);
  };
  const [selectedData, setSelectedData] = useState(route.params.item);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
      <Header title={T('orderDetails')} />
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={{padding: moderateScale(15), flex: 1}}>
          <View
            style={[
              {
                marginTop: moderateScale(10),
                padding: moderateScale(10),
                // paddingLeft: 20,
              },
              CommonStyles.boxShadow,
            ]}>
            <View style={[CommonStyles.rowstyle]}>
              <Text style={[CommonStyles.HelveticaNeue16, {color: '#6F776B'}]}>
                {T('orderNo')}.
              </Text>
              <Text style={[CommonStyles.HelveticaNeue16]}>{T('total')} :</Text>
            </View>
            <View style={[CommonStyles.rowstyle]}>
              <Text style={[CommonStyles.HelveticaNeue16]}>
                {selectedData.Orderid}
              </Text>
              <Text style={[CommonStyles.HelveticaNeue16, {color: '#F2C506'}]}>
                {`${T(selectedData.Total)}`}
              </Text>
            </View>
            <View style={[CommonStyles.rowstyle]}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '42%',
                  justifyContent: 'space-between',
                }}>
                <Text style={[CommonStyles.HelveticaNeue16]}>
                  {T('orderDate&Time')}
                </Text>
                <Text style={[CommonStyles.HelveticaNeue16]}>:</Text>
              </View>
              <Text style={[CommonStyles.HelveticaNeue16]}>
                {selectedData.OrderDateTime}
              </Text>
            </View>
            <View style={[CommonStyles.rowstyle]}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '42%',
                  justifyContent: 'space-between',
                }}>
                <Text style={[CommonStyles.HelveticaNeue16]}>
                  {T('deliveryDate')}
                </Text>
                <Text style={[CommonStyles.HelveticaNeue16]}>:</Text>
              </View>
              <Text style={[CommonStyles.HelveticaNeue16]}>
                {selectedData.DeliveryDate}
              </Text>
            </View>
            <View style={[CommonStyles.rowstyle]}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '42%',
                  justifyContent: 'space-between',
                }}>
                <Text style={[CommonStyles.HelveticaNeue16]}>
                  {T('deliveryTimeSlot')}
                </Text>
                <Text style={[CommonStyles.HelveticaNeue16]}>:</Text>
              </View>
              <Text style={[CommonStyles.HelveticaNeue16]}>
                {`${T(selectedData.DeliveryTimeSlot)}`}
              </Text>
            </View>
          </View>
          <View
            style={[
              {
                marginTop: moderateScale(10),
              },
              CommonStyles.boxShadow,
            ]}>
            <View style={styles.Card}>
              <Text style={[CommonStyles.HelveticaNeue20, {color: '#6F776B'}]}>
                {T('customerInformation')}
              </Text>
            </View>
            <View style={{padding: moderateScale(10,0.3)}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View style={{justifyContent: 'center'}}>
                  <Text
                    style={[
                      CommonStyles.HelveticaNeue16,
                      styles.GreenLabeltop4,
                    ]}>
                    {T('customerName')}
                  </Text>
                  <Text
                    style={[
                      CommonStyles.HelveticaNeue16,
                      styles.GreenLabeltop4,
                    ]}>
                    {T('mobileNumber')}
                  </Text>
                  <Text
                    style={[
                      CommonStyles.HelveticaNeue16,
                      styles.GreenLabeltop4,
                    ]}>
                    {T('address')}
                  </Text>
                  <Text
                    style={[
                      CommonStyles.HelveticaNeue16,
                      styles.GreenLabeltop4,
                    ]}>
                    {T('city')}
                  </Text>
                  <Text
                    style={[
                      CommonStyles.HelveticaNeue16,
                      styles.GreenLabeltop4,
                    ]}>
                    {T('area')}
                  </Text>
                  <Text
                    style={[
                      CommonStyles.HelveticaNeue16,
                      styles.GreenLabeltop4,
                    ]}>
                    {T('location')}
                  </Text>
                  <Text
                    style={[
                      CommonStyles.HelveticaNeue16,
                      styles.GreenLabeltop4,
                    ]}
                  />
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginHorizontal: moderateScale(5),
                  }}>
                  <Text style={[CommonStyles.HelveticaNeue16]}>:</Text>
                  <Text
                    style={[
                      CommonStyles.HelveticaNeue16,
                      styles.GreenLabeltop2,
                    ]}>
                    :
                  </Text>
                  <Text
                    style={[
                      CommonStyles.HelveticaNeue16,
                      styles.GreenLabeltop2,
                    ]}>
                    :
                  </Text>
                  <Text
                    style={[
                      CommonStyles.HelveticaNeue16,
                      styles.GreenLabeltop2,
                    ]}
                  />
                  <Text
                    style={[
                      CommonStyles.HelveticaNeue16,
                      styles.GreenLabeltop2,
                    ]}
                  />
                  <Text
                    style={[
                      CommonStyles.HelveticaNeue16,
                      styles.GreenLabeltop2,
                    ]}
                  />
                  <Text
                    style={[
                      CommonStyles.HelveticaNeue16,
                      styles.GreenLabeltop2,
                    ]}
                  />
                </View>
                <View style={{justifyContent: 'center'}}>
                  <Text
                    style={[
                      CommonStyles.HelveticaNeue16,
                      styles.GreenLabeltop4left5,
                    ]}>
                    {`${T(selectedData.Name)}`}
                  </Text>
                  <Text
                    style={[
                      CommonStyles.HelveticaNeue16,
                      styles.GreenLabeltop4left5,
                    ]}>
                    {selectedData.MobileNumber}
                  </Text>
                  <Text />
                  <Text
                    style={[
                      CommonStyles.HelveticaNeue16,
                      styles.GreenLabeltop4left5,
                    ]}>
                    {`${T(selectedData.City)}`}
                  </Text>
                  <Text
                    style={[
                      CommonStyles.HelveticaNeue16,
                      styles.GreenLabeltop4left5,
                    ]}>
                    {`${T(selectedData.Area)}`}
                  </Text>
                  <Text
                    style={[
                      CommonStyles.HelveticaNeue16,
                      styles.GreenLabeltop4left5,
                    ]}>
                    {selectedData.Lattitude}
                  </Text>
                  <Text
                    style={[
                      CommonStyles.HelveticaNeue16,
                      styles.GreenLabeltop4left5,

                      {
                        textAlign: 'left',
                      },
                    ]}>
                    {selectedData.Longitude}
                  </Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text />
                  <TouchableOpacity
                    onPress={() => {
                      Linking.openURL(`tel:${selectedData.MobileNumber}`);
                    }}>
                    <CallOrangebg
                      style={{
                        height: moderateScale(60),
                        marginTop: 2,
                        width: moderateScale(60),
                      }}
                    />
                  </TouchableOpacity>
                  <Text />
                  <Text />
                  <Text />
                  <TouchableOpacity onPress={() => openMap()}>
                    <MapsWhitebg
                      style={{
                        height: moderateScale(60),
                        width: moderateScale(60),
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View
            style={[
              {
                marginTop: moderateScale(10),
              },
              CommonStyles.boxShadow,
            ]}>
            <View
              style={styles.Card}>
              <Text style={[CommonStyles.HelveticaNeue20, {color: '#6F776B'}]}>
                {T('payment')}
              </Text>
            </View>
            <View
              style={{
                padding: moderateScale(10),
                paddingTop: moderateScale(20),
              }}>
              <View style={[CommonStyles.rowstyle]}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '37%',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={[CommonStyles.HelveticaNeue16, {color: '#6F776B'}]}>
                    {T('paymentMode')}
                  </Text>
                  <Text
                    style={[CommonStyles.HelveticaNeue16, {color: '#6F776B'}]}>
                    :
                  </Text>
                </View>
                <Text
                  style={[CommonStyles.HelveticaNeue16, {color: '#6F776B'}]}>
                  {T(selectedData.PaymentMode)}
                </Text>
              </View>
              <View style={[CommonStyles.rowstyle]}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '37%',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={[CommonStyles.HelveticaNeue16, {color: '#6F776B'}]}>
                    {T('paymentStatus')}
                  </Text>
                  <Text
                    style={[CommonStyles.HelveticaNeue16, {color: '#6F776B'}]}>
                    :
                  </Text>
                </View>
                <Text
                  style={[
                    CommonStyles.HelveticaNeue16,
                    {
                      color:
                        selectedData.PaymentStatus == 'Paid'
                          ? '#2B7908'
                          : '#FD5B1F',
                    },
                  ]}>
                  {T(selectedData.PaymentStatus)}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={[
              {
                marginTop: moderateScale(10),
              },
              CommonStyles.boxShadow,
            ]}>
            <View
              style={styles.Card}>
              <Text style={[CommonStyles.HelveticaNeue20, {color: '#6F776B'}]}>
                {T('storeInformation')}
              </Text>
            </View>
            <View
              style={{
                padding: moderateScale(10),
                paddingTop: moderateScale(20),
                borderBottomColor: '#F4CB5E',
                borderBottomWidth: moderateScale(1),
              }}>
              <View style={[CommonStyles.rowstyle]}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '35%',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={[CommonStyles.HelveticaNeue16, {color: '#6F776B'}]}>
                    {T('storeName')}
                  </Text>
                  <Text
                    style={[CommonStyles.HelveticaNeue16, {color: '#6F776B'}]}>
                    :
                  </Text>
                </View>
                <Text
                  style={[CommonStyles.HelveticaNeue16, {color: '#6F776B'}]}>
                  {T(selectedData.StoreName)}
                </Text>
              </View>
              <View style={[CommonStyles.rowstyle]}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '35%',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={[CommonStyles.HelveticaNeue16, {color: '#6F776B'}]}>
                    {T('storeNumber')}
                  </Text>
                  <Text
                    style={[CommonStyles.HelveticaNeue16, {color: '#6F776B'}]}>
                    :
                  </Text>
                </View>
                <Text
                  style={[CommonStyles.HelveticaNeue16, {color: '#6F776B'}]}>
                  {selectedData.StoreNumber}
                </Text>
              </View>
              <View style={[CommonStyles.rowstyle]}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '35%',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={[CommonStyles.HelveticaNeue16, {color: '#6F776B'}]}>
                    {T('address')}
                  </Text>
                  <Text
                    style={[CommonStyles.HelveticaNeue16, {color: '#6F776B'}]}>
                    :
                  </Text>
                </View>
                <Text
                  style={[CommonStyles.HelveticaNeue16, {color: '#6F776B'}]}>
                  {T(selectedData.StoreAddress)}
                </Text>
              </View>
            </View>
            <View style={{padding: moderateScale(10)}}>
              <View style={[CommonStyles.rowstyle]}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '35%',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={[CommonStyles.HelveticaNeue16, {color: '#6F776B'}]}>
                    {T('storeName')}
                  </Text>
                  <Text
                    style={[CommonStyles.HelveticaNeue16, {color: '#6F776B'}]}>
                    :
                  </Text>
                </View>
                <Text
                  style={[CommonStyles.HelveticaNeue16, {color: '#6F776B'}]}>
                  {T(selectedData.StoreName)}
                </Text>
              </View>
              <View style={[CommonStyles.rowstyle]}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '35%',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={[CommonStyles.HelveticaNeue16, {color: '#6F776B'}]}>
                    {T('storeNumber')}
                  </Text>
                  <Text
                    style={[CommonStyles.HelveticaNeue16, {color: '#6F776B'}]}>
                    :
                  </Text>
                </View>
                <Text
                  style={[CommonStyles.HelveticaNeue16, {color: '#6F776B'}]}>
                  {selectedData.StoreNumber}
                </Text>
              </View>
              <View style={[CommonStyles.rowstyle]}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '35%',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={[CommonStyles.HelveticaNeue16, {color: '#6F776B'}]}>
                    {T('address')}
                  </Text>
                  <Text
                    style={[CommonStyles.HelveticaNeue16, {color: '#6F776B'}]}>
                    :
                  </Text>
                </View>
                <Text
                  style={[CommonStyles.HelveticaNeue16, {color: '#6F776B'}]}>
                  {T(selectedData.StoreAddress)}
                </Text>
              </View>
            </View>
          </View>
          <View style={[CommonStyles.rowstyle, {justifyContent:'space-evenly',paddingVertical:moderateScale(30)}]}>
            <TouchableOpacity
              style={{
                backgroundColor: '#F2D847',
                padding: moderateScale(10),
                paddingHorizontal: moderateScale(35),
                borderRadius: moderateScale(10),
              }}>
              <Text style={[CommonStyles.HelveticaNeue20, {color: '#ffffff'}]}>
                {T('invoice')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('OtpCode');
              }}
              style={{
                backgroundColor: '#F2D847',
                padding: moderateScale(10),
                paddingHorizontal: moderateScale(40),
                borderRadius: moderateScale(10),
              }}>
              <Text style={[CommonStyles.HelveticaNeue20, {color: '#ffffff'}]}>
                {T('verify')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  GreenLabeltop2: {color: '#6F776B', marginTop: moderateScale(2)},
  GreenLabeltop4: {color: '#6F776B', marginTop: moderateScale(4)},
  GreenLabeltop4left5: {
    color: '#6F776B',
    marginTop: moderateScale(4),
    marginLeft: moderateScale(5),
  },
  Card: {
    paddingVertical: moderateScale(15),
    paddingHorizontal: moderateScale(10),
    borderBottomColor: '#F4CB5E',
    borderBottomWidth: moderateScale(2),
  },
});
export default OrdersDetails;
