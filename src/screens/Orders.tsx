import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  FlatList,
} from 'react-native';
import Header from '../components/Header';
import CommonStyles from '../utils/CommonStyles';
import Filter from '../svg/Filter';
import FilterInactive from '../svg/FilterInactive';
import data from '../components/common';
import Modal from 'react-native-modal';
import CheckBox from '@react-native-community/checkbox';
import RadioButton from '../components/RadioButton';
import Calender from '../svg/Calender';
import Clock from '../svg/Clock';
import {
  DateTimePickerAndroid,
} from '@react-native-community/datetimepicker';
import moment from 'moment';
import { Dropdown } from 'react-native-element-dropdown';
import { useTranslation } from '../hooks/useTranslation';
import { moderateScale } from 'react-native-size-matters';

const Orders = ({ navigation, route }) => {
  const { T } = useTranslation('FilterModal');
  const { T: DD } = useTranslation('DummyData');

  const [active, setActive] = useState(false);
  const currentDate = new Date();
  const [date, setDate] = useState(moment(currentDate).format('YYYY-MM-DD'));
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: '11:00 AM  - 01:00 PM', value: '11:00 AM  - 01:00 PM' },
    { label: '01:00 PM  - 03:00 PM', value: '01:00 PM  - 03:00 PM' },
    { label: '03:00 PM  - 05:00 PM', value: '03:00 PM  - 05:00 PM' },
    { label: '05:00 PM  - 07:00 PM', value: '05:00 PM  - 07:00 PM' },
  ]);
  const [PaymentStatusdata, setPaymentStatusData] = useState([
    {
      key: 'Pending ',
      text: T('pending'),
    },
    {
      key: 'Paid',
      text: T('paid'),
    },
    {
      key: 'All',
      text: T('all'),
    },
  ]);
  const [PaymentStatus, setPaymentStatus] = useState(null);
  const [CustomerType, setCustomerType] = useState(null);

  const [CustomerTypeData, setCustomerTypeData] = useState([
    {
      key: 'VIP   ',
      text: T('vip'),
    },
    {
      key: 'Normal',
      text: T('normal'),
    },
    {
      key: 'All',
      text: T('all'),
    },
  ]);
  const onChange = ( selectedDate) => {
    const currentDate = selectedDate;
    setDate(moment(currentDate).format('YYYY-MM-DD'));
    console.log(moment(currentDate).format('YYYY-MM-DD'), 'gjy');
  };
  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: currentDate,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };
  // const getData = async () => {
  //   try {
  //     const response = await ApiServices({
  //       data: formData,
  //       url: EndPoints.VerifyDeliveryCode,
  //       restHeader: {
  //         'X-Access-Token': token,
  //       },
  //     });

  //     console.log('90909090990 response data', response.data);
  //     if (response.status === 200) {
  //       if (response.data.success === '1') {
  //         // navigation.navigate('ResetPassword', {
  //         //   number: route.params.number,
  //         //   Otp: otpNumber,
  //         // });
  //         Toast.show(response.data.message, Toast.LONG);
  //       } else if (response.data.success === '0') {
  //         setActive(true)
  //         Toast.show(response.data.message, Toast.LONG);
  //       }
  //     } else {
  //       Toast.show('Please try again after some time', Toast.LONG);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoader(false);
  //   }
  // })
  const showDatepicker = () => {
    showMode('date');
  };
  const SetCustomerType = (statusValue) => {
    setCustomerType(statusValue);
  };
  const SetPaymentStatus = (statusValue) => {
    setPaymentStatus(statusValue);
  };
  return (
    <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
      <Header title={route.params.title} />
      <View style={{ padding: moderateScale(10), flex: 1 }}>
        <View
          style={{
            padding: moderateScale(10),
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={[CommonStyles.HelveticaNeue16Green]}>
              {T('totalOrder')} :
            </Text>
            <Text style={[CommonStyles.HelveticaNeue16Green, { color: '#000000BF', marginHorizontal: moderateScale(5) }]}>
              {data.length}
            </Text>
          </View>
          <TouchableOpacity onPress={() => setActive(!active)}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={[CommonStyles.HelveticaNeue16Green, { marginRight: moderateScale(10) }]}>
                {T('filter')}
              </Text>

              {active ? (
                <Filter style={{ marginRight: moderateScale(12) }} />
              ) : (
                <FilterInactive style={{ marginTop: moderateScale(-5) }} />
              )}
            </View>
          </TouchableOpacity>
        </View>

        <FlatList
          data={data}
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 10 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={{
                  marginTop: moderateScale(10),
                  padding: moderateScale(15),
                  borderRadius: moderateScale(10),
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
                onPress={() => {
                  navigation.navigate('OrdersDetails', { item });
                }}>
                {/* <View style={{}}>
                  <View style={[CommonStyles.rowstyle]}>
                    <Text style={CommonStyles.HelveticaNeue16Green}>
                      {DD('orderNo')} .:
                    </Text>
                    <Text
                      style={[
                        CommonStyles.HelveticaNeue16Green,
                        {color: '#707070'},
                      ]}>
                      {DD('total')} :
                    </Text>
                  </View>
                  <View style={[CommonStyles.rowstyle]}>
                    <Text
                      style={[
                        CommonStyles.HelveticaNeue16Green,
                        {color: '#707070'},
                      ]}>
                      {item.Orderid}
                    </Text>
                    <Text
                      style={[
                        CommonStyles.HelveticaNeue16Green,
                        {color: '#F2C506'},
                      ]}>
                     { `${DD(item.Total)}`}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 4,
                    }}>
                    <Text style={[CommonStyles.HelveticaNeue13]}>
                      {DD('orderDate&Time')} :
                    </Text>
                    <Text
                      style={[CommonStyles.HelveticaNeue13, {marginLeft: 10}]}>
                      {item.OrderDateTime}
                    </Text>
                  </View>
                  <View style={[CommonStyles.rowstyle, {marginBottom: 2}]}>
                    <HorizontalLine style={{marginTop: 5}} />
                    <Text
                      style={[
                        CommonStyles.HelveticaNeue16Green,
                        {color: '#707070'},
                      ]}>
                      {DD('delivery')} :
                    </Text>
                  </View>
                  <View style={[CommonStyles.rowstyle]}>
                    <View style={{alignItems: 'center'}}>
                      <Text style={[CommonStyles.HelveticaNeue13]}>
                        {DD('paymentMode')} :
                      </Text>
                      <Text
                        style={[CommonStyles.HelveticaNeue16, {marginTop: 2}]}>
                        { `${DD(item.PaymentMode)}`}
                      </Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                      <Text style={[CommonStyles.HelveticaNeue13]}>
                       {DD('paymentStatus')} :
                      </Text>
                      <Text
                        style={[
                          CommonStyles.HelveticaNeue16Green,
                          {
                            color:
                              item.PaymentStatus == 'Paid'
                                ? '#2B7908'
                                : '#FD5B1F',
                            marginTop: 2,
                          },
                        ]}>
                        { `${DD(item.PaymentStatus)}`}
                      </Text>
                    </View>
                    <View style={{alignItems: 'flex-end'}}>
                      <Text
                        style={[
                          CommonStyles.HelveticaNeue13,
                          {color: '#723D16'},
                        ]}>
                        {item.DeliveryDate}
                      </Text>
                      <Text
                        style={[
                          CommonStyles.HelveticaNeue13,
                          {color: '#723D16', marginTop: 2},
                        ]}>
                        { `${DD(item.DeliveryTimeSlot)}`}
                      </Text>
                    </View>
                  </View>
                </View> */}

                <View style={{}}>
                  <View style={[CommonStyles.rowstyle]}>
                    <Text
                      style={[
                        CommonStyles.HelveticaNeue16Green,
                        {
                          color: '#707070',
                          backgroundColor: '#F6F6F6',
                          padding: moderateScale(5),
                          borderRadius: moderateScale(10),
                        },
                      ]}>
                      {item.Orderid}
                    </Text>
                    <Text
                      style={[
                        CommonStyles.HelveticaNeue16Green,
                        {
                          color:
                            item.PaymentStatus == 'Paid'
                              ? '#2B7908'
                              : '#FD5B1F',
                          marginHorizontal: moderateScale(5),
                          backgroundColor:
                            item.PaymentStatus == 'Paid'
                              ? '#F4F8F3'
                              : '#FFF7F4',
                          padding: moderateScale(5),
                          paddingHorizontal: moderateScale(10),
                          borderRadius: moderateScale(10),
                        },
                      ]}>
                      {`${DD(item.PaymentStatus)}`}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: moderateScale(10),
                    }}>
                    <Text style={[CommonStyles.HelveticaNeue13]}>
                      {DD('orderDate&Time')}    :
                    </Text>
                    <Text
                      style={[CommonStyles.HelveticaNeue13, { marginLeft: moderateScale(10) }]}>
                      {item.OrderDateTime}
                    </Text>
                  </View>
                  <View
                    style={[
                      {
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: moderateScale(5),
                      },
                    ]}>
                    <Text style={[CommonStyles.HelveticaNeue13]}>
                      {DD('deliveryDate&Time')} :
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginHorizontal: moderateScale(5),
                      }}>
                      <Text style={[CommonStyles.HelveticaNeue13,{fontSize:moderateScale(12)}]}>
                          {item.DeliveryDate}
                      </Text>
                      <Text
                        style={[
                          CommonStyles.HelveticaNeue13,
                          { marginHorizontal: 5 ,fontSize:moderateScale(12)},
                        ]}>
                        {`${DD(item.DeliveryTimeSlot)}`}
                      </Text>
                    </View>
                  </View>
                  <View style={[CommonStyles.rowstyle, { gap: moderateScale(10) }]}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: moderateScale(5),
                      }}>
                      <Text
                        style={[
                          CommonStyles.HelveticaNeue13,
                          { color: '#000000BF' },
                        ]}>
                        {DD('paymentMode')} :
                      </Text>
                      <Text
                        style={[
                          CommonStyles.HelveticaNeue16,
                          { color: '#000', marginHorizontal: moderateScale(2) },
                        ]}>
                        {`${DD(item.PaymentMode)}`}
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: moderateScale(5),
                      }}>
                      <Text
                        style={[
                          CommonStyles.HelveticaNeue16Green,
                          { color: '#000000BF' },
                        ]}>
                        {DD('total')} :
                      </Text>
                      <Text
                        style={[
                          CommonStyles.HelveticaNeue16Green,
                          { color: '#ECBE10', marginHorizontal: moderateScale(2) },
                        ]}>
                        {`${DD(item.Total)}`}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <Modal
        isVisible={active}
        onBackdropPress={() => {
          setActive(false);
        }}
        style={{ margin: 0, flex: 1, justifyContent: 'flex-end' }}>
        <View
          style={{
            backgroundColor: '#ffffff',
            paddingHorizontal: moderateScale(20),
            paddingVertical: moderateScale(10),
          }}>
          <Text style={[CommonStyles.HelveticaNeue13, { color: '#6F776B' }]}>
            {T('paymentStatus')}
          </Text>
          <View
            style={{ width: '80%', marginVertical: moderateScale(10), marginHorizontal: moderateScale(15) }}>
            <RadioButton
              RadioData={PaymentStatusdata}
              onHandleClick={SetPaymentStatus}
            />
          </View>
          <Text style={[CommonStyles.HelveticaNeue13, { color: '#6F776B' }]}>
            {T('cutomerType')}
          </Text>
          <View
            style={{ width: '80%', marginVertical: moderateScale(10), marginHorizontal: moderateScale(15) }}>
            <RadioButton
              RadioData={CustomerTypeData}
              onHandleClick={SetCustomerType}
            />
          </View>
          <TouchableOpacity
            onPress={showDatepicker}
            style={{ marginVertical: moderateScale(10) }}>
            <View style={{ flexDirection: 'row' }}>
              <View
                style={{
                  width: '90%',
                  paddingBottom: moderateScale(5),
                  borderBottomWidth: 1,
                  borderBottomColor: '#D8CFCF',
                }}>
                <Text
                  style={[CommonStyles.HelveticaNeue13, { color: '#6F776B' }]}>
                  {T('deliveryDate')}
                </Text>
                <Text
                  style={[
                    CommonStyles.HelveticaNeue13,
                    { color: '#6F776B', marginTop: moderateScale(10), textAlign: 'left' },
                  ]}>
                  {date}
                </Text>
              </View>
              <View style={{ justifyContent: 'center' }}>
                <Calender style={{ height: moderateScale(2), width: moderateScale(2) }} />
              </View>
            </View>
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', marginTop: moderateScale(10) }}>
            <View
              style={{
                width: '90%',
              }}>
              <Text style={[CommonStyles.HelveticaNeue13, { color: '#6F776B' }]}>
                {T('selectTimeSlot')}
              </Text>

              <Dropdown
                style={[styles.dropdown]}
                placeholderStyle={[CommonStyles.HelveticaNeue16Green]}
                selectedTextStyle={[CommonStyles.HelveticaNeue16Green]}
                itemTextStyle={[CommonStyles.HelveticaNeue16Green, { margin: 0 }]}
                itemContainerStyle={{ paddingVertical: 0 }}
                data={items}
                maxHeight={moderateScale(90)}
                labelField="label"
                valueField="value"
                placeholder={T('selectItem')}
                value={value}
                onChange={item => {
                  setValue(item.value);
                }}
              />
            </View>
            <View style={{ justifyContent: 'flex-end', marginBottom: moderateScale(10) }}>
              <Clock />
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: moderateScale(35),
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#F2D847',
                padding: moderateScale(10),
                paddingHorizontal: moderateScale(35),
                borderRadius: moderateScale(10),
              }}
              onPress={() => {
                setActive(false);
                console.log(PaymentStatus, CustomerType);
              }}>
              <Text style={[CommonStyles.HelveticaNeue20, { color: '#ffffff' }]}>
                {T('apply')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  dropdown: {
    height: moderateScale(40),
    borderColor: '#D8CFCF',
    borderBottomWidth: moderateScale(1),
    paddingHorizontal: moderateScale(8),
  },
});

export default Orders;
