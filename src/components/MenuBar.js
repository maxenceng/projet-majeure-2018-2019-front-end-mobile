import React from 'react';
import PropTypes from 'prop-types';
import {
  View, TouchableHighlight,
}
  from 'react-native';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';


const MenuBar = ({ navigate }) => (
  <View style={{
    backgroundColor: '#abcdef', flex: 1, flexDirection: 'row', padding: 25,
  }}
  >
    <TouchableHighlight
      onPress={() => navigate('Profile')}
      style={{
        position: 'absolute', left: 20, top: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',
      }}
    >
      <AntDesign
        style={{ marginLeft: 7, marginTop: 3 }}
        name="bars"
        size={42}
        color="white"
      />
    </TouchableHighlight>
    <TouchableHighlight
      onPress={() => navigate('Profile')}
      style={{
        position: 'absolute', right: 90, top: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',
      }}
    >
      <FontAwesome
        style={{ marginTop: 3 }}
        name="user"
        size={40}
        color="white"
      />
    </TouchableHighlight>
    <TouchableHighlight
      onPress={() => navigate('Mail')}
      style={{
        position: 'absolute', right: 20, top: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',
      }}
    >
      <Ionicons
        style={{ marginLeft: 20 }}
        name="ios-mail"
        size={60}
        color="white"
      />
    </TouchableHighlight>
  </View>
);

MenuBar.propTypes = {
  navigate: PropTypes.func.isRequired,
};

export default MenuBar;
