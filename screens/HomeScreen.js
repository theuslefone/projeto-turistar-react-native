import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Culinaria from '../src/tabs/Culinaria';
import Cultura from '../src/tabs/Cultura';
import Passeios from '../src/tabs/Passeios';

const Tab = createMaterialTopTabNavigator();
export default function HomeScreen() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Culinaria" component={Culinaria} />
        <Tab.Screen name="Cultura" component={Cultura} />
        <Tab.Screen name="Passeios" component={Passeios} />
      </Tab.Navigator>
    );
  }
  
