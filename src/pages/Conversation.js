import React from 'react';
import {
  View, ScrollView,
}
  from 'react-native';
import navigationOptions from '../utils/navigationOptions';
import MenuBar from '../components/MenuBar';
import Interlocutor from '../components/Interlocutor';
import Interlocutor2 from '../components/Interlocutor2';

export default class Conversation extends React.Component {
  static navigationOptions = navigationOptions('Conversation');

  render() {
    const { navigation: { navigate } } = this.props;
    return (
      <View>
        <MenuBar
          navigate={navigate}
          style={{
            position: 'absolute', right: 90, top: 30, bottom: 0, justifyContent: 'center', alignItems: 'center',
          }}
        />
        <ScrollView
          style={{
            height: '100%',
          }}
        >
          {new Array(3).fill(null).map(() => (
            <Interlocutor ab="Name1" ef="Last message 1" />
          ))}
          {new Array(2).fill(null).map(() => (
            <Interlocutor2 ab="Name2" ef="Last message 2" />
          ))}
          {new Array(2).fill(null).map(() => (
            <Interlocutor ab="Name1" ef="Last message 1" />
          ))}
          {new Array(3).fill(null).map(() => (
            <Interlocutor2 ab="Name2" ef="Last message 2" />
          ))}
        </ScrollView>
      </View>
    );
  }
}
