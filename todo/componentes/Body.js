import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Body (){
    return ( 
        <View style={styles.container}>
            <Text>Body</Text>
        </View>
     );
}
 
const styles = StyleSheet.create({
    container: {
      flex: 9,
      backgroundColor: '#98FB98',
      alignItems: 'center',
      justifyContent: 'center',
    }
});