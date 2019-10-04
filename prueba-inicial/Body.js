import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Body(props) {
  return (
    <View style={styles.container}>
      <Text>{props.numero}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#2c3e54',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
