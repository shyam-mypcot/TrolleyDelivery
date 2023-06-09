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
        <View style={{padding: 15, flex: 1}}>
          <View
            style={[
              {
                marginTop: 10,
                padding: 10,
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
                marginTop: 10,
              },
              CommonStyles.boxShadow,
            ]}>
            <View
              style={{
                paddingVertical: 15,
                paddingHorizontal: 10,
                borderBottomColor: '#F4CB5E',
                borderBottomWidth: 2,
              }}>
              <Text style={[CommonStyles.HelveticaNeue20, {color: '#6F776B'}]}>
                {T('customerInformation')}
              </Text>
            </View>
            <View style={{padding: 10}}>
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
                      {color: '#6F776B', marginTop: 4},
                    ]}>
                    {T('customerName')}
                  </Text>
                  <Text
                    style={[
                      CommonStyles.HelveticaNeue16,
                      {color: '#6F776B', marginTop: 4},
                    ]}>
                    {T('mobileNumber')}
                  </Text>
                  <Text
                    style={[
                      CommonStyles.HelveticaNeue16,
                      {marginTop: 4, color: '#6F776B'},
                    ]}>
                    {T('address')}
                  </Text>
                  <Text
                    style={[
                      CommonStyles.HelveticaNeue16,
                      {marginTop: 4, color: '#6F776B'},
                    ]}>
                    {T('city')}
                  </Text>
                  <Text
                    style={[
                      CommonStyles.HelveticaNeue16,
                      {marginTop: 4, color: '#6F776B'},
                    ]}>
                    {T('area')}
                  </Text>
                  <Text
                    style={[
                      CommonStyles.HelveticaNeue16,
                      {marginTop: 4, color: '#6F776B'},
                    ]}>
                    {T('location')}
                  </Text>
                  <Text
                    style={[
                      CommonStyles.HelveticaNeue16,
                      {marginTop: 4, color: '#6F776B'},
                    ]}></Text>
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginHorizontal: 5,
                  }}>
                  <Text
                    style={[
                      CommonStyles.HelveticaNeue16,
                      {color: '#6F776B', marginTop: 2},
                    ]}>
                    :
                  </Text>
                  <Text
                    style={[
                      CommonStyles.HelveticaNeue16,
                      {color: '#6F776B', marginTop: 2},
                    ]}>
                    :
                  </Text>
                  <Text
                    style={[
                      CommonStyles.HelveticaNeue16,
                      {color: '#6F776B', marginTop: 2},
                    ]}>
                    :
                  </Text>
                  <Text
                    style={[
                      CommonStyles.HelveticaNeue16,
                      {marginTop: 2, color: '#6F776B'},
                    ]}></Text>
                  <Text
                    style={[
                      CommonStyles.HelveticaNeue16,
                      {marginTop: 2, color: '#6F776B'},
                    ]}></Text>
                  <Text
                    style={[
                      CommonStyles.HelveticaNeue16,
                      {marginTop: 2, color: '#6F776B'},
                    ]}></Text>
                  <Text
                    style={[
                      CommonStyles.HelveticaNeue16,
                      {marginTop: 2, color: '#6F776B'},
                    ]}></Text>
                </View>
                <View style={{justifyContent: 'center'}}>
                  <Text
                    style={[
                      CommonStyles.HelveticaNeue16,
                      {color: '#6F776B', marginTop: 4, marginLeft: 5},
                    ]}>
                    {`${T(selectedData.Name)}`}
                  </Text>
                  <Text
                    style={[
                      CommonStyles.HelveticaNeue16,
                      {color: '#6F776B', marginTop: 4, marginLeft: 5},
                    ]}>
                    {selectedData.MobileNumber}
                  </Text>
                  <Text></Text>
                  <Text
                    style={[
                      CommonStyles.HelveticaNeue16,
                      {color: '#6F776B', marginTop: 4, marginLeft: 5},
                    ]}>
                    {`${T(selectedData.City)}`}
                  </Text>
                  <Text
                    style={[
                      CommonStyles.HelveticaNeue16,
                      {color: '#6F776B', marginTop: 4, marginLeft: 5},
                    ]}>
                    {`${T(selectedData.Area)}`}
                  </Text>
                  <Text
                    style={[
                      CommonStyles.HelveticaNeue16,
                      {color: '#6F776B', marginTop: 4, marginLeft: 5},
                    ]}>
                    {selectedData.Lattitude}
                  </Text>
                  <Text
                    style={[
                      CommonStyles.HelveticaNeue16,
                      {
                        color: '#6F776B',
                        marginTop: 4,
                        marginLeft: 5,
                        textAlign: 'left',
                      },
                    ]}>
                    {selectedData.Longitude}
                  </Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text></Text>
                  <TouchableOpacity onPress={()=>{Linking.openURL(`tel:${selectedData.MobileNumber}`)}}>
                  <CallOrangebg style={{height: 60, marginTop: 2, width: 60}} />
                  </TouchableOpacity>
                  <Text></Text>
                  <Text></Text>
                  <Text></Text>
                  <TouchableOpacity onPress={()=>openMap()}>
                  <MapsWhitebg style={{height: 60, width: 60}} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View
            style={[
              {
                marginTop: 10,
              },
              CommonStyles.boxShadow,
            ]}>
            <View
              style={{
                paddingVertical: 15,
                paddingHorizontal: 10,
                borderBottomColor: '#F4CB5E',
                borderBottomWidth: 2,
              }}>
              <Text style={[CommonStyles.HelveticaNeue20, {color: '#6F776B'}]}>
                {T('payment')}
              </Text>
            </View>
            <View style={{padding: 10, paddingTop: 20}}>
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
                marginTop: 10,
              },
              CommonStyles.boxShadow,
            ]}>
            <View
              style={{
                paddingVertical: 15,
                paddingHorizontal: 10,
                borderBottomColor: '#F4CB5E',
                borderBottomWidth: 2,
              }}>
              <Text style={[CommonStyles.HelveticaNeue20, {color: '#6F776B'}]}>
                {T('storeInformation')}
              </Text>
            </View>
            <View
              style={{
                padding: 10,
                paddingTop: 20,
                borderBottomColor: '#F4CB5E',
                borderBottomWidth: 1,
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
            <View style={{padding: 10}}>
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
          <View style={[CommonStyles.rowstyle, {margin: 40, marginTop: 40}]}>
            <TouchableOpacity
              style={{
                backgroundColor: '#F2D847',
                padding: 10,
                paddingHorizontal: 35,
                borderRadius: 10,
              }}>
              <Text style={[CommonStyles.HelveticaNeue20, {color: '#ffffff'}]}>
                {T('invoice')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={()=>{navigation.navigate('OtpCode')}}
              style={{
                backgroundColor: '#F2D847',
                padding: 10,
                paddingHorizontal: 40,
                borderRadius: 10,
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
const styles = StyleSheet.create({});
export default OrdersDetails;
