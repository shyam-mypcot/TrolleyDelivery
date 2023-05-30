import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Dashboard from './screens/Dashboard';
import Profile from './screens/Profile';
import Orders from './screens/Orders';
import OrdersDetails from './screens/OrdersDetails';
import Revenue from './screens/Revenue';
import Login from './screens/Login';
import DrawerComp from './components/DrawerComp';
import ResetPassword from './screens/ResetPassword';
// import NewMessage from './screens/NewMessage';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const DrawerStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerComp {...props} />}>
      <Drawer.Screen name="Dashboard" options={{headerShown: false}}>
        {props => <Dashboard {...props} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Drawer" options={{headerShown: false}}>
          {props => <DrawerStack {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Login" options={{headerShown: false}}>
          {props => <Login {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Dashboard" options={{headerShown: false}}>
          {props => <Dashboard {...props} />}
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
        <Stack.Screen name="ResetPassword" options={{headerShown: false}}>
            {props => <ResetPassword {...props} />}
          </Stack.Screen>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
