import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions, { actionPropTypes } from './src/actions';
import { getAsyncStorageItem } from './src/helpers/common';

import Navigator from './src/Navigator';

class AppIn extends React.Component {
  static propTypes = {
    actions: actionPropTypes.isRequired,
    auth: PropTypes.shape({
      message: PropTypes.string,
      token: PropTypes.string,
      idUser: PropTypes.string,
    }),
    // connectionStatus: PropTypes.bool,
    profile: PropTypes.arrayOf(PropTypes.shape({
      PROFILE_AVATAR: PropTypes.string.isRequired,
      PROFILE_DESC: PropTypes.string.isRequired,
      TAG_TEXT: PropTypes.string.isRequired,
      USER_FIRSTNAME: PropTypes.string.isRequired,
      USER_NAME: PropTypes.string.isRequired,
    })),
  }

  static defaultProps = {
    auth: {
      message: '',
      token: '',
      idUser: '',
    },
    // connectionStatus: false,
    profile: [],
  }

  componentWillMount() {
    const { actions: { getProfileAction } } = this.props;
    if (getAsyncStorageItem('userToken') && getAsyncStorageItem('idUser')) {
      getProfileAction();
    }
  }

  componentWillReceiveProps(newProps) {
    const { profile, actions: { connectionStatusAction }, auth } = this.props;
    const { profile: newProfile, auth: newAuth } = newProps;
    // If the condition is satisfied, then displays the user as connected
    if (
      (newProfile.length !== profile.length && newProfile.length !== 0)
      || newAuth.message !== auth.message
    ) {
      connectionStatusAction(true);
    }
  }

  render() {
    return (
      <Navigator />
    );
  }
}

const mapStateToProps = ({
  profile,
  connectionStatus,
  auth,
}) => ({
  profile: profile.data.profile,
  connectionStatus,
  auth: auth.data,
});


export default connect(mapStateToProps, actions)(AppIn);
