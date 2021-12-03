import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View,  ActivityIndicator, FlatList, } from 'react-native';
import GoogleMap from '../components/GoogleMap';
import { api } from '../../service/Heroku';


export default function Culinaria() {

    const [data, setData] = useState([]);
    const [waypoints, setWaypoints] = useState([]);

    
    const getCulinaria = async () =>{
      try {
        const response = await fetch(`${api}/rotas`);
        let json = await response.json();
        const rotas = json
        setData(rotas)
      } catch (error) {
        console.error(error);
      }
    }
    useEffect(() => {
      getCulinaria()
      routeDefine()
    }, []);


    function routeDefine(){
      setWaypoints(data)
    }


    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <GoogleMap
            waypoints = {data}
            destination = {'Recife'}
          />
      </View>
    );
  }