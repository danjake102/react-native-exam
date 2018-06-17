import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import LoginScreen from './screens/loginScreen';

EStyleSheet.build({
  $wisteria: '#8e44ad',
  $amethyst: '#9b59b6',
});


export default () => <LoginScreen />;