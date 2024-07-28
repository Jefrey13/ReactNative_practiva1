import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';
import LoadingIndicator from './LoadingIndicator';
import Item from './Item';

// Componente para obtener y mostrar datos desde una API
const FetchData = () => {
  const [loading, setLoading] = useState(true); // Estado de carga
  const [data, setData] = useState([]); // Estado de los datos
  const [error, setError] = useState(null); // Estado de error

  // Efecto para obtener datos cuando el componente se monta
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setData(response.data); // Guardar datos obtenidos
        setLoading(false); // Cambiar estado de carga
      })
      .catch(error => {
        setError(error); // Guardar error
        setLoading(false); // Cambiar estado de carga
      });
  }, []);

  if (loading) {
    return <LoadingIndicator />; // Mostrar indicador de carga
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error al cargar los datos</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={data} // Datos para la lista
      keyExtractor={item => item.id.toString()} // Clave única para cada elemento
      renderItem={({ item }) => <Item title={item.title} body={item.body} />} // Componente para renderizar cada elemento
      ItemSeparatorComponent={() => <View style={styles.separator} />} // Componente separador
    />
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 18,
  },
  separator: {
    height: 1,
    backgroundColor: '#cccccc',
  },
});

export default FetchData;