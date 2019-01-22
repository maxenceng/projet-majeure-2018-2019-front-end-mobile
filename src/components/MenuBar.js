import React from 'react';
import { connect } from 'react-redux';
import { Appbar } from 'react-native-paper';
import { COLOR_PRIMARY } from '../helpers/common';
import actions, { actionPropTypes } from '../actions';


const MenuBar = ({ actions: { navigationAction } }) => (
  <Appbar style={{
    backgroundColor: COLOR_PRIMARY, flex: 1, flexDirection: 'row', padding: 25, justifyContent: 'flex-end',
  }}
  >
    <Appbar.Action size={36} icon="person" onPress={() => navigationAction('Profile')} />
    <Appbar.Action size={36} icon="mail" onPress={() => navigationAction('Mail')} />
  </Appbar>
);

MenuBar.propTypes = {
  actions: actionPropTypes.isRequired,
};

export default connect(null, actions)(MenuBar);
