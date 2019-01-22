import React from 'react';
import {
  View, StyleSheet, Text,
} from 'react-native';
import t from 'tcomb-form-native';
import { connect } from 'react-redux';
import navigationOptions from '../utils/navigationOptions';
import actions, { actionPropTypes } from '../actions';
import { COLOR_TITLE } from '../helpers/common';
import Button from '../components/Button';

const { Form } = t.form;

const User = t.struct({
  email: t.String,
  password: t.String,
});

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '60%',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLOR_TITLE,
    width: '100%',
  },
  form: {
    width: '80%',
  },
  buttons: {
    alignItems: 'center',
  },
});

class SignIn extends React.Component {
  static navigationOptions = navigationOptions('SignIn');

  static propTypes = {
    actions: actionPropTypes.isRequired,
  };

  formOptions = {
    fields: {
      password: {
        password: true,
        secureTextEntry: true,
      },
    },
  }

  onSubmit = () => {
    const { actions: { loginAction }, navigation: { navigate } } = this.props;
    const value = this.form.getValue();
    if (!value) return;
    const {
      email,
      password,
    } = value;
    loginAction({
      email,
      password,
    });
    navigate('Eventpage');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>WeMe</Text>
          <View style={styles.form}>
            <Form
              ref={(c) => { this.form = c; }}
              type={User}
              options={this.formOptions}
            />
            <View style={styles.buttons}>
              <Button style={styles.button} onPress={this.onSubmit}>
                Sign In
              </Button>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default connect(null, actions)(SignIn);
