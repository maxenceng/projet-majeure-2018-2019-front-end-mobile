import React from 'react';
import {
  View,
}
  from 'react-native';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';


export default () => (
  <View style={{ flex: 1, flexDirection: 'row', padding: 10 }}>
    <AntDesign
      style={{ marginLeft: 7, marginTop: 3 }}
      name="bars"
      size={42}
      color="green"
    />
    <FontAwesome
      style={{ marginLeft: 200, marginTop: 3 }}
      name="user"
      size={40}
      color="green"
    />
    <Ionicons
      style={{ marginLeft: 20 }}
      name="ios-mail"
      size={50}
      color="green"
    />
  </View>
);
