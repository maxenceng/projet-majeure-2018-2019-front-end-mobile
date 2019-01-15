import React from 'react';
import {
  View, ScrollView,
}
  from 'react-native';
import navigationOptions from '../utils/navigationOptions';
import MenuBar from '../components/MenuBar';
import Participant from '../components/Participant';

export default class Mail extends React.Component {
  static navigationOptions = navigationOptions('Mail');
  /*
  handleSubmit = () => {
    const value = this.form.getValue();
    console.log('value: ', value);
  }
  */

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
        <View>
          <ScrollView
            style={{
              height: '100%',
            }}
          >
            {new Array(13).fill(null).map(() => (
              <Participant ab="Name" ef="Last message" navigate={navigate} />
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}
