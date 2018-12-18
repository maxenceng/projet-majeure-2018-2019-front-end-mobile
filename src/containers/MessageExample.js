import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MessageComponent from '../components/MessageExample';

const MessageExample = ({ message }) => <MessageComponent text={message} />;

MessageExample.propTypes = {
  message: PropTypes.string.isRequired,
};

const mapStateToProps = ({ message }) => ({ message });

export default connect(mapStateToProps, {})(MessageExample);