import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CouplingNormex from '@pages/Materials/CouplingNormex';

const Stack = createStackNavigator();

const MaterialsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="CouplingNormex"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="CouplingNormex" component={CouplingNormex} />
    </Stack.Navigator>
  );
};

export default MaterialsNavigator;
