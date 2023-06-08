import React, {useEffect, useState} from 'react';
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

const Dashboard = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const {T} = useTranslation('Dashboard');

  const [completedOrders, setCompletedOrders] = useState(10);
  const [pendingOrders, setPendingOrders] = useState(12);
  const [todaysOrders, setTodaysOrders] = useState(0);
  function eArabic(x) {
    return x.toLocaleString('ar-EG');
  }
  useEffect(() => {
    let TotalOrders = completedOrders + pendingOrders;
    setTodaysOrders(completedOrders + pendingOrders);
    console.log(
      'TotalOrders...........',
      (completedOrders / TotalOrders) * 100,
    );
  }, []);

  if (isLoading) {
    return <AppLoader />;
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <View
        style={{
          backgroundColor: '#E3C133',
          padding: 20,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => openDrawer()} hitSlop={10} style={{width:'5%', justifyContent:'center'}}>
          <Image
            style={{
              width: 20,
              height: 20,
            }}
            source={require('../assets/images/hamburger.png')}
          />
        </TouchableOpacity>
        <View style={{width: '88%'}}>
          <Text
            style={{
              color: '#fff',
              fontFamily: typography.HelveticaBold,
              fontSize: 20,
              marginLeft: 20,
            }}>
            {T('dashboard')}
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            style={{
              width: 30,
              height: 30,
            }}
            source={require('../assets/images/Profile_white.png')}
          />
        </TouchableOpacity>
      </View> */}
      <Header title={T('dashboard')} />
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: '#fff',
            flex: 1,
            paddingHorizontal: 20,
            paddingVertical: 15,
          }}>
          <View
            style={{
              paddingHorizontal: 20,
              paddingVertical: 15,
              backgroundColor: '#fff',
              borderRadius: 20,
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
                  fontSize: 25,
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
                marginVertical: 18,
                transform: [{rotate: '-120deg'}],
              }}>
              <View
                style={[
                  {
                    height: 180,
                    width: 180,
                    borderRadius: 200,
                    backgroundColor: '#5E758D',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                  },
                ]}>
                <View
                  style={{
                    height: 155,
                    width: 155,
                    borderRadius: 200,
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
                      fontSize: 50,
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
                      width: 95,
                      height: 180,
                      position: 'absolute',
                      right: 0,
                      borderTopRightRadius: 200,
                      borderBottomRightRadius: 200,
                      backgroundColor: 'transparent',
                      zIndex:
                        (completedOrders / todaysOrders) * 100 * 3.6 > 180
                          ? 999
                          : 0,
                    }}>
                    <View
                      style={{
                        width: 180,
                        height: 180,
                        backgroundColor: '#E3C133',
                      }}
                    />
                  </View>
                )}
                {/** moving filled semi-circle */}
                <View
                  style={{
                    height: 180,
                    width: 180,
                    borderRadius: 200,
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
                      width: 95,
                      height: 180,
                      position: 'absolute',
                      right: 0,
                      borderTopRightRadius: 200,
                      borderBottomRightRadius: 200,
                      backgroundColor: 'transparent',
                    }}>
                    <View
                      style={{
                        width: 180,
                        height: 180,
                        backgroundColor: '#E3C133',
                      }}
                    />
                  </View>
                </View>
                {/** moving empty semi-circle */}
                <View
                  style={{
                    height: 180,
                    width:
                      completedOrders == 0 || completedOrders == 100
                        ? 179
                        : 180,
                    borderRadius: 200,
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
                      width: 95,
                      height: 180,
                      position: 'absolute',
                      left: 0,
                      borderTopLeftRadius: 200,
                      borderBottomLeftRadius: 200,
                      backgroundColor: 'transparent',
                    }}>
                    <View
                      style={{
                        width: 180,
                        height: 180,
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
                marginTop: 15,
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: '#E3C133',
                  borderRadius: 5,
                }}></View>
              <View style={{width: '80%'}}>
                <Text
                  style={{
                    marginLeft: 20,
                    color: '#777777',
                    fontFamily: typography.GibsonSemiBold,
                    // fontWeight: '600',
                    fontSize: 15,
                  }}>
                  {T('todaysCompleteOrder')}
                </Text>
              </View>
              <Text
                style={{
                  marginRight: 10,
                  color: '#5E758D',
                  fontFamily: typography.GibsonSemiBold,
                  fontWeight: '600',
                  fontSize: 20,
                }}>
                10
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 12,
                width: '100%',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: '#5E758D',
                  borderRadius: 5,
                }}></View>
              <View style={{width: '80%'}}>
                <Text
                  style={{
                    marginLeft: 20,
                    color: '#777777',
                    fontFamily: typography.GibsonSemiBold,
                    // fontWeight: '600',
                    fontSize: 15,
                  }}>
                  {T('todaysPendingOrder')}
                </Text>
              </View>
              <Text
                style={{
                  marginRight: 10,
                  color: '#5E758D',
                  fontFamily: typography.GibsonSemiBold,
                  fontWeight: '600',
                  fontSize: 20,
                }}>
                12
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Orders', {title: T('pendingOrder')})
            }>
            <ImageBackground
              style={{padding: 10, marginTop: 15}}
              imageStyle={{borderRadius: 15}}
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
                    fontSize: 55,
                    marginTop: 5,
                    marginLeft: 40,
                    marginBottom: 20,
                  }}>
                  32
                </Text>
                <Truck style={{height: 30, width: 40}} />
              </View>
              <Text
                style={{
                  color: '#fff',
                  fontFamily: typography.GibsonRegular,
                  fontSize: 25,
                  marginTop: 25,
                  marginLeft: 15,
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
              marginVertical: 15,
              width: '100%',
            }}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Orders', {title: T('assignedOrder')})
              }
              style={{width: '49%'}}>
              <ImageBackground
                style={{padding: 15}}
                imageStyle={{borderRadius: 15}}
                resizeMode="cover"
                source={require('../assets/images/blueLeftcard.png')}>
                <Image
                  style={{
                    width: 60,
                    height: 60,
                    margin: 15,
                    marginHorizontal: 40,
                  }}
                  resizeMode="contain"
                  source={require('../assets/images/task.png')}
                />
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontFamily: typography.GibsonRegular,
                    fontSize: 20,
                    paddingTop: 5,
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
                style={{padding: 15}}
                imageStyle={{borderRadius: 15}}
                resizeMode="cover"
                source={require('../assets/images/blueLeftcard.png')}>
                <Image
                  style={{
                    width: 60,
                    height: 60,
                    margin: 15,
                    marginHorizontal: 40,
                  }}
                  resizeMode="contain"
                  source={require('../assets/images/CheckmarkCirlce.png')}
                />
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontFamily: typography.GibsonRegular,
                    paddingTop: 5,
                    fontSize: 18,
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
