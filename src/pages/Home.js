import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';
import navigationOptions from '../utils/navigationOptions';
import { COLOR_TITLE } from '../helpers/common';


const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 20,
    height: '70%',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLOR_TITLE,
  },
  description: {
    marginTop: 10,
    fontSize: 10,
    textAlign: 'center',
    color: COLOR_TITLE,
  },
  buttons: {
    alignItems: 'center',
  },
  button: {
    margin: 10,
  },
});

export default class Home extends React.Component {
  static navigationOptions = navigationOptions('Home');

  render() {
    const { navigation: { navigate } } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View>
            <Text style={styles.title}>WeMe</Text>
            <Text style={styles.description}>New Events, New Friends</Text>
          </View>
          <View style={styles.buttons}>
            <Button style={styles.button} onPress={() => navigate('SignIn')}>
              Sign In
            </Button>
            <Button style={styles.button} onPress={() => navigate('SignUp')}>
              Sign Up
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
