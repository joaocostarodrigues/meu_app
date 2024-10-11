import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import Header from '../Header/Header'; 
import { Link } from 'expo-router';

export default function Perfil() {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Sobre Mim</Text>
      <Text style={styles.paragrafo}>
        Bem Vindo(a) a minha página! Meu nome é João Vitor tenho 17 anos e estou cursando o terceiro ano do ensino medio, gosto muito de jogos e de filmes.
      </Text>
      <Image 
        source={{ uri: 'https://yt3.googleusercontent.com/ZxQnV830A7dxqxv4rPFXGfEzmPOdKpyyg0-tfxKRh5OEfQe5ATXQgKr4SChJv2TZlYcaouIvABU=s160-c-k-c0x00ffffff-no-rj' }}
        style={styles.profileImage}
      />
      <View style={styles.buttonContainer}>
        <Link href="/Profile/Jogos" style={styles.button}>
          <Text style={styles.buttonText}>Jogos</Text>
        </Link>
        <Link href="/Profile/Filmes" style={styles.button}>
          <Text style={styles.buttonText}>Filmes</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginVertical: 20,
    borderWidth: 3,
    borderColor: '#6200EE', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  button: {
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#6200EE',
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 4, 
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragrafo: {
    width: '100%',
    maxWidth: 300,
    marginTop: 10,
    textAlign: 'center', 
    lineHeight: 22, 
    color: '#333', 
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center', 
  },
});
