import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GoogleMap from '../components/GoogleMap';

export default function Cultura() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <GoogleMap/>
      </View>
    );
  }