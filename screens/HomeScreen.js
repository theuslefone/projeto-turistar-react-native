import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Map from '../src/components/Map';

export default function HomeScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Teste</Text>
        <Map/>
      </View>
    );
  }