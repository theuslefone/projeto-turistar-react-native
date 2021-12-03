import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View,  ActivityIndicator, FlatList, } from 'react-native';
import GoogleMap from '../components/GoogleMap';
import { api } from '../../service/Heroku';


export default function Culinaria() {
    const [data, setData] = useState([]);
    
    const getCulinaria = async () =>{
      try {
        const response = await fetch(`${api}/rotas`);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      }
    }

    useEffect(() => {
      getCulinaria()
    }, []);


    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>
            Inicio: {item.inicio},
            {item.wayPoint1},
            {item.wayPoint2},
            {item.wayPoint3},
            {item.wayPoint4},
            {item.wayPoint5}, 
            Fim: {item.fim} 
            </Text>
          )}
        />
      </View>
    );
  }