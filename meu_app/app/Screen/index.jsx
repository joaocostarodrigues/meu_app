import { Link } from 'expo-router';
import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const App = () => {
  return (
    <View style={styles.container}>
      <Link href="/" style={styles.homeButton}>
        <Text style={styles.buttonText}>HOME</Text>
      </Link>
      <LinearGradient
        colors={['#000000', '#000000']} // Gradiente preto fixo
        style={styles.background}
      />
      <Image
        source={require('./img/razer.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeButton: {
    backgroundColor: '#ff0000', // Cor do botão
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', // Fundo preto
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    opacity: 1, // Sem transparência
  },
  logo: {
    width: 150,
    height: 150,
  },
});

export default App;
