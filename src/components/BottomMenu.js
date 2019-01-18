import React from 'react';
import PropTypes from 'prop-types';
import {
  View, TouchableHighlight, Text,
}
  from 'react-native';


const BottomMenu = ({ navigate }) => (
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
      onPress={() => navigate('EventsDescription')}
      style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: 180, borderRightColor: 'black', borderRightWidth: 0.5, padding: 20, borderBottomColor: 'black', borderBottomWidth: 0.5,
      }}
    >
      <Text>EventsDescription</Text>
    </TouchableHighlight>
    <TouchableHighlight
      onPress={() => navigate('People')}
      style={{
        position: 'absolute', right: 1, top: 0, bottom: 0, width: 180, padding: 20, borderBottomColor: 'black', borderBottomWidth: 0.5,
      }}
    >
      <Text>People</Text>
    </TouchableHighlight>
  </View>
);

BottomMenu.propTypes = {
  navigate: PropTypes.func.isRequired,
};

export default BottomMenu;
