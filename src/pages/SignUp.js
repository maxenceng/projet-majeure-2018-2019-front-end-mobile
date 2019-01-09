import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import t from 'tcomb-form-native'; // 0.6.9
import navigationOptions from '../utils/navigationOptions';
import Layout from './Layout';

const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  username: t.String,
  password: t.String,
  terms: t.Boolean
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10,
    },
  },
  controlLabel: {
    normal: {
      color: 'blue',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600',
    },
    // the style applied when a validation error occours
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600',
    },
  },
}

const options = {
  fields: {
    email: {
      error: 'Without an email address how are you going to reset your password when you forget it?'
    },
    password: {
      error: 'Choose something you use on a dozen other sites or something you won\'t remember'
    },
    terms: {
      label: 'Agree to Terms',
    },
  },
  stylesheet: formStyles,
};


export default class SignUp extends React.Component {
  static navigationOptions = navigationOptions('SignUp');
  handleSubmit = () => {
    const value = this._form.getValue();
    console.log('value: ', value);
  }

  render() {
    const { navigation: { navigate } } = this.props;
    return (
      <Layout>
        <View style={styles.container}>
          <Form 
            ref={c => this._form = c}
            type={User}
            options={options}
          />
          <Button
          title="Sign Up!"
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
