import React from 'react';
import {
  View, Text, Button, StyleSheet,
}
  from 'react-native';
import navigationOptions from '../utils/navigationOptions';


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
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

export default class Home extends React.Component {
  static navigationOptions = navigationOptions('Home');

  render() {
    const { navigation: { navigate } } = this.props;
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>WeMe</Text>
        </View>
        <View>
          <Text style={styles.description}>New Events, New Friends</Text>
        </View>
        <View style={styles.signIn}>
          <Button
            style={{ marginBottom: 60 }}
            title="Sign In"
            onPress={() => navigate('SignIn')}
          />
        </View>
        <View style={styles.signUp}>
          <Button
            title="Sign Up"
            onPress={() => navigate('SignUp')}
          />
        </View>
      </View>
    );
  }
}
