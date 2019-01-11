import React from 'react';
import {
  View, TouchableHighlight,
}
  from 'react-native';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';
// import navigationOptions from '../utils/navigationOptions';


export default () => (


  <View style={{
    backgroundColor: '#abcdef', flex: 1, flexDirection: 'row', padding: 10,
  }}
  >
    <AntDesign
      style={{ marginLeft: 7, marginTop: 3 }}
      name="bars"
      size={42}
      color="white"
    />
    <TouchableHighlight
      // onPress={() => navigate('Profile')}
      style={{
        position: 'absolute', right: 90, top: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',
      }}
    >
      <View>
        <FontAwesome
          style={{ marginTop: 3 }}
          name="user"
          size={40}
          color="white"
        />
      </View>
    </TouchableHighlight>
    <TouchableHighlight
      onPress={() => { }}
      style={{
        position: 'absolute', right: 20, top: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',
      }}
    >
      <View>
        <Ionicons
          style={{ marginLeft: 20 }}
          name="ios-mail"
          size={60}
          color="white"
        />
      </View>
    </TouchableHighlight>
  </View>
);
