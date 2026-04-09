import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à Livraria!</Text>
      <View style={styles.btn}>
        <Button title="Cadastrar Livro" onPress={() => navigation.navigate('CadastroLivro')} />
      </View>
      <View style={styles.btn}>
        <Button title="Listar Livros" onPress={() => navigation.navigate('ListaLivros')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center', padding:20 },
  title: { fontSize:24, fontWeight:'bold', marginBottom:30 },
  btn: { marginVertical:10, width:'60%' }
});