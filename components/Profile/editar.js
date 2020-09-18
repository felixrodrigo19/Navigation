import * as React from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

function EditScreen({ navigation, route }) {
  const [nome, email, setnomeText, setEmailText] = React.useState('');

  return (
    <>
      <TextInput
        placeholder="Nome"
        style={{ backgroundColor: 'white' }}
        value={nome}
        onChangeText={setnomeText}
      />
      <TextInput
        placeholder="E-mail"
        style={{ backgroundColor: 'white' }}
        value={email}
        onChangeText={setEmailText}
      />
      <Button
        title="Confirmar"
        onPress={() => {
          // Pass params back to home screen
          navigation.navigate('Profile', { nome: nome, email: email });
        }}
      />
    </>
  );
}

var styles = StyleSheet.create({
  mainviewStyle: {
    flex: 1,
    flexDirection: 'column',
    position: 'absolute',
    left: 0,
    alignItems: 'stretch',
    right: 0,
    bottom: -10,
    height: 80,
  },
});

export default EditScreen;
