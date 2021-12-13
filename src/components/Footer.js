import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function Footer(props){
    return(
    <View style={{ grid: 3}}>
       
        <Button style={styles.button}
            title='Perfil'
            onPress={() => {}}
        />
         <Button
            title='QRcode'
            onPress={() => {}}
        />
         <Button
            title='Passaporte'
            onPress={() => {}}
        />
    </View>
    )
}

const styles = StyleSheet.create({
    button: {
      marginBottom: 10
    },
  });


/** <Button
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
         /> */