import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Componentes
import Header from './componentes/Header';
import Body from './componentes/Body';

export default function App() {

  const [tareas, setTareas] = useState([]);

  return (
    <View style={styles.container}>
      <Header/>
      <Body/>   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
