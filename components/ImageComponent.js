import React from 'react';
import { Image, StyleSheet } from 'react-native';

// Componente para mostrar una imagen
const ImageComponent = () => {
  return (
    <Image 
      source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} 
      style={styles.image} 
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});

export default ImageComponent;