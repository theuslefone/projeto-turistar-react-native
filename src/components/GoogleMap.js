import React,  { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';

import * as Location from 'expo-location';


export default function GoogleMap() {


  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
        setOrigin({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.00922,
          longitudeDelta: 0.00421,
        })
      }else{
        throw new Error('Permission to access location was denied');
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView 
      style={styles.map} 
      initialRegion={origin}
      showsUserLocation = {true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});