import React from 'react';
import PropTypes from 'prop-types';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import t from 'tcomb-form-native';
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
    auth: PropTypes.shape({
      idUser: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      token: PropTypes.string.isRequired,
    }),
  };

  static defaultProps = {
    auth: {},
  };

  componentWillReceiveProps(newProps) {
    const { actions: { navigationAction } } = this.props;
    const { auth } = newProps;
    if (auth.message === 'signUp' && auth.token) {
      navigationAction('CreateProfile');
    }
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
    const { actions: { registerAction } } = this.props;
    registerAction({
      name,
      firstname,
      email,
      password,
      passwordVerif,
    });
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

const mapStateToProps = ({ auth: { data: auth } }) => ({ auth });

export default connect(mapStateToProps, actions)(SignUp);
