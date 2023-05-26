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
import {DateTimePicker,DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import moment from 'moment';
const Orders = ({navigation}) => {
  const [active, setActive] = useState(false);
  const [date, setDate] = useState(new Date(1598051730000));

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
    console.log(moment(currentDate).format("YYYY-MM-DD"),'gjy');

  };
  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };
  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
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
                onPress={() => {
                  navigation.navigate('OrdersDetails', {item});
                }}>
                <View style={{}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
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
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
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
                      marginTop: 2,
                    }}>
                    <Text style={[CommonStyles.HelveticaNeue13]}>
                      Order Date & Time :
                    </Text>
                    <Text
                      style={[CommonStyles.HelveticaNeue13, {marginLeft: 10}]}>
                      {item.OrderDateTime}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <HorizontalLine style={{marginTop: 5}} />
                    <Text
                      style={[
                        CommonStyles.HelveticaNeue16Green,
                        {color: '#707070'},
                      ]}>
                      Delivery :
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{alignItems: 'center'}}>
                      <Text style={[CommonStyles.HelveticaNeue13]}>
                        Payment Mode:
                      </Text>
                      <Text
                        style={[
                          CommonStyles.HelveticaNeue16Green,
                          {color: '#707070'},
                        ]}>
                        {item.PaymentMode}
                      </Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                      <Text style={[CommonStyles.HelveticaNeue13]}>
                        Payment Status:
                      </Text>
                      <Text
                        style={[
                          CommonStyles.HelveticaNeue16Green,
                          {
                            color:
                              item.PaymentStatus == 'Paid'
                                ? '#2B7908'
                                : '#FD5B1F',
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
                          {color: '#723D16'},
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
      <Modal isVisible={active} onBackdropPress={()=>{setActive(false)}} style={{margin: 0,flex:1,justifyContent:'flex-end'}}>
          <View
            style={{
              backgroundColor: '#ffffff',
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}>
            <Text style={[CommonStyles.HelveticaNeue13, {color: '#6F776B'}]}>
              Payment Status :
            </Text>
            <View style={{width: '80%', marginVertical: 10}}>
              <RadioButton />
            </View>
            <Text style={[CommonStyles.HelveticaNeue13, {color: '#6F776B'}]}>
              Customer Type :
            </Text>
            <View style={{width: '80%', marginVertical: 10}}>
              <RadioButton />
            </View>
            <TouchableOpacity onPress={showDatepicker}>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: '90%',borderBottomWidth:1,borderBottomColor:'#D8CFCF'}}>
                <Text
                  style={[CommonStyles.HelveticaNeue13, {color: '#6F776B'}]}>
                  Delivery Date
                </Text>
                <TextInput style={{paddingVertical:0}}/>
              </View>
              <Calender />
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={showTimepicker}>
            <View style={{flexDirection: 'row',marginTop:10}}>

              <View style={{width: '90%',borderBottomWidth:1, borderBottomColor:'#D8CFCF'}}>
                <Text
                  style={[CommonStyles.HelveticaNeue13, {color: '#6F776B'}]}>
                  Select Time Slot
                </Text>
                <TextInput style={{paddingVertical:0}}/>
              </View>
              <Clock />
            </View>
            </TouchableOpacity>
            <View style={{justifyContent:'center',alignItems:'center',marginVertical:25}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#F2D847',
                padding: 10,
                paddingHorizontal: 35,
                borderRadius: 10,
              }}
              onPress={()=>{setActive(false)}}>
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
const styles = StyleSheet.create({});

export default Orders;
