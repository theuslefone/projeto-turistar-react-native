import React, { useState, useEffect } from "react";
import { StyleSheet, View, Dimensions, Text, Alert, Modal, Pressable, Image, Button} from "react-native";
import { Callout, Marker } from "react-native-maps";

export default function Pin(props) {
    return(
        <Marker style={styles.container} coordinate={props.coordinate} tappable= {true}>
      <Callout style={styles.locationButtonCallout}>
            <View style={styles.modal}>
           <Text> Marco Zero</Text>
            <Image
              style={styles.image}
              source={{uri:'https://ibb.co/kGptybC'}}/> 
              <Text> Rota 1</Text>
              <Text> Rota 2</Text>
              <Text> Rota 3</Text>
              <Text> Rota 4</Text>
           </View>
        </Callout>
      </Marker>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 5,
    },
    image: {
        width: 120,
        height: 80,      
    },
    modal: {
        backgroundColor: "#fff",
      },
      locationButtonCallout: {
        borderRadius: 5,
        opacity: 0.8,
      },
})