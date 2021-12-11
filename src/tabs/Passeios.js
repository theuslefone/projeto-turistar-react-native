import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import GoogleMap from '../components/GoogleMap';

export default function Passeios() {
  const [data, setData] = useState([]);
  const [waypoints, setWaypoints] = useState([]);
  const [destination, setDestination] = useState('');

  

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <GoogleMap
          waypoints = {waypoints}
          destination = {destination}
        />
    </View>
  );
  }