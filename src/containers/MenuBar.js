import React from 'react';
import { connect } from 'react-redux';
import { Appbar } from 'react-native-paper';
import { COLOR_PRIMARY, COLOR_SECONDARY } from '../helpers/common';
import actions, { actionPropTypes } from '../actions/index';

const items = [
  {
    icon: 'person',
    route: 'Profile',
  },
  {
    icon: 'mail',
    route: 'Mail',
  },
];

const MenuBar = ({ actions: { navigationAction, connectionStatusAction } }) => (
  <Appbar style={{
    backgroundColor: COLOR_PRIMARY, flex: 1, flexDirection: 'row', padding: 25, justifyContent: 'flex-end',
  }}
  >
    <Appbar.Action
      color={COLOR_SECONDARY}
      size={36}
      icon="highlight-off"
      onPress={() => {
        connectionStatusAction(false);
        navigationAction('Home');
      }
      }
    />
    {items.map(({ icon, route }) => (
      <Appbar.Action
        color={COLOR_SECONDARY}
        size={36}
        icon={icon}
        onPress={() => navigationAction(route)}
      />
    ))}
  </Appbar>
);

MenuBar.propTypes = {
  actions: actionPropTypes.isRequired,
};

export default connect(null, actions)(MenuBar);
