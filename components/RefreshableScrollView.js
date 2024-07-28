import React, { useState } from 'react';
import { ScrollView, RefreshControl, StyleSheet } from 'react-native';

// Componente para manejar el desplazamiento y la actualización mediante "Pull to Refresh"
const RefreshableScrollView = ({ children }) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000); // Simula una actualización de datos
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default RefreshableScrollView;