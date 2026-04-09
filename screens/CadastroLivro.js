import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function CadastroLivro({ navigation, livros, setLivros }) {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [paginas, setPaginas] = useState('');

  const validarCadastro = () => {
    if (!titulo.trim() || !autor.trim()) {
      Alert.alert('Erro', 'Título e Autor são obrigatórios!');
      return false;
    }
    const paginasNum = parseInt(paginas);
    if (isNaN(paginasNum) || paginasNum <= 0) {
      Alert.alert('Erro', 'Número de páginas deve ser maior que 0!');
      return false;
    }
    return true;
  };

  const cadastrar = () => {
    if (!validarCadastro()) return;

    const novoLivro = { titulo, autor, paginas: parseInt(paginas) };
    setLivros([...livros, novoLivro]);
    Alert.alert('Sucesso', 'Livro cadastrado!');
    setTitulo('');
    setAutor('');
    setPaginas('');
    navigation.navigate('ListaLivros');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título:</Text>
      <TextInput style={styles.input} value={titulo} onChangeText={setTitulo} />
      <Text style={styles.label}>Autor:</Text>
      <TextInput style={styles.input} value={autor} onChangeText={setAutor} />
      <Text style={styles.label}>Número de páginas:</Text>
      <TextInput style={styles.input} value={paginas} onChangeText={setPaginas} keyboardType="numeric" />
      <View style={{ marginTop:20 }}>
        <Button title="Cadastrar" onPress={cadastrar} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding:20 },
  label: { fontSize:16, fontWeight:'bold', marginTop:15 },
  input: { borderWidth:1, borderColor:'#ccc', padding:10, borderRadius:5, marginTop:5 }
});