import React from 'react';
import {
  View, Button, StyleSheet, Text,
} from 'react-native';
import t from 'tcomb-form-native';
import { connect } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import navigationOptions from '../utils/navigationOptions';
import actions, { actionPropTypes } from '../actions';

const { Form } = t.form;

const User = t.struct({
  email: t.String,
  password: t.String,
});

const styles = StyleSheet.create({
  container: {
    marginTop: 75,
    width: 250,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    marginTop: 90,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
    width: '100%',
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
      <View style={{
        display: 'flex', alignItems: 'center',
      }}
      >
        <Text style={styles.title}>WeMe</Text>
        <View style={styles.container}>
          <Form
            ref={(c) => { this.form = c; }}
            type={User}
            options={this.formOptions}
          />
          <Button
            title="Sign In"
            onPress={this.onSubmit}
          />
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
