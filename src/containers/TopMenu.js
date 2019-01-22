import React from 'react';
import { connect } from 'react-redux';
import {
  View, TouchableHighlight, Text,
}
  from 'react-native';
import actions, { actionPropTypes } from '../actions/index';


const TopMenu = ({ actions: { navigationAction } }) => (
  <View style={{
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    padding: 25,
    justifyContent: 'space-between',
    color: 'blue',
  }}
  >
    <TouchableHighlight
      onPress={() => navigationAction('EventDetails')}
      style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: 180, borderRightColor: 'black', borderRightWidth: 0.5, padding: 20, borderBottomColor: 'black', borderBottomWidth: 0.5,
      }}
    >
      <Text>EventsDescription</Text>
    </TouchableHighlight>
    <TouchableHighlight
      onPress={() => navigationAction('People')}
      style={{
        position: 'absolute', right: 1, top: 0, bottom: 0, width: 180, padding: 20, borderBottomColor: 'black', borderBottomWidth: 0.5,
      }}
    >
      <Text>People</Text>
    </TouchableHighlight>
  </View>
);

TopMenu.propTypes = {
  actions: actionPropTypes.isRequired,
};

export default connect(null, actions)(TopMenu);
