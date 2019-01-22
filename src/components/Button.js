import React from 'react';
import { Button as B } from 'react-native-paper';
import PropTypes from 'prop-types';
import { COLOR_TERCIARY } from '../helpers/common';

const Button = ({ style, onPress, children }) => (
  <B color={COLOR_TERCIARY} mode="contained" style={style} onPress={onPress}>
    {children}
  </B>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.instanceOf(Object),
  onPress: PropTypes.func,
};

Button.defaultProps = {
  style: {},
  onPress: null,
};

export default Button;
