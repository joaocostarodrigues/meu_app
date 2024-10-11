import { Link } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Modal, Pressable } from 'react-native';

const App = () => {
  const [balance, setBalance] = useState(7320.92);
  const [amount, setAmount] = useState('');
  const [modalDepositarVisible, setModalDepositarVisible] = useState(false);
  const [modalSacarVisible, setModalSacarVisible] = useState(false);

  const depositar = () => {
    const value = parseFloat(amount);
    if (!isNaN(value) && value > 0) {
      const bonus = value * 0.01;
      setBalance((prevBalance) => prevBalance + value + bonus);
      setModalDepositarVisible(false);
      setAmount('');
    }
  };

  const sacar = () => {
    const value = parseFloat(amount);
    if (!isNaN(value) && value > 0) {
      const penalty = value * 0.025;
      if (balance >= value + penalty) {
        setBalance((prevBalance) => prevBalance - value - penalty);
      } else {
        alert("Saldo insuficiente para realizar o saque com a penalidade.");
      }
      setModalSacarVisible(false);
      setAmount('');
    }
  };

  return (
    <View style={styles.container}>
      <Link href="/" style={styles.homeButton}>HOME</Link>
      <View style={styles.balanceContainer}>
        <Image source={require('./sicoob.png')} style={styles.logo} resizeMode="contain" />
        <Text style={styles.balanceText}>Saldo Atual:</Text>
        <Text style={styles.balanceAmount}>R$ {balance.toFixed(2)}</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Digite o valor"
          value={amount}
          onChangeText={setAmount}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.actionButton} onPress={() => setModalDepositarVisible(true)}>
            <Text style={styles.buttonText}>Depositar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={() => setModalSacarVisible(true)}>
            <Text style={styles.buttonText}>Sacar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalSacarVisible}
        onRequestClose={() => setModalSacarVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Confirme a retirada</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={sacar}
            >
              <Text style={styles.textStyle}>Confirmar</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalSacarVisible(false)}
            >
              <Text style={styles.textStyle}>Cancelar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalDepositarVisible}
        onRequestClose={() => setModalDepositarVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Confirme o depósito</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={depositar}
            >
              <Text style={styles.textStyle}>Confirmar</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalDepositarVisible(false)}
            >
              <Text style={styles.textStyle}>Cancelar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  homeButton: {
    backgroundColor: '#00343F',
    color: '#fff',
    padding: 12,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 16,
    width: '80%',
    marginBottom: 20,
    elevation: 3,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A9A7AA',
    padding: 20,
  },
  balanceContainer: {
    marginBottom: 20,
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 5,
  },
  balanceText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#009A8E',
  },
  balanceAmount: {
    fontSize: 32,
    color: '#72AA25',
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 20,
    fontSize: 18,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00343F',
    borderRadius: 8,
    padding: 15,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  buttonClose: {
    backgroundColor: '#FF5733',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
  },
});

export default App;
