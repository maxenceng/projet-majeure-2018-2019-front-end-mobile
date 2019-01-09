import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import t from 'tcomb-form-native'; // 0.6.9
import navigationOptions from '../utils/navigationOptions';
import MessageExample from '../containers/MessageExample';
import ButtonExample from '../containers/ButtonExample';
import Layout from './Layout';

const Form = t.form.Form;

const User = t.struct({
  username: t.String,
  password: t.String,
});

export default class SignIn extends React.Component {
  static navigationOptions = navigationOptions('SignIn');

  render() {
    const { navigation: { navigate } } = this.props;
    return (
      <Layout>
        <View style={styles.container}>
          <Form 
            ref={c => this._form = c}
            type={User}
          />
          <Button
          title="Sign In"
          onPress={this.handleSubmit, () => navigate('Events')}
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
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
