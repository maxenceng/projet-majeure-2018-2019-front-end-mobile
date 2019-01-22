import React from 'react';
import {
  View, Button, StyleSheet, Text,
} from 'react-native';
import { connect } from 'react-redux';
import t from 'tcomb-form-native'; // 0.6.9
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import navigationOptions from '../utils/navigationOptions';
import actions, { actionPropTypes } from '../actions';

const { Form } = t.form;

const User = t.struct({
  name: t.String,
  firstname: t.String,
  email: t.String,
  password: t.String,
  passwordVerif: t.String,
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
    width: '100%',
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
      password: {
        password: true,
        secureTextEntry: true,
      },
      passwordVerif: {
        password: true,
        secureTextEntry: true,
      },
    },
  }


  render() {
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
            onPress={this.onSubmit}
            title="Sign up"
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

export default connect(null, actions)(SignUp);

// tu stash tu pull tu pop et tu merge
// tu commit tu push ou bien c'est la demer
// Tu fais le tout sur la branche dev
// sur le trello tu marques c'que t'as fait


// et tu supprimes eslint de mes couilles
// et tu le dis surout pas à jacqouille
// si tu galère t'appelle le prof maxence
