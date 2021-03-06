import React, { useState, useEffect } from "react";
import { StyleSheet, View, Dimensions, Text, Alert, Modal, Pressable, Image, Button} from "react-native";

import MapView, { Callout, Marker } from "react-native-maps";
import * as Location from "expo-location";

import MapViewDirections from "react-native-maps-directions";
import { googleAPI } from "../../config.js";
import  Pin  from "./Pin.js";

import { caisDaLingueta, casaraoMarcoZero, coracaoDoNordeste, estatuaChicoScience, forteDoBrum, leaoDoMestreNuca, marcoZero, praçaDoArsenal,
   ruaBomJesus, torreMalakoff } from "../routes/QrcodePoints";

export default function GoogleMap(props) {

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



  return (
    <MapView style={styles.map} initialRegion={origin} showsUserLocation={true}>

      <MapViewDirections
          lineDashPattern={[0]}
          origin={origin}
          destination = {props.destination}
          waypoints={props.waypoints}
          mode = {'WALKING'}
          apikey={googleAPI}
          strokeWidth={6}
          strokeColor = "#04026B"
          precision="low"
          timePrecision = 'now'
      />

      <Pin coordinate={marcoZero}/>
      
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
    height: 400
  },
});
