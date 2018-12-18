import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ButtonComponent from '../components/ButtonExample';
import messageAction from '../actions/messageAction';

class ButtonExample extends React.Component {
  static propTypes = {
    sayMessage: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  };

  handleClick = () => {
    const { sayMessage, message } = this.props;
    sayMessage(message);
  };

  render() {
    const { text } = this.props;
    return (
      <ButtonComponent text={text} onClick={this.handleClick} />
    );
  }
}

export default connect(null, { sayMessage: messageAction })(ButtonExample);