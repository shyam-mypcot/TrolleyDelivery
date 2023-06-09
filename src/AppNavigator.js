import React, { useEffect, useContext, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Dimensions } from 'react-native';

import Dashboard from './screens/Dashboard';
import Profile from './screens/Profile';
import Orders from './screens/Orders';
import OrdersDetails from './screens/OrdersDetails';
import Revenue from './screens/Revenue';
import Login from './screens/Login';
import DrawerComp from './components/DrawerComp';
import ForgotPassword from './screens/ForgotPassword';
import ResetPassword from './screens/ResetPassword';
import Otp from './screens/Otp';
import OtpCode from './screens/OtpCode';

import { i18Storage } from './local-data/i18nStorage';
import { navigationRef } from './ref/navigationRef';
import { UserData } from './local-data/user-data/UserData';
import AppLoader from './components/AppLoader';
import { LocalizationContext } from './utils/Localization.tsx';

// import NewMessage from './screens/NewMessage'
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const DrawerStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ unmountOnBlur: true  ,drawerStyle: {
        width: Dimensions.get('window').width / 1.25,
      },}}
      drawerContent={props => <DrawerComp {...props} />}>
      <Drawer.Screen name="Dashboard" options={{ headerShown: false }}>
        {props => <Dashboard {...props} />}
      </Drawer.Screen>
      {/* <Drawer.Screen name="Profile" options={{ headerShown: false }}>
        {props => <Profile {...props} />}
      </Drawer.Screen>
      <Drawer.Screen name="Orders" options={{ headerShown: false }}>
        {props => <Orders {...props} />}
      </Drawer.Screen>
      <Drawer.Screen name="OrdersDetails" options={{ headerShown: false }}>
        {props => <OrdersDetails {...props} />}
      </Drawer.Screen>
      <Drawer.Screen name="Revenue" options={{ headerShown: false }}>
        {props => <Revenue {...props} />}
      </Drawer.Screen>
      <Drawer.Screen name="OtpCode" options={{ headerShown: false }}>
        {props => <OtpCode {...props} />}
      </Drawer.Screen> */}
    </Drawer.Navigator>
  );
};

const AppNavigator = () => {
  const { token, setToken } = useContext(LocalizationContext);

  const [isLoading, setIsLoading] = useState(true);
  const gotoRoutes = async () => {
    const awaitedResult = await i18Storage.retreiveRoutes();
    if (!awaitedResult) {
      return;
    }
    await i18Storage.clearAsyncItem('routes');
    navigationRef.current.navigate(awaitedResult);
  };
  useEffect(() => {
    gotoRoutes();
  }, []);
  const gettingToken = async () => {
    const awaitedResult = await UserData.retreiveUserData('token');
    if (!awaitedResult) {
      setToken(false);
      setIsLoading(false);
    } else {
      setToken(true);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    gettingToken();
  }, []);

  if (isLoading) {
    return <AppLoader />;
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{animationTypeForReplace: 'push',animation:'slide_from_right'}}>
        {!token ? (
          <Stack.Group>

            <Stack.Screen name="Login" options={{ headerShown: false }}>
              {props => <Login {...props} />}
            </Stack.Screen>
            <Stack.Screen name="ForgotPassword" options={{ headerShown: false }}>
              {props => <ForgotPassword {...props} />}
            </Stack.Screen>
            <Stack.Screen name="Otp" options={{ headerShown: false }}>
              {props => <Otp {...props} />}
            </Stack.Screen>
            <Stack.Screen name="ResetPassword" options={{ headerShown: false }}>
              {props => <ResetPassword {...props} />}
            </Stack.Screen>
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name="Drawer" options={{ headerShown: false }}>
              {props => <DrawerStack {...props} />}
            </Stack.Screen>
            <Stack.Screen name="Login" options={{ headerShown: false }}>
              {props => <Login {...props} />}
            </Stack.Screen>
            <Stack.Screen name="Profile" options={{headerShown: false}}>
              {props => <Profile {...props} />}
            </Stack.Screen>
            <Stack.Screen name="Orders" options={{headerShown: false}}>
              {props => <Orders {...props} />}
            </Stack.Screen>
            <Stack.Screen name="OrdersDetails" options={{headerShown: false}}>
              {props => <OrdersDetails {...props} />}
            </Stack.Screen>
            <Stack.Screen name="Revenue" options={{headerShown: false}}>
              {props => <Revenue {...props} />}
            </Stack.Screen>
            <Stack.Screen name="OtpCode" options={{headerShown: false}}>
              {props => <OtpCode {...props} />}
            </Stack.Screen>
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default AppNavigator;
