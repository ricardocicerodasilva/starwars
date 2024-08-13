import React, { useEffect, useState } from 'react';//useEfect pergunta o estado para o useState o estado e executa a ação
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';

const request = async (callback) => {
  const response = await fetch('https://swapi.dev/api/starships/');
  const parsed = await response.json();
  callback(parsed.results);
};

export default function App() {
  const [registros, setRegistros] = useState([]); //useState verifica o estado do componente. 
  useEffect(() => {
    request(setRegistros);

  }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.Titulo}>Usando API do Star Wars</Text>
      <FlatList  // estrutura de looping
        data={registros}
        keyExtractor={(item) => item.name.toString()}
        renderItem={({ item }) =>
          <Text style={styles.item}>
            <Text>Nave: {item.name}{'\n'}</Text>
            <Text>Modelo: {item.model}{'\n'}</Text>
            <Text>Usando: {item.manufacturer}{'\n'}</Text>
          </Text>
        }
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item:{
    fontSize:18,
    backgroundColor:'#00FFFF',
padding:10,
margin:8,
borderRadius:15
  },
  Titulo:{
    marginVertical:50,
    fontSize:30
  }
});
