import React from 'react';
import {
  View, Button, StyleSheet, Text,
} from 'react-native';
import t from 'tcomb-form-native'; // 0.6.9
import navigationOptions from '../utils/navigationOptions';

const { Form } = t.form;

const User = t.struct({
  email: t.String,
  username: t.String,
  password: t.String,
  terms: t.Boolean,
});

const options = {
  fields: {
    email: {
      error: 'Without an email address how are you going to reset your password when you forget it?',
    },
    password: {
      error: 'Choose something you use on a dozen other sites or something you won\'t remember',
    },
    terms: {
      label: 'Agree to Terms',
    },
  },
};

const styles = StyleSheet.create({
  container: {
    marginTop: 45,
    width: 250,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});

export default class SignUp extends React.Component {
  static navigationOptions = navigationOptions('SignUp');

  handleSubmit = () => {
    const value = this.form.getValue();
    console.log('value: ', value);
  }

  render() {
    const { navigation: { navigate } } = this.props;
    return (
      <View style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',
      }}
      >
        <Text style={styles.title}>WeMe</Text>
        <View style={styles.container}>
          <Form
            ref={(c) => { this.form = c; }}
            type={User}
            options={options}
          />
          <Button
            title="Sign Up!"
            onPress={() => navigate('Profile')}
          />
        </View>
      </View>
    );
  }
}
