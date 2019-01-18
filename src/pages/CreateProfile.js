import React from 'react';
import { connect } from 'react-redux';
import {
  View, Button, StyleSheet, Text, Image, ScrollView,
}
  from 'react-native';
import t from 'tcomb-form-native'; // 0.6.9
import navigationOptions from '../utils/navigationOptions';
import actions from '../actions';
import imageprofile from '../images/profile-pic.png';
// import Layout from './Layout';

// const Form = t.form.Form;

/* eslint-disable */
const { Form } = t.form;

const User = t.struct({
  Description: t.String,
  Firstname: t.String,
  Username: t.String,
  Tags: t.String,
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10,
      width: 225,
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
    width: 250,
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

class CreateProfile extends React.Component {
  static navigationOptions = navigationOptions('CreateProfile');
  /*
  static propTypes = {
    actions: actionPropTypes.isRequired,
  };

  state={ PROFILE_AVATAR: '',
    PROFILE_DESC: '',
    TAG_TEXT: '',
    USER_FIRSTNAME: '',
    USER_NAME: '',
  }

  componentWillMount() {
    const {
      PROFILE_AVATAR,
      PROFILE_DESC,
      TAG_TEXT,
      USER_FIRSTNAME,
      USER_NAME,
    } = this.getProfile;
    this.setState({
      PROFILE_AVATAR,
      PROFILE_DESC,
      TAG_TEXT,
      USER_FIRSTNAME,
      USER_NAME,
    });
  }

  componentWillReceiveProps(newProps) {
   if (this.getProfile(this.props).PROFILE_AVATAR === '' 
   && this.getProfile(newProps).PROFILE_AVATAR !== '') {
      const {
        PROFILE_AVATAR,
      } = this.getProfile(newProps);
      this.setState({
        PROFILE_AVATAR,
      });
    }
    if (this.getProfile(this.props).PROFILE_DESC === '' 
    && this.getProfile(newProps).PROFILE_DESC !== '') {
      const {
        PROFILE_DESC,
      } = this.getProfile(newProps);
      this.setState({
        PROFILE_DESC,
      });
    }
    if (this.getProfile(this.props).TAG_TEXT === '' 
    && this.getProfile(newProps).TAG_TEXT !== '') {
      const {
        TAG_TEXT,
      } = this.getProfile(newProps);
      this.setState({
        TAG_TEXT,
      });
    }
  if (this.getProfile(this.props).USER_FIRSTNAME === '' 
  && this.getProfile(newProps).USER_FIRSTNAME !== '') {
      const {
        USER_FIRSTNAME,
      } = this.getProfile(newProps);
      this.setState({
        USER_FIRSTNAME,
      });
    }
  if (this.getProfile(this.props).USER_NAME === '' && this.getProfile(newProps).USER_NAME !== '') {
      const {
        USER_NAME,
      } = this.getProfile(newProps);
      this.setState({
        USER_NAME,
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
  */

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
            type={User}
            options={options}
          />
        </View>
        <View style={[{ width: 100, marginLeft: 125 }]}>
          <Button
            title="Save"
            onPress={() => navigate('Eventpage')}
          />
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ profile }) => ({ profile: profile.data });

export default connect(mapStateToProps, actions)(CreateProfile);
