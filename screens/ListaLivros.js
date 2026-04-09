import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function ListaLivros({ livros }) {
  if (livros.length === 0) {
    return (
      <View style={styles.container}>
        <Text>Nenhum livro cadastrado.</Text>
      </View>
    );
  }

  const renderItem = ({ item, index }) => (
    <View style={styles.card}>
      <Text>{index + 1}. {item.titulo}</Text>
      <Text>Autor: {item.autor}</Text>
      <Text>Páginas: {item.paginas}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={livros}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding:20 },
  card: { borderWidth:1, borderColor:'#ccc', padding:15, borderRadius:5, marginBottom:10 }
});