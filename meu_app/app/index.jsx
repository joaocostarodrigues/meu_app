import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View style={styles.container}>
      <Link href="./Banco/banco" style={styles.button}>
        Banco
      </Link>
      <Link href="./Calculadora" style={styles.button}>
        Calculadora
      </Link>
      <Link href="./Tarefas" style={styles.button}>
        Tarefas
      </Link>
      <Link href="./Screen" style={styles.button}>
        Screen
      </Link>
      <Link href="./Profile/perfil" style={styles.button}>
        Perfil
      </Link>
      <Link href="./Pokedex" style={styles.button}>
        Pokedex
      </Link>
      <Link href="./Ifome" style={styles.button}>
        Ifome
      </Link>
      <Link href="./Celular" style={styles.button}>
        Celular
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  button: {
    backgroundColor: '#6200EE', 
    color: '#fff',
    padding: 15,
    marginVertical: 10,
    fontSize: 18,
    borderRadius: 5,
    width: '80%', 
    textAlign: 'center',
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});