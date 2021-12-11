import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View,  ActivityIndicator, FlatList, } from 'react-native';
import GoogleMap from '../components/GoogleMap';
import { api } from '../../service/Heroku';


export default function Culinaria() {

    const [data, setData] = useState([]);
    const [waypoints, setWaypoints] = useState(undefined);
    const [destination, setDestination] = useState(undefined);

    

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <GoogleMap
            waypoints = {waypoints}
            destination = {destination}
          />
      </View>
    );
  }