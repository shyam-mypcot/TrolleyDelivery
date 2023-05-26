import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Dashboard from './screens/Dashboard';
import Profile from './screens/Profile';
import Orders from './screens/Orders';
import OrdersDetails from './screens/OrdersDetails';
import Revenue from './screens/Revenue';
// import Messages from './screens/Messages';
// import MyMessages from './screens/MyMessages';
// import NewMessage from './screens/NewMessage';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Dashboard'>
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
         {/* 
        
        
        <Stack.Screen name="Messages" options={{headerShown: false}}>
          {props => <Messages {...props} />}
        </Stack.Screen>
        <Stack.Screen name="MyMessages" options={{headerShown: false}}>
          {props => <MyMessages {...props} />}
        </Stack.Screen>
        <Stack.Screen name="NewMessage" options={{headerShown: false}}>
          {props => <NewMessage {...props} />}
        </Stack.Screen>
         */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
