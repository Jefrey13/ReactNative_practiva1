import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Header from './components/Header';
import SvgComponent from './components/SvgComponent';
import AnimatedBox from './components/AnimatedBox';
import AnimatedReanimatedBox from './components/AnimatedReanimatedBox';
import ImageComponent from './components/ImageComponent';
import FetchData from './components/FetchData';
import RefreshableScrollView from './components/RefreshableScrollView';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <RefreshableScrollView>
        <Header />
        <SvgComponent />
        <AnimatedBox />
        <AnimatedReanimatedBox />
        <ImageComponent />
        <FetchData />
      </RefreshableScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});

export default App;