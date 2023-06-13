import React, {useEffect, useContext, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import typography from '../utils/typography';
import Truck from '../svg/truck';
import {useTranslation} from '../hooks/useTranslation';
import Header from '../components/Header';
import AppLoader from '../components/AppLoader';
import {moderateScale} from 'react-native-size-matters';
import {EndPoints} from '../services/EndPoints';
import ApiServices from '../services/ApiServices';
import {useDispatch, useSelector} from 'react-redux';
import {LocalizationContext} from '../utils/Localization';
import Toast from 'react-native-simple-toast';
import { getDashboardData } from '../redux/reducers/DashboardState';

const Dashboard = ({navigation}) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.dashboardState);
  const [loader, setLoader] = useState(false);
  const {token} = useContext(LocalizationContext)!;

  const {T} = useTranslation('Dashboard');

  const [completedOrders, setCompletedOrders] = useState(state.deliveredOrders);
  const [pendingOrders, setPendingOrders] = useState(state.pendingOrders);
  const [totalPendingOrder, setTotalPendingOrder] = useState(state.totalPendingOrder);

  const [todaysOrders, setTodaysOrders] = useState(0);
  // function eArabic(x) {
  //   return x.toLocaleString('ar-EG');
  // }
  const getApiData = async () => {
    const formData = {};
    setLoader(true);
    try {
      const response = await dispatch(
        // @ts-ignore
        getDashboardData({
          data: formData,
          url: EndPoints.OrderStatusCount,
          restHeader: {
            'x-access-token': token,
          },
        }),
      );

      console.log('90909090990 response ', JSON.stringify(response, null, 2));
      console.log('90909090990 response data', response.payload);
      if (response.payload.success === '1') {
        // {"address": "Omdurman", "area_name": null, "city_name": "Omdurman", "email": "aa@trolley-sd.com", "name": "Ahmed Elsir", "phone": "0999360003", "total_completed_order": "1"

        Toast.show(response.payload.message, Toast.LONG);
      } else if (response.payload.success === '0') {
        Toast.show(response.payload.message, Toast.LONG);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };
  useEffect(() => {
    getApiData();
    let TotalOrders = completedOrders + pendingOrders;
    setTodaysOrders(completedOrders + pendingOrders);
    console.log(
      'TotalOrders...........',
      (completedOrders / TotalOrders) * 100,
    );
  }, []);

  if (loader) {
    return <AppLoader />;
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title={T('dashboard')} />
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: '#fff',
            flex: 1,
            paddingHorizontal: moderateScale(20),
            paddingVertical: moderateScale(15),
          }}>
          <View
            style={{
              paddingHorizontal: moderateScale(20),
              paddingVertical: moderateScale(15),
              backgroundColor: '#fff',
              borderRadius: moderateScale(20),
              width: '100%',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{
                  color: '#5E758D',
                  fontFamily: typography.GibsonSemiBold,
                  fontSize: moderateScale(25),
                  fontWeight: '600',
                }}>
                {T('todaysOrder')}
              </Text>
            </View>

            <View
              style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: moderateScale(18),
                transform: [{rotate: '-120deg'}],
              }}>
              <View
                style={[
                  {
                    height: moderateScale(180),
                    width: moderateScale(180),
                    borderRadius: moderateScale(200),
                    backgroundColor: '#5E758D',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                  },
                ]}>
                <View
                  style={{
                    height: moderateScale(155),
                    width: moderateScale(155),
                    borderRadius: moderateScale(200),
                    backgroundColor: '#fff',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 9999,
                    position: 'absolute',
                    transform: [{rotate: '120deg'}],
                  }}>
                  <Text
                    style={{
                      color: '#454F63',
                      fontSize: moderateScale(50),
                      fontWeight: '500',
                      fontFamily: typography.GibsonSemiBold,
                    }}>
                    {todaysOrders}
                  </Text>
                </View>
                {/** Static filled semi-circle */}
                {(completedOrders / todaysOrders) * 100 * 3.6 < 180 ? null : (
                  <View
                    style={{
                      overflow: 'hidden',
                      width: moderateScale(95),
                      height: moderateScale(180),
                      position: 'absolute',
                      right: 0,
                      borderTopRightRadius: moderateScale(200),
                      borderBottomRightRadius: moderateScale(200),
                      backgroundColor: 'transparent',
                      zIndex:
                        (completedOrders / todaysOrders) * 100 * 3.6 > 180
                          ? 999
                          : 0,
                    }}>
                    <View
                      style={{
                        width: moderateScale(180),
                        height: moderateScale(180),
                        backgroundColor: '#E3C133',
                      }}
                    />
                  </View>
                )}
                {/** moving filled semi-circle */}
                <View
                  style={{
                    height: moderateScale(180),
                    width: moderateScale(180),
                    borderRadius: moderateScale(200),
                    transform: [
                      {
                        rotate:
                          (completedOrders / todaysOrders) * 100 * 3.6 > 180
                            ? (completedOrders / todaysOrders) * 100 * 3.6 -
                              180 +
                              'deg'
                            : '0deg',
                      },
                    ],
                    position: 'relative',
                    zIndex:
                      (completedOrders / todaysOrders) * 100 * 3.6 > 180
                        ? 999
                        : 0,
                  }}>
                  <View
                    style={{
                      overflow: 'hidden',
                      width: moderateScale(95),
                      height: moderateScale(180),
                      position: 'absolute',
                      right: 0,
                      borderTopRightRadius: moderateScale(200),
                      borderBottomRightRadius: moderateScale(200),
                      backgroundColor: 'transparent',
                    }}>
                    <View
                      style={{
                        width: moderateScale(180),
                        height: moderateScale(180),
                        backgroundColor: '#E3C133',
                      }}
                    />
                  </View>
                </View>
                {/** moving empty semi-circle */}
                <View
                  style={{
                    height: moderateScale(180),
                    width:
                      completedOrders == 0 || completedOrders == 100
                        ? moderateScale(179)
                        : moderateScale(180),
                    borderRadius: moderateScale(200),
                    transform: [
                      {
                        rotate:
                          (completedOrders / todaysOrders) * 100 * 3.6 > 180
                            ? '0deg'
                            : (completedOrders / todaysOrders) * 100 * 3.6 -
                              180 +
                              'deg',
                      },
                    ],
                    position: 'absolute',
                    zIndex:
                      (completedOrders / todaysOrders) * 100 * 3.6 > 180
                        ? 0
                        : 999,
                  }}>
                  <View
                    style={{
                      overflow: 'hidden',
                      width: moderateScale(95),
                      height: moderateScale(180),
                      position: 'absolute',
                      left: 0,
                      borderTopLeftRadius: moderateScale(200),
                      borderBottomLeftRadius: moderateScale(200),
                      backgroundColor: 'transparent',
                    }}>
                    <View
                      style={{
                        width: moderateScale(180),
                        height: moderateScale(180),
                        backgroundColor: '#5E758D',
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>

            {/* Custom Progress chart ends here....... */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: moderateScale(15),
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  width: moderateScale(20),
                  height: moderateScale(20),
                  backgroundColor: '#E3C133',
                  borderRadius: moderateScale(5),
                }}
              />
              <View style={{width: '80%'}}>
                <Text
                  style={{
                    marginLeft: moderateScale(20),
                    color: '#777777',
                    fontFamily: typography.GibsonSemiBold,
                    // fontWeight: '600',
                    fontSize: moderateScale(15),
                  }}>
                  {T('todaysCompleteOrder')}
                </Text>
              </View>
              <Text
                style={{
                  marginRight: moderateScale(10),
                  color: '#5E758D',
                  fontFamily: typography.GibsonSemiBold,
                  fontWeight: '600',
                  fontSize: moderateScale(20),
                }}>
                {completedOrders}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: moderateScale(12),
                width: '100%',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  width: moderateScale(20),
                  height: moderateScale(20),
                  backgroundColor: '#5E758D',
                  borderRadius: moderateScale(5),
                }}
              />
              <View style={{width: '80%'}}>
                <Text
                  style={{
                    marginLeft: moderateScale(20),
                    color: '#777777',
                    fontFamily: typography.GibsonSemiBold,
                    // fontWeight: '600',
                    fontSize: moderateScale(15),
                  }}>
                  {T('todaysPendingOrder')}
                </Text>
              </View>
              <Text
                style={{
                  marginRight: moderateScale(10),
                  color: '#5E758D',
                  fontFamily: typography.GibsonSemiBold,
                  fontWeight: '600',
                  fontSize: moderateScale(20),
                }}>
                {pendingOrders}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Orders', {title: T('pendingOrder')})
            }>
            <ImageBackground
              style={{padding: moderateScale(10), marginTop: moderateScale(15)}}
              imageStyle={{borderRadius: moderateScale(15)}}
              resizeMode="cover"
              source={require('../assets/images/yellowCard.png')}>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontFamily: typography.GibsonSemiBold,
                    fontSize: moderateScale(55),
                    marginTop: moderateScale(5),
                    marginLeft: moderateScale(40),
                    marginBottom: moderateScale(20),
                  }}>
                  {totalPendingOrder}
                </Text>
                <Truck
                  style={{height: moderateScale(30), width: moderateScale(40)}}
                />
              </View>
              <Text
                style={{
                  color: '#fff',
                  fontFamily: typography.GibsonRegular,
                  fontSize: moderateScale(25),
                  marginTop: moderateScale(25),
                  marginLeft: moderateScale(15),
                  // marginBottom: 30,
                }}>
                {T('totalPendingOrder')}
              </Text>
            </ImageBackground>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginVertical: moderateScale(15),
              width: '100%',
            }}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Orders', {title: T('assignedOrder')})
              }
              style={{width: '49%'}}>
              <ImageBackground
                style={{padding: moderateScale(15), alignItems: 'center'}}
                imageStyle={{borderRadius: moderateScale(15)}}
                resizeMode="cover"
                source={require('../assets/images/blueLeftcard.png')}>
                <Image
                  style={{
                    width: moderateScale(60),
                    height: moderateScale(60),
                    margin: moderateScale(15),
                    marginHorizontal: moderateScale(40),
                  }}
                  resizeMode="contain"
                  source={require('../assets/images/task.png')}
                />
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontFamily: typography.GibsonRegular,
                    fontSize: moderateScale(17),
                    paddingTop: moderateScale(5),
                  }}>
                  {T('assignedOrder')}
                </Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Orders', {title: T('completedOrder')})
              }
              style={{width: '49%'}}>
              <ImageBackground
                style={{padding: moderateScale(15), alignItems: 'center'}}
                imageStyle={{borderRadius: moderateScale(15)}}
                resizeMode="cover"
                source={require('../assets/images/blueLeftcard.png')}>
                <Image
                  style={{
                    width: moderateScale(60),
                    height: moderateScale(60),
                    margin: moderateScale(15),
                    marginHorizontal: moderateScale(40),
                  }}
                  resizeMode="contain"
                  source={require('../assets/images/CheckmarkCirlce.png')}
                />
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontFamily: typography.GibsonRegular,
                    paddingTop: moderateScale(5),
                    fontSize: moderateScale(17),
                  }}>
                  {T('completedOrder')}
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Dashboard;
