import React, { useState } from 'react';
import { Link } from 'expo-router';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const TaskListApp = () => {
  const [tasks, setTasks] = useState([
    { id: '1', text: 'trabalho', completed: false },
    { id: '2', text: 'limpar casa', completed: true },
    { id: '3', text: 'escola', completed: false },
    { id: '4', text: 'almoço', completed: true },
    { id: '5', text: 'mercado', completed: false },
  ]);

  const toggleTaskCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => toggleTaskCompletion(item.id)}>
      <View style={[styles.taskContainer, item.completed && styles.completedContainer]}>
        <Text style={[styles.taskText, item.completed && styles.completedText]}>
          {item.text}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Link href="/" style={styles.homeButton}>HOME</Link>
      <View style={styles.listWrapper}>
        <FlatList
          data={tasks}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeButton: {
    backgroundColor: '#6200EE',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
    width: 120,
    marginBottom: 20,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  listWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  listContainer: {
    alignItems: 'center',
  },
  taskContainer: {
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    width: '100%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'flex-start',
  },
  taskText: {
    fontSize: 18,
    color: '#333',
    flexWrap: 'wrap',
  },
  completedContainer: {
    backgroundColor: '#d3ffd3',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
});

export default TaskListApp;
