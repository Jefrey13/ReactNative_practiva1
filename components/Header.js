import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Componente de encabezado
const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Aplicación de Práctica</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Header;