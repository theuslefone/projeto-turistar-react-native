// Importações nativas Expo, React e React-Native 
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Importações não nativas
import { NavigationContainer } from '@react-navigation/native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

//Componentes e funções
import StackScreen from './src/StackScreen';
import QrCode from './src/components/QrCode';

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider  theme={theme}> 
        <StatusBar style="auto" />   
        <StackScreen/>
      </PaperProvider>
      <QrCode/>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#04026B',
    accent: 'white',
  },
};