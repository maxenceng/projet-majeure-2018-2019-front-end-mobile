import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';

import navigationOptions from '../utils/navigationOptions';
// import MessageExample from '../containers/MessageExample';
// import ButtonExample from '../containers/ButtonExample';
import Layout from './Layout';

export default class Home extends React.Component {
  static navigationOptions = navigationOptions('Home');

  render() {
    const { navigation: { navigate } } = this.props;
    return (
      <Layout>
        <View>
          <Text style ={styles.title}>WeMe</Text>
          <Button
            title="Sign In"
            onPress={() => navigate('SignIn')}
          />
          <Button
            title="Sign Up"
            onPress={() => navigate('SignUp')}
          />
        </View>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    color: '#34495e',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
