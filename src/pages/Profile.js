import React from 'react';
import {
  View, Button, StyleSheet, Text, Image, ScrollView,
}
  from 'react-native';
import t from 'tcomb-form-native'; // 0.6.9
import navigationOptions from '../utils/navigationOptions';
import imageprofile from '../images/profile-pic.png';
// import Layout from './Layout';

// const Form = t.form.Form;

const { Form } = t.form;

const UserDescription = t.struct({
  Description: t.String,
});

const User = t.struct({
  Firstname: t.String,
  Lastname: t.String,
  Username: t.String,
  Tags: t.String,
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10,
      width: 250,
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
};

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
  stylesheet: formStyles,
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    paddingLeft: 60,
    backgroundColor: '#ffffff',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  title: {
    marginTop: 30,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  profileimage: {
    marginLeft: 140,
    width: 80,
    height: 80,
  },
});

export default class Profile extends React.Component {
  static navigationOptions = navigationOptions('Profile');

  handleSubmit = () => {
    const value = this.form.getValue();
    console.log('value: ', value);
  }

  render() {
    const { navigation: { navigate } } = this.props;
    return (
      <ScrollView>
        <View>
          <Text style={styles.title}>WeMe</Text>
        </View>
        <Image
          style={styles.profileimage}
          source={imageprofile}
        />
        <View style={styles.container}>
          <Form
            ref={(c) => { this.form = c; }}
            type={UserDescription}
            options={options}
          />
          <Form
            ref={(c) => { this.form = c; }}
            type={User}
            options={options}
          />
          <Button
            title="Save"
            onPress={() => navigate('Eventpage')}
          />
        </View>
      </ScrollView>
    );
  }
}
