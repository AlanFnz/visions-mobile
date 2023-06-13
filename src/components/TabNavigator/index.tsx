import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../feature/Home';
import Settings from '../../feature/Settings';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator screenOptions={{ headerTitle: '' }}>
    <Tab.Screen
      name="DropList"
      component={Home}
      options={{ tabBarLabel: 'DropList' }}
    />
    <Tab.Screen
      name="Settings"
      component={Settings}
      options={{ tabBarLabel: 'Settings' }}
    />
  </Tab.Navigator>
);

export default TabNavigator;
