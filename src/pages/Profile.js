import React from 'react';
import { connect } from 'react-redux';
import {
  View, StyleSheet, Text, Image, ScrollView,
}
  from 'react-native';
import PropTypes from 'prop-types';
import actions, { actionPropTypes } from '../actions';
import navigationOptions from '../utils/navigationOptions';
import { COLOR_TITLE, getAsyncStorageItem } from '../helpers/common';
import Button from '../components/Button';


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
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLOR_TITLE,
  },
  description: {
    marginTop: 10,
    fontSize: 10,
    textAlign: 'center',
    color: COLOR_TITLE,
  },
  buttons: {
    alignItems: 'center',
  },
  button: {
    margin: 10,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
});

class Profile extends React.Component {
  static navigationOptions = navigationOptions('Profile');

  static propTypes = {
    actions: actionPropTypes.isRequired,
    profile: PropTypes.shape({
      PROFILE_AVATAR: PropTypes.string.isRequired,
      PROFILE_DESC: PropTypes.string.isRequired,
      TAG_TEXT: PropTypes.string.isRequired,
      USER_FIRSTNAME: PropTypes.string.isRequired,
      USER_NAME: PropTypes.string.isRequired,
    }).isRequired,
  };

  componentWillReceiveProps(newProps) {
    const { actions: { getProfileAction }, profile } = this.props;
    const { profile: newProfile } = newProps;
    if ((newProfile.PROFILE_DESC && !profile.PROFILE_DESC)) {
      if (getAsyncStorageItem('userToken') && getAsyncStorageItem('idUser')) {
        getProfileAction();
      }
    }
  }

  get profile() {
    const { profile: { profile } } = this.props;
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


  render() {
    const { navigation: { navigate } } = this.props;
    const {
      PROFILE_AVATAR,
      PROFILE_DESC,
      USER_FIRSTNAME,
      USER_NAME,
      TAG_TEXT,
    } = this.profile;
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View>
            <Text style={styles.title}>{USER_FIRSTNAME} {USER_NAME}</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Image
              style={styles.image}
              source={{ uri: PROFILE_AVATAR }}
            />
          </View>
          <ScrollView>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Description</Text>
            <Text style={{ fontSize: 15 }}>{PROFILE_DESC}</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 10 }}>Tags</Text>
            <Text style={{ fontSize: 15 }}>{TAG_TEXT}</Text>
          </ScrollView>
          <View style={[{ width: 100, marginLeft: 125, marginTop: 50 }]}>
            <Button onPress={() => navigate('CreateProfile')}>
              Edit
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ profile }) => ({ profile: profile.data });

export default connect(mapStateToProps, actions)(Profile);
