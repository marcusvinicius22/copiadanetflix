import React, { Component } from 'react';
import NavigationBar from 'react-native-navbar-color';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  StatusBar,
} from 'react-native';

class App extends Component {
  componentDidMount() {
    NavigationBar.setColor('black');
  }

  render() {
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <ScrollView style={{ backgroundColor: '#000', padding: 10 }}>
          <Text style={styles.Title}>Continuar assistindo como S.Vidal</Text>
          <ScrollView
            horizontal={true}
            contentContainerStyle={styles.container}>
            <View style={styles.block}>
              <Image
                style={styles.imageFilm}
                source={require('./assets/teste.jpeg')}
              />
            </View>
            <View style={styles.block}>
              <Image
                style={styles.imageFilm}
                source={require('./assets/teste.jpeg')}
              />
            </View>
            <View style={styles.block}>
              <Image
                style={styles.imageFilm}
                source={require('./assets/teste.jpeg')}
              />
            </View>
            <View style={styles.block}>
              <Image
                style={styles.imageFilm}
                source={require('./assets/teste.jpeg')}
              />
            </View>
            <View style={styles.block}>
              <Image
                style={styles.imageFilm}
                source={require('./assets/teste.jpeg')}
              />
            </View>
            <View style={styles.block}>
              <Image
                style={styles.imageFilm}
                source={require('./assets/teste.jpeg')}
              />
            </View>
          </ScrollView>
          <Text style={styles.Title}>Assistir novamente</Text>
          <ScrollView
            horizontal={true}
            contentContainerStyle={styles.container}>
            <View style={styles.block}>
              <Image
                style={styles.imageFilm}
                source={require('./assets/teste.jpeg')}
              />
            </View>
            <View style={styles.block}>
              <Image
                style={styles.imageFilm}
                source={require('./assets/teste.jpeg')}
              />
            </View>
            <View style={styles.block}>
              <Image
                style={styles.imageFilm}
                source={require('./assets/teste.jpeg')}
              />
            </View>
            <View style={styles.block}>
              <Image
                style={styles.imageFilm}
                source={require('./assets/teste.jpeg')}
              />
            </View>
            <View style={styles.block}>
              <Image
                style={styles.imageFilm}
                source={require('./assets/teste.jpeg')}
              />
            </View>
            <View style={styles.block}>
              <Image
                style={styles.imageFilm}
                source={require('./assets/teste.jpeg')}
              />
            </View>
          </ScrollView>
          <Text style={styles.Title}>Em alta</Text>
          <ScrollView
            horizontal={true}
            contentContainerStyle={styles.container}>
            <View style={styles.block}>
              <Image
                style={styles.imageFilm}
                source={require('./assets/teste.jpeg')}
              />
            </View>
            <View style={styles.block}>
              <Image
                style={styles.imageFilm}
                source={require('./assets/teste.jpeg')}
              />
            </View>
            <View style={styles.block}>
              <Image
                style={styles.imageFilm}
                source={require('./assets/teste.jpeg')}
              />
            </View>
            <View style={styles.block}>
              <Image
                style={styles.imageFilm}
                source={require('./assets/teste.jpeg')}
              />
            </View>
            <View style={styles.block}>
              <Image
                style={styles.imageFilm}
                source={require('./assets/teste.jpeg')}
              />
            </View>
            <View style={styles.block}>
              <Image
                style={styles.imageFilm}
                source={require('./assets/teste.jpeg')}
              />
            </View>
          </ScrollView>
          <Text style={styles.Title}>Comédia</Text>
          <ScrollView
            horizontal={true}
            contentContainerStyle={styles.container}>
            <View style={styles.block}>
              <Image
                style={styles.imageFilm}
                source={require('./assets/teste.jpeg')}
              />
            </View>
            <View style={styles.block}>
              <Image
                style={styles.imageFilm}
                source={require('./assets/teste.jpeg')}
              />
            </View>
            <View style={styles.block}>
              <Image
                style={styles.imageFilm}
                source={require('./assets/teste.jpeg')}
              />
            </View>
            <View style={styles.block}>
              <Image
                style={styles.imageFilm}
                source={require('./assets/teste.jpeg')}
              />
            </View>
            <View style={styles.block}>
              <Image
                style={styles.imageFilm}
                source={require('./assets/teste.jpeg')}
              />
            </View>
            <View style={styles.block}>
              <Image
                style={styles.imageFilm}
                source={require('./assets/teste.jpeg')}
              />
            </View>
          </ScrollView>
          <Text style={styles.Title}>Romance</Text>
          <ScrollView
            horizontal={true}
            contentContainerStyle={styles.container}>
            <View style={styles.block}>
              <Image
                style={styles.imageFilm}
                source={require('./assets/pornozin.jpeg')}
              />
            </View>
            <View style={styles.block}>
              <Image
                style={styles.imageFilm}
                source={require('./assets/pornozin.jpeg')}
              />
            </View>
            <View style={styles.block}>
              <Image
                style={styles.imageFilm}
                source={require('./assets/pornozin.jpeg')}
              />
            </View>
            <View style={styles.block}>
              <Image
                style={styles.imageFilm}
                source={require('./assets/pornozin.jpeg')}
              />
            </View>
            <View style={styles.block}>
              <Image
                style={styles.imageFilm}
                source={require('./assets/pornozin.jpeg')}
              />
            </View>
            <View style={styles.block}>
              <Image
                style={styles.imageFilm}
                source={require('./assets/pornozin.jpeg')}
              />
            </View>
          </ScrollView>
          <Text style={styles.Title}>Recomendações</Text>
          <ScrollView
            horizontal={true}
            contentContainerStyle={styles.container}>
            <View style={styles.block}>
              <Image
                style={styles.imageFilm}
                source={require('./assets/teste.jpeg')}
              />
            </View>
            <View style={styles.block}>
              <Image
                style={styles.imageFilm}
                source={require('./assets/teste.jpeg')}
              />
            </View>
            <View style={styles.block}>
              <Image
                style={styles.imageFilm}
                source={require('./assets/teste.jpeg')}
              />
            </View>
            <View style={styles.block}>
              <Image
                style={styles.imageFilm}
                source={require('./assets/teste.jpeg')}
              />
            </View>
            <View style={styles.block}>
              <Image
                style={styles.imageFilm}
                source={require('./assets/teste.jpeg')}
              />
            </View>
            <View style={styles.block}>
              <Image
                style={styles.imageFilm}
                source={require('./assets/teste.jpeg')}
              />
            </View>
          </ScrollView>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageFilm: {
    height: 170,
    width: 120,
    borderRadius: 4,
  },
  Title: {
    color: 'white',
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  block: {
    width: 120,
    height: 170,
    marginBottom: 30,
    marginRight: 10,
    borderRadius: 4,
  },
});

export default App;
