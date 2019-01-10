import React from 'react';
import {
  View, Text, StyleSheet,
}
  from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';

const styles = StyleSheet.create({
  title: {
    marginTop: 30,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
export default function MenuBar() {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Text style={styles.title}>WeMe</Text>
      <MenuBar
        title="TopBar1"
      />
      <AntDesign
        name="bars"
        size={62}
        color="green"
      />
      <Ionicons
        name="ios-mail"
        size={62}
        color="green"
      />
    </View>
  );
}
