import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Link href="/Profile/perfil" style={styles.headerText}>
        João Vitor da Costa Rodrigues
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#6200EE',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 4, 
  },
  headerText: {
    color: 'white',
    fontSize: 20, 
    fontWeight: 'bold',
    paddingVertical: 10, 
    textAlign: 'center',
  },
});

export default Header;
