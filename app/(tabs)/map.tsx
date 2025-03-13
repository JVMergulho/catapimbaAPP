import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Map = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Página não implementada</Text>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F4F4', // Fundo claro para um visual clean
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});
