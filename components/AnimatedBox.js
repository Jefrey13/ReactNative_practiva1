import React from 'react';
import { View, Text, StyleSheet, Animated, Button } from 'react-native';

// Componente para manejar la animación de desvanecimiento con la API Animated
const AnimatedBox = () => {
  const fadeAnim = new Animated.Value(0); // Valor animado inicial de 0

  // Función para iniciar la animación de desvanecimiento (fade in)
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1, // Opacidad final
      duration: 2000, // Duración en milisegundos
      useNativeDriver: true, // Uso del driver nativo para mejor rendimiento
    }).start();
  };

  // Función para iniciar la animación de desvanecimiento (fade out)
  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0, // Opacidad final
      duration: 2000, // Duración en milisegundos
      useNativeDriver: true, // Uso del driver nativo para mejor rendimiento
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, { opacity: fadeAnim }]}>
        <Text style={styles.text}>Animación con Animated API</Text>
      </Animated.View>
      <Button title="Fade In" onPress={fadeIn} />
      <Button title="Fade Out" onPress={fadeOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});

export default AnimatedBox;