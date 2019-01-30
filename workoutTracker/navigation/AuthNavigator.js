import React from 'react';
import { createStackNavigator } from 'react-navigation';
import SignInScreen from '../screens/SignInScreen';
import ForgotPWScreen from '../screens/ForgotScreen';
import SignUpScreen from '../screens/SignUpScreen';

export default createStackNavigator({
  SignInScreen: SignInScreen,
  ForgotPWScreen: ForgotPWScreen,
  SignUpScreen: SignUpScreen
});
