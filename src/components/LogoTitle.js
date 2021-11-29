import * as React from 'react';
import {
  Image
 } from 'react-native';

export default function LogoTitle() {
    return (
        <Image
          style={{ width: 150, height: 70 }}
          source={require('../../assets/logo.png')}
        />
      );
}