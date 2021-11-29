import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AgremiationsScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text getContent></Text>
        
      </View>
    );
  }

  async function getContent() {
    try {
        const response = await fetch('http://localhost:1000/agremiacoes')
        const data = await response.json()
        show(data)

    } catch (error) {
        console.log(error)
    }
}
getContent()

function show(agremiacoes) {

    let output = ''

    for( let agremiacao of agremiacoes) {
        output += `<li>${agremiacao.nome}</li>`
    }

    document.querySelector('body').innerHTML = output
}