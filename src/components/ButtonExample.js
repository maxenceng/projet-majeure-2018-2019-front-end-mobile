import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native';

const ButtonExample = ({ onClick, text }) => <Button st onPress={onClick} title={text} />;

ButtonExample.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default ButtonExample;