import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

const MessageExample = ({ text }) => <Text>{text}</Text>;

MessageExample.propTypes = {
  text: PropTypes.string.isRequired,
};

export default MessageExample;
