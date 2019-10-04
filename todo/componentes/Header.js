import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default function Header(props) {
    return ( 
        <View style={styles.container}>
            <Text>Header</Text>
            <TextInput
                style={styles.texto}
                placeholder="Aqui Vescribe tu texto"
                onChangeText={props.cambiarTexto}
                onSubmitEditing={props.agregar}
                value={props.texto}
             />
        </View>
     );
}
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00ff00',
      alignItems: 'center',
      justifyContent: 'center',
    },
    texto : {
        paddingHorizontal: 16
    }
});