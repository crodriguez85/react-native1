import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Componentes
import Header from './componentes/Header';
import Body from './componentes/Body';

export default function App() {

  const [tareas, setTareas] = useState([]);
  const [texto, setTexto] = useState('');

  const establecerTexto = (value) => {
    console.log(value)
    setTexto(value);
  } 

  return (
    <View style={styles.container}>
      <Header
        cambiarTexto={establecerTexto}
      />
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
