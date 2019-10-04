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

  const agregartarea = () => {
    setTareas([
      ...tareas,
      texto
    ])
    setTexto('');
  }

  return (
    <View style={styles.container}>
      <Header
        texto={texto}
        cambiarTexto={establecerTexto}
        agregar={agregartarea}
      />
      <Text>{texto}</Text>
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
