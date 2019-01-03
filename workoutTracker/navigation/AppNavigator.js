import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import AuthNavigator from './AuthNavigator';

export default createSwitchNavigator({
  Main: MainTabNavigator,
  AuthLoading: AuthLoadingScreen,
  Auth: AuthNavigator
},
{
  initialRouteName: 'AuthLoading'
});