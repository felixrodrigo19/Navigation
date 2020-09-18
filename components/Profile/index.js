import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Avatar, Headline, Subheading, Button, Card } from 'react-native-paper';


function Profile({ navigation, route }) {

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.headerContent}>
          <Avatar.Image source={require('../assets/download.jpg')} />

          <Headline>Crudirilia</Headline>
          <Subheading>pruscerkoi@fipa.com</Subheading>
          <Subheading>Bidion</Subheading>
        </View>
      </View>
      <View>
        <Card>
          <Card.Actions style={styles.body}>
            <Button icon="edit" onPress={() => navigation.navigate('Editar')}>
              Editar
            </Button>
            <Button
              icon="check"
              onPress={() => navigation.navigate('Verificar')}>
              Verificar
            </Button>
          </Card.Actions>
          <Card.Actions>
            <Button onPress={() => navigation.navigate('Contatos')}>
              Contatos
            </Button>
          </Card.Actions>
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },

  body: {
    alignItems: 'center',
  },
});

export default Profile;
