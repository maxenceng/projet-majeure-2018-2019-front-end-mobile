import React from 'react';
import {
  View, StyleSheet, Text,
} from 'react-native';
import t from 'tcomb-form-native';
import { connect } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
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
        <div className="openIds">
          <div>
            <GoogleLogin
              className="openId"
              clientId="529637638584-qp9rgeeg1g0n63ml36kg572falfj6m1l.apps.googleusercontent.com"
              buttonText="Login with Google"
              onSuccess={this.googleLogin}
              onFailure={this.failGoogle}
            />
          </div>
          <div>
            <FacebookLogin
              appId="501016000420647"
              autoLoad
              fields="name,email,picture"
              callback={this.facebookLogin}
              icon="fa-facebook"
            />
          </div>
        </div>
      </View>
    );
  }
}

export default connect(null, actions)(SignIn);
