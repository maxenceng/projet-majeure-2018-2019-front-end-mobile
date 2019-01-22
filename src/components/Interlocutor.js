import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, Text,
}
  from 'react-native';
import { List } from 'react-native-paper';
import { COLOR_PRIMARY } from '../helpers/common';

const styles = StyleSheet.create({
  message: {
    borderRadius: 16,
    padding: 10,
    backgroundColor: COLOR_PRIMARY,
    color: '#fff',
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
    const { message: { MES_AUTHOR, MES_CONTENT }, currentIdUser } = this.props;
    return (
      <List.Item
        left={MES_AUTHOR === currentIdUser && (() => (
          <Text style={styles.message}>{MES_CONTENT}</Text>
        ))}
        right={MES_AUTHOR !== currentIdUser && (() => (
          <Text style={styles.message}>{MES_CONTENT}</Text>
        ))}
      />
    );
  }
}
