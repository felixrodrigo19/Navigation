import * as React from 'react';
import { View, Platform, TouchableOpacity } from 'react-native';
import {
  DefaultTheme,
  Provider as PaperProvider,
  Appbar,Button,
  Text,
  BottomNavigation,
} from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Profile from './components/Profile/index';
import ProfileEditar from './components/Profile/editar';
import ProfileVerificar from './components/Profile/verificar';
import Telefones from './components/Telefones/index';
import TelefonesAdicionar from './components/Telefones/adicionar';
import TelefonesExcluir from './components/Telefones/excluir';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Profile">
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Editar" component={ProfileEditar} />
            <Stack.Screen name="Verificar" component={ProfileVerificar} />
            <Stack.Screen name="Contatos" component={Telefones} />
            <Stack.Screen name="Adicionar" component={TelefonesAdicionar} />
            <Stack.Screen name="Excluir" component={TelefonesExcluir} />
          </Stack.Navigator>
        </NavigationContainer>
             </PaperProvider>
    );
  }
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#F2F2F2',
  },
};

export default App;
