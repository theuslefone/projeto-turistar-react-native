import React, { useState, useEffect } from "react";
import { StyleSheet, View, Dimensions } from "react-native";

import MapView from "react-native-maps";
import * as Location from "expo-location";
import MapViewDirections from "react-native-maps-directions";
import { googleAPI } from "../../config/config";


export default function GoogleMap() {
  const [origin, setOrigin] = useState(null);
  const [waypoints, setWaypoints] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        let location = await Location.getCurrentPositionAsync({
          enableHighAccuracy: true,
        });
        setOrigin({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.00922,
          longitudeDelta: 0.00421,
        });
      } else {
        throw new Error("Permission to access location was denied");
      }
    })();
  }, []);

  const coordinates = [
    {
      latitude: -8.062469625063406,
      longitude: -34.87122195654575,
    },
    {
      latitude: -8.062469625063406,
      longitude: -34.87122195654575,
    },
  ];

  return (
    <MapView style={styles.map} initialRegion={origin} showsUserLocation={true}>
      <MapViewDirections
        lineDashPattern={[0]}
        origin={origin}
        destination={coordinates[0]}
        apikey={googleAPI}
        strokeWidth={3}
        strokeColor = "#04026B"
      />
    </MapView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
