import React from 'react';
import {
  View, Text, StyleSheet,
}
  from 'react-native';

import navigationOptions from '../utils/navigationOptions';
// import MessageExample from '../containers/MessageExample';
// import ButtonExample from '../containers/ButtonExample';
// import Layout from './Layout';


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  title: {
    marginTop: 103,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  description: {
    marginTop: 10,
    fontSize: 10,
    textAlign: 'center',
    color: '#34495e',
  },
  signIn: {
    marginTop: 130,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  signUp: {
    marginTop: 15,
    fontSize: 20,
  },
});

export default class People extends React.Component {
  static navigationOptions = navigationOptions('People');

  render() {
    return (
      <View style={{ width: 300, marginLeft: 25 }}>
        <View>
          <Text style={styles.title}>PEOPLE</Text>
        </View>
        <View>
          <Text style={styles.description}>New Events, New Friends</Text>
        </View>
      </View>
    );
  }
}
