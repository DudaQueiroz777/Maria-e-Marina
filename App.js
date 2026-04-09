import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import CadastroLivro from './screens/CadastroLivro';
import ListaLivros from './screens/ListaLivros';

const Stack = createNativeStackNavigator();

export default function App() {
  const [livros, setLivros] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {props => <HomeScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="CadastroLivro">
          {props => <CadastroLivro {...props} livros={livros} setLivros={setLivros} />}
        </Stack.Screen>
        <Stack.Screen name="ListaLivros">
          {props => <ListaLivros {...props} livros={livros} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}