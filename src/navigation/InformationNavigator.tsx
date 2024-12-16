import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import InformationPage from '@pages/Information/InformationPage';

const Stack = createStackNavigator();

const InformationNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="InformationPage" component={InformationPage} />
      {/* สามารถเพิ่มหน้าอื่นๆ ที่เกี่ยวข้องกับข้อมูลที่นี่ */}
    </Stack.Navigator>
  );
};

export default InformationNavigator;
