import React from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import t from 'tcomb-form-native'; // 0.6.9
import navigationOptions from '../utils/navigationOptions';
import actions, { actionPropTypes } from '../actions';
import Button from '../components/Button';
import { COLOR_TITLE } from '../helpers/common';

const { Form } = t.form;

const User = t.struct({
  name: t.String,
  firstname: t.String,
  email: t.String,
  password: t.String,
  passwordVerif: t.String,
});


const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '90%',
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

class SignUp extends React.Component {
  static navigationOptions = navigationOptions('SignUp');

  static propTypes = {
    actions: actionPropTypes.isRequired,
  };

  googleLogin = (event) => {
    console.log(event);
    const { actions: { openIdLoginAction } } = this.props;
    const {
      email,
      givenName,
      googleId,
      familyName,
    } = event.profileObj;
    openIdLoginAction({
      email,
      name: familyName,
      firstname: givenName,
      password: googleId,
      passwordVerif: googleId,
    });
  };


  facebookLogin = (event) => {
    console.log(event);
    const { actions: { openIdLoginAction } } = this.props;
    const {
      email,
      name,
      id,
    } = event;
    openIdLoginAction({
      email,
      name: name.split(' ')[1],
      firstname: name.split(' ')[0],
      password: id,
      passwordVerif: id,
    });
  };

  failGoogle = (err) => {
    console.log(err);
  }

  onSubmit = () => {
    const value = this.form.getValue();
    if (!value) return;
    const {
      name,
      firstname,
      email,
      password,
      passwordVerif,
    } = value;
    const { actions: { registerAction }, navigation: { navigate } } = this.props;
    registerAction({
      name,
      firstname,
      email,
      password,
      passwordVerif,
    });
    navigate('CreateProfile');
  }

  formOptions = {
    fields: {
      email: {
        error: 'Without an email address how are you going to reset your password when you forget it?',
      },
      password: {
        password: true,
        secureTextEntry: true,
        error: 'Choose something you use on a dozen other sites or something you won\'t remember',
      },
      passwordVerif: {
        password: true,
        secureTextEntry: true,
      },
      terms: {
        label: 'Agree to Terms',
      },
    },
  }


  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
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
                Sign Up
              </Button>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default connect(null, actions)(SignUp);

// tu stash tu pull tu pop et tu merge
// tu commit tu push ou bien c'est la demer
// Tu fais le tout sur la branche dev
// sur le trello tu marques c'que t'as fait


// et tu supprimes eslint de mes couilles
// et tu le dis surout pas à jacqouille
// si tu galère t'appelle le prof maxence
