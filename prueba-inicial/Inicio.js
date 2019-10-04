import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Inicio(props) {
  return (
    <View style={styles.container}>
      <Text>{props.name}</Text>
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
});
