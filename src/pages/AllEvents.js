import React from 'react';
import {
  View, TouchableHighlight, ScrollView,
}
  from 'react-native';
import navigationOptions from '../utils/navigationOptions';
import MenuBar from '../components/MenuBar';
import Events from '../components/Events';

export default class AllEvents extends React.Component {
  static navigationOptions = navigationOptions('AllEvents');
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
        <ScrollView
          style={{
            marginTop: 60, width: 300, marginLeft: 30, height: 475, borderColor: 'black', borderWidth: 1,
          }}
        >
          <TouchableHighlight
            onPress={() => navigate('EventDetails')}
          >
            <Events day="day" titleEvent="title event" dayDate="Date" description="Description" />
          </TouchableHighlight>
          {new Array(13).fill(null).map(() => (
            <TouchableHighlight
              onPress={() => navigate('EventDetails')}
            >
              <Events day="day33" titleEvent="title event" dayDate="Date" description="Description" />
            </TouchableHighlight>
          ))}
        </ScrollView>
      </View>
    );
  }
}
