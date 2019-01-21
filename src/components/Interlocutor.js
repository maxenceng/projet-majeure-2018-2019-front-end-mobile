import React from 'react';
import PropTypes from 'prop-types';
import {
  View, StyleSheet, Text, Image,
}
  from 'react-native';
import imageprofile from '../images/edsheeran.jpg';

const styles = StyleSheet.create({
  ownName: {
    marginTop: 7,
    fontSize: 15,
    marginLeft: 15,
    fontWeight: 'bold',
    color: 'black',
    width: '100%',
  },
  ownMessage: {
    fontSize: 15,
    marginLeft: 90,
    color: 'black',
    width: 200,
    marginTop: -15,
  },
  otherName: {
    marginTop: 7,
    fontSize: 15,
    position: 'absolute',
    right: 80,
    fontWeight: 'bold',
    color: 'black',
  },
  otherMessage: {
    fontSize: 15,
    marginLeft: 173,
    color: 'black',
    width: 200,
    marginTop: -15,
  },
  ownImage: {
    width: 60,
    height: 60,
    marginTop: 5,
    borderRadius: 30,
  },
  otherImage: {
    width: 60,
    height: 60,
    position: 'absolute',
    right: 10,
    marginTop: 5,
    borderRadius: 30,
  },
});

export default class Interlocutor extends React.Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
    currentIdUser: PropTypes.string.isRequired,
  };

  getStyle = (param) => {
    const { message, currentIdUser } = this.props;
    return message.MES_AUTHOR === currentIdUser ? styles[`other${param}`] : styles[`own${param}`];
  };

  render() {
    const { message } = this.props;
    return (
      <View style={{
      }}
      >
        <View style={{
          flex: 1, flexDirection: 'row', paddingLeft: 15, height: 50, marginBottom: 10,
        }}
        >
          <Image
            style={this.getStyle('Image')}
            source={imageprofile}
          />
          <Text style={this.getStyle('Name')}>{message.MES_AUTHOR}</Text>
        </View>
        <View>
          <Text style={this.getStyle('Message')}>{message.MES_CONTENT}</Text>
        </View>
      </View>
    );
  }
}
