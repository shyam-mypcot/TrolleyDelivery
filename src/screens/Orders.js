import React, {useEffect, useState} from 'react';
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
import HorizontalLine from '../svg/HorizontalLine';
import data from '../components/common';
import Modal from 'react-native-modal';
import CheckBox from '@react-native-community/checkbox';
import RadioButton from '../components/RadioButton';
import Calender from '../svg/Calender';
import Clock from '../svg/Clock';
import {
  DateTimePicker,
  DateTimePickerAndroid,
} from '@react-native-community/datetimepicker';
import moment from 'moment';
import {Dropdown} from 'react-native-element-dropdown';
const Orders = ({navigation}) => {
  const [active, setActive] = useState(false);
  const currentDate = new Date();
  const [date, setDate] = useState(moment(currentDate).format('YYYY-MM-DD'));
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: '11:00 AM  - 01:00 PM', value: '11:00 AM  - 01:00 PM'},
    {label: '01:00 PM  - 03:00 PM', value: '01:00 PM  - 03:00 PM'},
    {label: '03:00 PM  - 05:00 PM', value: '03:00 PM  - 05:00 PM'},
    {label: '05:00 PM  - 07:00 PM', value: '05:00 PM  - 07:00 PM'},
  ]);
  const [PaymentStatusdata, setPaymentStatusData] = useState([
    {
      key: 'Pending ',
      text: 'Pending ',
    },
    {
      key: 'Paid',
      text: 'Paid',
    },
    {
      key: 'All',
      text: 'All',
    },
  ]);
  const [PaymentStatus, setPaymentStatus] = useState(null);
  const [CustomerType, setCustomerType] = useState(null);

  const [CustomerTypeData, setCustomerTypeData] = useState([
    {
      key: 'VIP   ',
      text: 'VIP   ',
    },
    {
      key: 'Normal',
      text: 'Normal',
    },
    {
      key: 'All',
      text: 'All',
    },
  ]);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(moment(currentDate).format('YYYY-MM-DD'));
    console.log(moment(currentDate).format('YYYY-MM-DD'), 'gjy');
  };
  const showMode = currentMode => {
    DateTimePickerAndroid.open({
      value: currentDate,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };
  const showDatepicker = () => {
    showMode('date');
  };
  const SetCustomerType = statusValue => {
    console.log('nbbl uug uguu g', statusValue);
    setCustomerType(statusValue);
  };
  const SetPaymentStatus = statusValue => {
    setPaymentStatus(statusValue);
  };
  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <Header title="Assigned Orders" />
      <View style={{padding: 10, flex: 1}}>
        <View
          style={{
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={CommonStyles.HelveticaNeue16Green}>
            Total Orders : {data.length}
          </Text>
          <TouchableOpacity onPress={() => setActive(!active)}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={[CommonStyles.HelveticaNeue16Green, {marginRight: 10}]}>
                Filter
              </Text>

              {active ? (
                <Filter style={{marginRight: 12}} />
              ) : (
                <FilterInactive style={{marginTop: -5}} />
              )}
            </View>
          </TouchableOpacity>
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
                onPress={() => {
                  navigation.navigate('OrdersDetails', {item});
                }}>
                <View style={{}}>
                  <View style={[CommonStyles.rowstyle]}>
                    <Text style={CommonStyles.HelveticaNeue16Green}>
                      Order No.:
                    </Text>
                    <Text
                      style={[
                        CommonStyles.HelveticaNeue16Green,
                        {color: '#707070'},
                      ]}>
                      Total :
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
                      {item.Total}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 4,
                    }}>
                    <Text style={[CommonStyles.HelveticaNeue13]}>
                      Order Date & Time :
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
                      Delivery :
                    </Text>
                  </View>
                  <View style={[CommonStyles.rowstyle]}>
                    <View style={{alignItems: 'center'}}>
                      <Text style={[CommonStyles.HelveticaNeue13]}>
                        Payment Mode :
                      </Text>
                      <Text
                        style={[CommonStyles.HelveticaNeue16, {marginTop: 2}]}>
                        {item.PaymentMode}
                      </Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                      <Text style={[CommonStyles.HelveticaNeue13]}>
                        Payment Status :
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
                        {item.PaymentStatus}
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
                        {item.DeliveryTimeSlot}
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
        style={{margin: 0, flex: 1, justifyContent: 'flex-end'}}>
        <View
          style={{
            backgroundColor: '#ffffff',
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}>
          <Text style={[CommonStyles.HelveticaNeue13, {color: '#6F776B'}]}>
            Payment Status :
          </Text>
          <View
            style={{width: '80%', marginVertical: 10, marginHorizontal: 15}}>
            <RadioButton
              RadioData={PaymentStatusdata}
              onHandleClick={SetPaymentStatus}
            />
          </View>
          <Text style={[CommonStyles.HelveticaNeue13, {color: '#6F776B'}]}>
            Customer Type :
          </Text>
          <View
            style={{width: '80%', marginVertical: 10, marginHorizontal: 15}}>
            <RadioButton
              RadioData={CustomerTypeData}
              onHandleClick={SetCustomerType}
            />
          </View>
          <TouchableOpacity onPress={showDatepicker} style={{marginVertical: 10,}}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: '90%',
                  paddingBottom: 5,
                  borderBottomWidth: 1,
                  borderBottomColor: '#D8CFCF',
                }}>
                <Text
                  style={[CommonStyles.HelveticaNeue13, {color: '#6F776B'}]}>
                  Delivery Date
                </Text>
                <Text
                  style={[
                    CommonStyles.HelveticaNeue13,
                    {color: '#6F776B', marginTop: 10},
                  ]}>
                  {date}
                </Text>
              </View>
              <View style={{justifyContent:'center'}}>
              <Calender />
              </View>
            </View>
          </TouchableOpacity>

          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View
              style={{
                width: '90%',
              }}>
              <Text style={[CommonStyles.HelveticaNeue13, {color: '#6F776B'}]}>
                Select Time Slot
              </Text>

              <Dropdown
                style={[styles.dropdown]}
                placeholderStyle={[CommonStyles.HelveticaNeue16Green]}
                selectedTextStyle={[CommonStyles.HelveticaNeue16Green]}
                itemTextStyle={[CommonStyles.HelveticaNeue16Green,{margin:0,}]}
                itemContainerStyle={{paddingVertical:0, }}
                data={items}
                maxHeight={90}
                labelField="label"
                valueField="value"
                placeholder={'Select item'}
                value={value}
                onChange={item => {
                  setValue(item.value);
                }}
              />
            </View>
            <View style={{justifyContent: 'flex-end', marginBottom: 10}}>
              <Clock />
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 35,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#F2D847',
                padding: 10,
                paddingHorizontal: 35,
                borderRadius: 10,
              }}
              onPress={() => {
                setActive(false);
                console.log(PaymentStatus, CustomerType);
              }}>
              <Text style={[CommonStyles.HelveticaNeue20, {color: '#ffffff'}]}>
                Apply
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
    height: 40,
    borderColor: '#D8CFCF',
    borderBottomWidth: 1,
    paddingHorizontal: 8,
  },
});

export default Orders;
