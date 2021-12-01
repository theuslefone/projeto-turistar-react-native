import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Culinaria from '../src/tabs/Culinaria';
import Cultura from '../src/tabs/Cultura';
import Passeios from '../src/tabs/Passeios';

const Tab = createMaterialTopTabNavigator();


export default function HomeScreen() {
    return (
      <Tab.Navigator
      >
        <Tab.Screen 
        name="Culinaria" 
        component={Culinaria}
        options={{ 
          tabBarLabel: 'Culinária',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="food" color={'#04026B'} size={20} />
          ),
        }}
        />
        <Tab.Screen 
        name="Cultura" 
        component={Cultura}
        options={{ 
          tabBarLabel: 'Cultura',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="castle" color={'#04026B'} size={20} />
          ),
        }}        
        />
        <Tab.Screen 
        name="Passeios" 
        component={Passeios} 
        options={{
          tabBarLabel: 'Passeios',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="walk" color={'#04026B'} size={20} />
          ),
        }}    
        />
      </Tab.Navigator>
    );
  }
  
