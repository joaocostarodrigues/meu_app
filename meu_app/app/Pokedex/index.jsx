import React, { useState, useEffect } from 'react'; 
import { View, Text, StyleSheet, FlatList, ActivityIndicator, ImageBackground, Image, Picker, Button } from 'react-native';


const PokemonScreen = () => {
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('all');
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(20);

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/type');
        const data = await response.json();
        setTypes(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchPokemons = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
        const data = await response.json();
        setPokemons(data.results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTypes();
    fetchPokemons();
  }, [limit]);

  useEffect(() => {
    const fetchFilteredPokemons = async () => {
      if (selectedType === 'all') return;
      setLoading(true);
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${selectedType}`);
        const data = await response.json();
        setPokemons(data.pokemon.map(p => p.pokemon));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchFilteredPokemons();
  }, [selectedType]);

  const renderItem = ({ item }) => (
    <View style={styles.pokemonContainer}>
      <Image 
        source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.url.split('/')[6]}.png` }} 
        style={styles.pokemonImage} 
      />
      <Text style={styles.pokemonName}>{item.name}</Text>
    </View>
  );

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Pokémons</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedType}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedType(itemValue)}
          >
            <Picker.Item label="All Types" value="all" />
            {types.map(type => (
              <Picker.Item key={type.name} label={type.name} value={type.name} />
            ))}
          </Picker>
        </View>
        <Button title="Carregar Mais" onPress={() => setLimit(limit + 20)} color="#6200EE" />
        {loading ? (
          <ActivityIndicator size="large" color="#ffffff" />
        ) : (
          <FlatList
            data={pokemons}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
            contentContainerStyle={styles.list}
          />
        )}
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    borderRadius: 15,
    margin: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6200EE',
    marginBottom: 20,
  },
  pickerContainer: {
    width: '80%',
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  list: {
    paddingBottom: 20,
  },
  pokemonContainer: {
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    width: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  pokemonImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  pokemonName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default PokemonScreen;
