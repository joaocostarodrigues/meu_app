import React from "react"; 
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import Header from "../../Header/Header";
import { Link } from 'expo-router';

const filmes = [
  { id: '1', titulo: 'FORREST GUMP', imagem: 'https://upload.wikimedia.org/wikipedia/pt/c/c0/ForrestGumpPoster.jpg' },
  { id: '2', titulo: 'HOMEM ARANHA 2', imagem: 'https://br.web.img2.acsta.net/pictures/210/544/21054460_2013103118041242.jpg' },
  { id: '3', titulo: 'PULP FICTION', imagem: 'https://upload.wikimedia.org/wikipedia/pt/8/82/Pulp_Fiction_cover.jpg' },
  { id: '4', titulo: 'DJANGO LIVRE', imagem: 'https://br.web.img2.acsta.net/medias/nmedia/18/90/07/53/20391069.jpg' },
];

export default function Filmes() {
  const renderItem = ({ item }) => (
    <View style={styles.filmeContainer}>
      <Image 
        source={typeof item.imagem === 'string' ? { uri: item.imagem } : item.imagem} 
        style={styles.filmeImagem} 
      />
      <Text style={styles.filmeTitulo}>{item.titulo}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Link href="/Profile/perfil" style={styles.homeButton}>HOME</Link>
        <Text style={styles.title}>Filmes</Text>
        <FlatList
          data={filmes}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2} // Para exibir os filmes em duas colunas
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
  filmeContainer: {
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
  filmeImagem: {
    width: 150,
    height: 225,
    borderRadius: 10,
  },
  filmeTitulo: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
});
