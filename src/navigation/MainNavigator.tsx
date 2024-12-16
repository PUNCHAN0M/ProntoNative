import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../pages/Home/HomePage';
import ScanQRPage from '../pages/ScanQR/ScanQRPage';
import MenuPage from '../pages/Menu/MenuPage';
import InformationNavigator from './InformationNavigator';
import MaterialsNavigator from './MaterialsNavigator';
import TimePeriodPage from '../pages/TimePeriod/TimePeriodPage';
import ExpiredDatePage from '../pages/ExpiredDate/ExpiredDatePage';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ScanQR"
      screenOptions={{
        headerShown: false, // ปิด header ของแต่ละหน้า
      }}
    >
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="ScanQR" component={ScanQRPage} />
      <Stack.Screen name="Menu" component={MenuPage} />
      <Stack.Screen name="Information" component={InformationNavigator} />
      <Stack.Screen name="Materials" component={MaterialsNavigator} />
      <Stack.Screen name="TimePeriod" component={TimePeriodPage} />
      <Stack.Screen name="ExpiredDate" component={ExpiredDatePage} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
