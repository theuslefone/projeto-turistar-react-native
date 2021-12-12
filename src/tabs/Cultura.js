import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import GoogleMap from '../components/GoogleMap';
import { api } from '../../service/Heroku';


export default function Cultura() {
  
  const [data, setData] = useState([]);
  const [waypoints, setWaypoints] = useState([]);
  const [destination, setDestination] = useState('');
  const [status, setStatus] = useState(false)

  // Rota 0 = Marco Zero

  async function getRoutes(id){
    try {
      const response = await fetch(`${api}`)
      const rotas = await response.json();
      setData(rotas[id]);
      setDestination(data.fim);
      setWaypoints([
        data.wayPoint1,
        data.wayPoint2,
        data.wayPoint3,
        data.wayPoint4,
        data.wayPoint5,
      ])
      setStatus(true)

      console.log(data.inicio)
    } catch (error) {
      setStatus(false)
      console.error(error); 
    }
  }

  function rotaPteGiraotiraMarcoZero(){
    getRoutes(8)
  }

  function rotaPteBuarquedeMacedo(){
    getRoutes(9)
  }

  function rotaPteMauríciodeNassau(){
    getRoutes(10)
  }

  function rotaPtePonteGiratoria(){
    getRoutes(11)
  }

  function cancel(){
    setStatus(false)
  }
  
  if(status == false){
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <GoogleMap/>
     
         <Button
         title= 'Ponte Giratoria'
         onPress={rotaPteGiraotiraMarcoZero} 
         /> 
          <Button
         title= 'Ponte Buarque de Macedo'
         onPress={rotaPteBuarquedeMacedo} 
         />
         <Button
         title= 'Ponte Maurício de Nassau'
         onPress={rotaPteMauríciodeNassau} 
         />
         <Button
         title= 'Ponte Giratória'
         onPress={rotaPtePonteGiratoria} 
         />

      </View>
    )
  } else return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <GoogleMap
          destination={destination}
          waypoints={waypoints}
          
        />s
          <Button
          title= 'Cancel'
          onPress={cancel}
        />
    </View>
  );
  }