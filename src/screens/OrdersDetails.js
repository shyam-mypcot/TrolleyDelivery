import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Header from '../components/Header';
import CommonStyles from '../utils/CommonStyles';
import MapsWhitebg from '../svg/MapsWhitebg';
import CallOrangebg from '../svg/CallOrangebg';

const OrdersDetails = ({navigation, route}) => {
  const [selectedData, setSelectedData] = useState(route.params.item);
  console.log(selectedData, ' sghtugbub ..............');
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
      <Header title="Orders Details" />
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
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
                Order No.
              </Text>
              <Text style={[CommonStyles.HelveticaNeue16]}>Total :</Text>
            </View>
            <View style={[CommonStyles.rowstyle]}>
              <Text style={[CommonStyles.HelveticaNeue16]}>
                {selectedData.Orderid}
              </Text>
              <Text style={[CommonStyles.HelveticaNeue16, {color: '#F2C506'}]}>
                {selectedData.Total}
              </Text>
            </View>
            <View style={[CommonStyles.rowstyle]}>
            <View style={{flexDirection:'row',width:'42%',justifyContent:'space-between'}}>

              <Text style={[CommonStyles.HelveticaNeue16]}>
                Order Date & Time 
              </Text>
              <Text
                    style={[CommonStyles.HelveticaNeue16]}>
                    :
                  </Text>
                </View>
              <Text style={[CommonStyles.HelveticaNeue16]}>
                {selectedData.OrderDateTime}
              </Text>
            </View>
            <View style={[CommonStyles.rowstyle]}>
            <View style={{flexDirection:'row',width:'42%',justifyContent:'space-between'}}>

              <Text style={[CommonStyles.HelveticaNeue16]}>
                Delivery Date 
              </Text>
              <Text
                    style={[CommonStyles.HelveticaNeue16]}>
                    :
                  </Text>
                </View>
              <Text style={[CommonStyles.HelveticaNeue16]}>
                {selectedData.DeliveryDate}
              </Text>
            </View>
            <View style={[CommonStyles.rowstyle]}>
            <View style={{flexDirection:'row',width:'42%',justifyContent:'space-between'}}>

              <Text style={[CommonStyles.HelveticaNeue16]}>
                Delivery TimeSlot 
              </Text>
              <Text
                    style={[CommonStyles.HelveticaNeue16]}>
                    :
                  </Text>
                </View>
              <Text style={[CommonStyles.HelveticaNeue16]}>
                {selectedData.DeliveryTimeSlot}
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
                Customer Information
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
                    Customer Name
                  </Text>
                  <Text
                    style={[
                      CommonStyles.HelveticaNeue16,
                      {color: '#6F776B', marginTop: 4},
                    ]}>
                    Mobile Number
                  </Text>
                  <Text
                    style={[
                      CommonStyles.HelveticaNeue16,
                      {marginTop: 4, color: '#6F776B'},
                    ]}>
                    Address
                  </Text>
                  <Text
                    style={[
                      CommonStyles.HelveticaNeue16,
                      {marginTop: 4, color: '#6F776B'},
                    ]}>
                    City
                  </Text>
                  <Text
                    style={[
                      CommonStyles.HelveticaNeue16,
                      {marginTop: 4, color: '#6F776B'},
                    ]}>
                    Area
                  </Text>
                  <Text
                    style={[
                      CommonStyles.HelveticaNeue16,
                      {marginTop: 4, color: '#6F776B'},
                    ]}>
                    Location
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
                    {selectedData.Name}
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
                    {selectedData.City}
                  </Text>
                  <Text
                    style={[
                      CommonStyles.HelveticaNeue16,
                      {color: '#6F776B', marginTop: 4, marginLeft: 5},
                    ]}>
                    {selectedData.Area}
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
                      {color: '#6F776B', marginTop: 4, marginLeft: 5},
                    ]}>
                    {selectedData.Longitude}
                  </Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text></Text>
                  <CallOrangebg style={{height: 60, marginTop: 2, width: 60}} />
                  <Text></Text>
                  <Text></Text>
                  <Text></Text>
                  <MapsWhitebg style={{height: 60, width: 60}} />
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
                Payment
              </Text>
            </View>
            <View style={{padding: 10, paddingTop: 20}}>
              <View style={[CommonStyles.rowstyle]}>
              <View style={{flexDirection:'row',width:'37%',justifyContent:'space-between'}}>

                <Text
                  style={[CommonStyles.HelveticaNeue16, {color: '#6F776B'}]}>
                  Payment Mode 
                </Text>
                <Text
                    style={[CommonStyles.HelveticaNeue16, {color: '#6F776B'}]}>
                    :
                  </Text>
                </View>
                <Text
                  style={[CommonStyles.HelveticaNeue16, {color: '#6F776B'}]}>
                  {selectedData.PaymentMode}
                </Text>
              </View>
              <View style={[CommonStyles.rowstyle]}>
              <View style={{flexDirection:'row',width:'37%',justifyContent:'space-between'}}>

                <Text
                  style={[CommonStyles.HelveticaNeue16, {color: '#6F776B'}]}>
                  Payment Status 
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
                  {selectedData.PaymentStatus}
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
                Store Information
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
                    Store Name
                  </Text>
                  <Text
                    style={[CommonStyles.HelveticaNeue16, {color: '#6F776B'}]}>
                    :
                  </Text>
                </View>
                <Text
                  style={[CommonStyles.HelveticaNeue16, {color: '#6F776B'}]}>
                  {selectedData.StoreName}
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
                    Store Number
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
              <View style={{flexDirection:'row',width:'35%',justifyContent:'space-between'}}>

                <Text
                  style={[CommonStyles.HelveticaNeue16, {color: '#6F776B'}]}>
                  Address 
                </Text>
                <Text
                    style={[CommonStyles.HelveticaNeue16, {color: '#6F776B'}]}>
                    :
                  </Text>
                </View>
                <Text
                  style={[CommonStyles.HelveticaNeue16, {color: '#6F776B'}]}>
                  {selectedData.StoreAddress}
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
                    Store Name
                  </Text>
                  <Text
                    style={[CommonStyles.HelveticaNeue16, {color: '#6F776B'}]}>
                    :
                  </Text>
                </View>
                <Text
                  style={[CommonStyles.HelveticaNeue16, {color: '#6F776B'}]}>
                  {selectedData.StoreName}
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
                    Store Number
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
              <View style={{flexDirection:'row',width:'35%',justifyContent:'space-between'}}>

                <Text
                  style={[CommonStyles.HelveticaNeue16, {color: '#6F776B'}]}>
                  Address 
                </Text>
                <Text
                    style={[CommonStyles.HelveticaNeue16, {color: '#6F776B'}]}>
                    :
                  </Text>
                </View>
                <Text
                  style={[CommonStyles.HelveticaNeue16, {color: '#6F776B'}]}>
                  {selectedData.StoreAddress}
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
                Invoice
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#F2D847',
                padding: 10,
                paddingHorizontal: 40,
                borderRadius: 10,
              }}>
              <Text style={[CommonStyles.HelveticaNeue20, {color: '#ffffff'}]}>
                Verify
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  
});
export default OrdersDetails;
