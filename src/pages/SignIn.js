import React from 'react';
import {
  View, Button, StyleSheet, Text,
} from 'react-native';
import t from 'tcomb-form-native'; // 0.6.9
import { connect } from 'react-redux';
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
  },
});

class SignIn extends React.Component {
  static navigationOptions = navigationOptions('SignIn');

  static propTypes = {
    actions: actionPropTypes.isRequired,
  };

  onSubmit = () => {
    const { actions: { loginAction }, navigation: { navigate } } = this.props;
    const {
      email,
      password,
    } = this.form.getValue();
    console.log(email);
    loginAction({
      email,
      password,
    });
    navigate('Eventpage');
  }

  render() {
    return (
      <View style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, alignItems: 'center',
      }}
      >
        <Text style={styles.title}>WeMe</Text>
        <View style={styles.container}>
          <Form
            ref={(c) => { this.form = c; }}
            type={User}
          />
          <Button
            title="Sign In"
            onPress={this.onSubmit}
          />
        </View>
      </View>
    );
  }
}

export default connect(null, actions)(SignIn);
