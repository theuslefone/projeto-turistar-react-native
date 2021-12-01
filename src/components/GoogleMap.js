import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';


export default function GoogleMap() {
  return (
    <View style={styles.container}>
      <MapView 
      style={styles.map} 
      initialRegion={{
      latitude: -8.06155156939535,
      longitude:  -34.87054089901404,
      latitudeDelta: 0.00922,
      longitudeDelta: 0.00421,
    }}
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