import React, { useState, useEffect } from "react";
import { StyleSheet, View, Dimensions } from "react-native";

import MapView from "react-native-maps";
import {Marker} from "react-native-maps";
import * as Location from "expo-location";

import MapViewDirections from "react-native-maps-directions";
import { googleAPI } from "../../config";

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


 const rota1 = [
   'Marco Zero',
   'Praça do Arsenal',
   'Torre Malakof',
   'cais da lingueta',
   'Porto do Recife'
 ]




  if( props == undefined ){
    <MapView style={styles.map} initialRegion={origin} showsUserLocation={true}/>
    
  } else return (
    <MapView style={styles.map} initialRegion={origin} showsUserLocation={true}>

        <MapViewDirections
        lineDashPattern={[0]}
        origin={origin}
        destination= {props.destination}
        waypoints = {rota1}
        mode = {'WALKING'}
        apikey={googleAPI}
        strokeWidth={3}
        strokeColor = "#04026B"
      />

    <Marker coordinate={marcoZero}/>
    <Marker coordinate={praçaDoArsenal}/>
    <Marker coordinate={torreMalakoff}/>
    <Marker coordinate={casaraoMarcoZero}/>
    <Marker coordinate={ruaBomJesus}/>
    <Marker coordinate={leaoDoMestreNuca}/>
    <Marker coordinate={caisDaLingueta}/>
    <Marker coordinate={estatuaChicoScience}/>
    <Marker coordinate={forteDoBrum}/>
    <Marker coordinate={coracaoDoNordeste}/>

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
