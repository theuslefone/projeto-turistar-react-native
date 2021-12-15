import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Modal, View, Text, ImageStore} from 'react-native';


import Scanner from './components/Scanner';


export default function QrCode() {

  const [modalVisible, setModalVisible] = React.useState(false);

  const [type, setType] = React.useState("");
  const [data, setData] = React.useState("");

  let qrCode = data;


  const rotas = [
    { id: "Marco zero", rota: 'd4557ce2148707eca71914cb147ec8c9eeb86d00' },
    { id: 2, rota: '54f6c9396c1e5859ebee40a430662e8dd1c4f878' },
    { id: 3, rota: 'fa09582f9a0d5e4b16e1d2a31cabf6a98b053863' },
    { id: 4, rota: '5323ab832ea549a8f8476a26505d5566699f47ec' },
    { id: 5, rota: '44cf2b895154050e5ab9ae8296b4ae6e6e745ac1' },
    { id: 6, rota: '8ddbda3745940a06f5041b2db04c8009e46005e9' },
    { id: 7, rota: 'fc161eefa378aac2d3fde8c2d638fca30e1871b9' },
    { id: 8, rota: '702787a388ab8182b9e9ffb81d5a15d0c228fd24' },
    { id: 9, rota: 'f665cb55020a6c8a3e876380097426fd309f4ef8' },
    { id: 10, rota: '333cd628026906fcf8699b676af555a53a0a17d6' }
  ];

  const index = rotas.findIndex((find) => { 
   return find.rota === qrCode   
    
  });

  let local = rotas[index].id;


  const onCodeScanned = (type,data)=> {
    setType(type);
    setData(data);
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={()=>setModalVisible(false)}>
          <View style={styles.modal}>
            <Scanner onCodeScanned={onCodeScanned}/>
            <Button           
            title="Cancelar" onPress={()=>setModalVisible(false)}/>
          </View>
      </Modal>

      <StatusBar style="auto" />

      <Text>Type: {type}</Text>
      <Text>Data: {data}</Text>
      <Text>Local Escaneado: {local}</Text>


      <Button
  
      title="Escanear" onPress={()=>setModalVisible(true)}/>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    height:100,
    width: 375,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'space-around',
    backgroundColor:'#fff',
  },
});
