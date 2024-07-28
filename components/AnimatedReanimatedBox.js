import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Animated, { Easing, useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

// Componente para manejar la animación de desvanecimiento con react-native-reanimated
const AnimatedReanimatedBox = () => {
  const opacity = useSharedValue(0); // Valor compartido inicial de 0

  // Función para iniciar la animación de desvanecimiento (fade in)
  const fadeIn = () => {
    opacity.value = withTiming(1, {
      duration: 2000, // Duración en milisegundos
      easing: Easing.inOut(Easing.ease), // Función de aceleración
    });
  };

  // Función para iniciar la animación de desvanecimiento (fade out)
  const fadeOut = () => {
    opacity.value = withTiming(0, {
      duration: 2000, // Duración en milisegundos
      easing: Easing.inOut(Easing.ease), // Función de aceleración
    });
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value, // Aplica la opacidad animada
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]}>
        <Text style={styles.text}>Animación con Reanimated API</Text>
      </Animated.View>
      <Button title="Fade In Reanimated" onPress={fadeIn} />
      <Button title="Fade Out Reanimated" onPress={fadeOut} />
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

export default AnimatedReanimatedBox;