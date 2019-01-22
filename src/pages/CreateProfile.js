import React from 'react';
import { connect } from 'react-redux';
import {
  View,
  StyleSheet,
  Text,
  Image,
  KeyboardAvoidingView,
}
  from 'react-native';
import t from 'tcomb-form-native';
import navigationOptions from '../utils/navigationOptions';
import actions, { actionPropTypes } from '../actions';
import imageprofile from '../images/profile-pic.png';
import Button from '../components/Button';
import { getAsyncStorageItem } from '../helpers/common';
// import Layout from './Layout';

// const Form = t.form.Form;

/* eslint-disable */
const { Form } = t.form;

const User = t.struct({
  avatar: t.String,
  description: t.String,
  firstname: t.String,
  name: t.String,
  tags: t.String,
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
    height: '100%',
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 20,
    height: '90%',
  },
  image: {
    width: 80,
    height: 80,
  },
  buttons: {
    alignItems: 'center',
    margin: 10,
  },
});

class CreateProfile extends React.Component {
  static navigationOptions = navigationOptions('CreateProfile');

  static propTypes = {
    actions: actionPropTypes.isRequired,
  };

  state = {
    value: {
      avatar: '',
      description: '',
      firstname: '',
      name: '',
      tags: '',
    }
  };

  componentWillMount() {
    const { actions: { getProfileAction } } = this.props;
    if (getAsyncStorageItem('userToken') && getAsyncStorageItem('idUser')) {
      getProfileAction();
    }
  }

  componentWillReceiveProps(newProps) {
    const { profile } = this.props;
    const { profile: newProfile } = newProps;
    if (!profile.profile && newProfile.profile) {
      this.setState({
        value: {
          avatar: newProfile.profile[0].PROFILE_AVATAR,
          description: newProfile.profile[0].PROFILE_DESC,
          firstname: newProfile.profile[0].USER_FIRSTNAME,
          name: newProfile.profile[0].USER_NAME,
          tags: newProfile.profile[0].TAG_TEXT,
        },
      });
    }
  }

  getProfile = (props) => {
    const { profile: { profile } } = props;
    if (!profile) {
      return {
        PROFILE_AVATAR: '',
        PROFILE_DESC: '',
        TAG_TEXT: '',
        USER_FIRSTNAME: '',
        USER_NAME: '',
      };
    }
    const {
      PROFILE_AVATAR,
      PROFILE_DESC,
      TAG_TEXT,
      USER_FIRSTNAME,
      USER_NAME,
    } = profile[0];
    return {
      PROFILE_AVATAR,
      PROFILE_DESC,
      TAG_TEXT,
      USER_FIRSTNAME,
      USER_NAME,
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { actions: { profileSaveAction }, navigation: { navigate } } = this.props;
    const value = this.form.getValue();
    if (!value) return;
    const {
      avatar,
      description,
      firstname,
      name,
      tags,
    } = value;
    profileSaveAction({
      PROFILE_AVATAR: avatar,
      PROFILE_DESC: description,
      TAG_TEXT: tags,
      USER_FIRSTNAME: firstname,
      USER_NAME: name,
    });
    navigate('Profile');
  }


  render() {
    const {
      USER_FIRSTNAME,
      USER_NAME,
    } = this.getProfile(this.props);
    const { value } = this.state;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.content}>
          <View>
            <Text style={styles.title}>{USER_FIRSTNAME} {USER_NAME}</Text>
          </View>
          <Image
            style={styles.image}
            source={imageprofile}
          />
          <View>
            <Form
              ref={(c) => { this.form = c; }}
              type={User}
              options={options}
              value={value}
            />
          </View>
          <View style={styles.buttons}>
            <Button onPress={this.onSubmit}>
              Save
            </Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = ({ profile }) => ({ profile: profile.data });

export default connect(mapStateToProps, actions)(CreateProfile);
