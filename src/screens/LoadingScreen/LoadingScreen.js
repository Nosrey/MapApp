import React from 'react';
import { View, Text, ActivityIndicator, Image, StyleSheet } from 'react-native';
// import { map_app_icon } de la carpeta src/assets/image
import map_app_icon from '../../assets/images/map_app_icon.png';


/**
 * LoadingScreen component.
 *
 * @returns {JSX.Element} The LoadingScreen component.
 */
const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={map_app_icon} style={styles.image} />
      <Text style={styles.text}>Loading...</Text>
      <ActivityIndicator size="100" color="#0000ff" style={styles.loader} />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: "20%",
    backgroundColor: "white"
  },
  image: {
    // haz que el width sea ajustado al tamaño de la pantalla y sea el 50%
    height: '50%',
    // que la imagen se muestre completa
    resizeMode: 'contain',
  },
  loader: {
    padding: 0,
    // quitale el espacio vacio para que solo ocupe el loader
    margin: 0,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  }
});