import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LogoTitle from '../src/components/LogoTitle'


const Stack = createNativeStackNavigator();

export default function StackScreen() {
    return (

        /**Pra adicionar uma tela nesse flow, fazer o seguinte:
     * <Stack.Screen name="Nome para screen" component={Nome do componente} />
     */

      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ 
                headerTitleAlign: 'center', 
                headerTitle: (props) => <LogoTitle {...props} />,
              headerStyle:{
                backgroundColor: '#04026B',
              },
              
             }}
        />

         <Stack.Screen 
         name="Profile" 
         component={ProfileScreen} />

      </Stack.Navigator>
    );
  }
  