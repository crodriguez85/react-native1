import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [numero, setNumero] = useState(2);

  return (
    <View style={styles.container}>
      <Text>Leon Chile Me Voy</Text>
      <View style={styles.cajaUno}>
        <Text>Contador</Text>
      </View>
      <View style={styles.cajaDos}>
        <Text>{numero}</Text>
      </View>
      <View style={styles.cajaTres}>
        <Button
          title="Aumentar"
          onPress={() => {console.log('Aumentar')}}
          >

        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cajaUno:{
    flex: 1,
    backgroundColor: '#00ff00',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cajaDos:{
    flex: 3,
    backgroundColor: '#90EE90',
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  cajaTres:{
    flex: 1,
    backgroundColor: '#006400'
    
  }
});
