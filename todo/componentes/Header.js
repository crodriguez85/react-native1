import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default function Header() {
    return ( 
        <View style={styles.container}>
            <Text>Header</Text>
            <TextInput
                style={styles.texto}
                placeholder="Aqui Vescribe tu texto"
                onChangeText={(value) => {console.log(value)}}
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