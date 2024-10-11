import React from "react"; 
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import Header from "../../Header/Header";
import { Link } from 'expo-router';

const jogos = [
  { id: '1', titulo: 'CS:GO', imagem: 'https://pt.egamersworld.com/_next/image?url=https%3A%2F%2Fegamersworld.com%2Fuploads%2Fblog%2F1696414021417.jpg&w=1920&q=75' },
  { id: '2', titulo: 'MINECRAFT', imagem: 'https://upload.wikimedia.org/wikipedia/pt/9/9c/Minecraft_capa.png' },
  { id: '3', titulo: 'THE FOREST', imagem: 'https://image.api.playstation.com/vulcan/ap/rnd/202009/3001/vx7oooKnjSCRqOdlodz8vVLC.png' },
  { id: '4', titulo: 'SPORE', imagem: 'https://upload.wikimedia.org/wikipedia/pt/thumb/3/3e/Spore_capa.jpg/250px-Spore_capa.jpg' },
];

export default function Jogos() {
  const renderItem = ({ item }) => (
    <View style={styles.jogoContainer}>
      <Image 
        source={typeof item.imagem === 'string' ? { uri: item.imagem } : item.imagem} 
        style={styles.jogoImagem} 
      />
      <Text style={styles.jogoTitulo}>{item.titulo}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Link href="/Profile/perfil" style={styles.homeButton}>HOME</Link>
        <Text style={styles.title}>Jogos</Text>
        <FlatList
          data={jogos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2} // Para exibir os jogos em duas colunas
          contentContainerStyle={styles.lista}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeButton: {
    backgroundColor: '#6200EE',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
    width: 200,
    marginTop: 60,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    paddingTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: '#6200EE', 
  },
  lista: {
    alignItems: 'center',
  },
  jogoContainer: {
    margin: 10,
    alignItems: 'center',
    backgroundColor: '#fff', 
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, 
    padding: 5,
  },
  jogoImagem: {
    width: 150,
    height: 225,
    borderRadius: 10,
  },
  jogoTitulo: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
});
