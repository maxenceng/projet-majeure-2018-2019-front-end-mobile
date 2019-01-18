import React from 'react';
import { connect } from 'react-redux';
import {
  View, Button, StyleSheet, Text, Image, ScrollView,
}
  from 'react-native';
import PropTypes from 'prop-types';
import navigationOptions from '../utils/navigationOptions';
import imageprofile from '../images/profile-pic.png';


const styles = StyleSheet.create({
  container: {
    width: 250,
    justifyContent: 'center',
    marginTop: 50,
    marginLeft: 50,
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

class Profile extends React.Component {
  static navigationOptions = navigationOptions('Profile');

  static propTypes = {
    profile: PropTypes.instanceOf(Object).isRequired,
  }


  onChange = name => ({ target: { value } }) => this.setState({ [name]: value });

  get profile() {
    const { profile: { profile } } = this.props;
    if (!profile) {
      return {
        PROFILE_AVATAR: '',
        PROFILE_DESC: '',
        TAG_TEXT: '',
        USER_FIRSTNAME: 'EBER',
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
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Descritpion :</Text>
          <Text style={{ fontSize: 15 }}>{this.profile.PROFILE_DESC}</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 10 }}>Firstname :</Text>
          <Text style={{ fontSize: 15 }}>{this.profile.USER_FIRSTNAME}</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 10 }}>Username :</Text>
          <Text style={{ fontSize: 15 }}>{this.profile.USER_FIRSTNAME}</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 10 }}>Tags :</Text>
          <Text style={{ fontSize: 15 }}>{this.profile.TAG_TEXT}</Text>
        </View>
        <View style={[{ width: 100, marginLeft: 125, marginTop: 50 }]}>
          <Button
            title="Edit"
            onPress={() => navigate('CreateProfile')}
          />
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ profile }) => ({ profile: profile.data });

export default connect(mapStateToProps, null)(Profile);
