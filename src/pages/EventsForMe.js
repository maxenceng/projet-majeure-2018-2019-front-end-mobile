import React from 'react';
import {
  View, StyleSheet, Text, TouchableHighlight,
}
  from 'react-native';
import navigationOptions from '../utils/navigationOptions';
import MenuBar from '../containers/MenuBar';

// import Layout from './Layout';

// const Form = t.form.Form;

const styles = StyleSheet.create({
  title: {
    marginRight: 20,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  titleleft: {
    fontSize: 20,
    color: 'white',
  },
  event1: {
    width: 300,
    height: 70,
    marginTop: 30,
    marginLeft: 30,
    fontSize: 30,
    color: 'white',
    backgroundColor: 'orange',
    textAlign: 'center',
    // flex: 1,
  },
  event1content: {
    width: 300,
    height: 50,
    marginLeft: 30,
    fontSize: 15,
    color: 'white',
    backgroundColor: 'orange',
    textAlign: 'center',
    // flex: 1,
  },
  event2: {
    width: 300,
    height: 70,
    marginLeft: 30,
    marginTop: 20,
    fontSize: 30,
    color: 'white',
    backgroundColor: 'orange',
    textAlign: 'center',
    // flex: 2,
  },
  event2content: {
    width: 300,
    height: 50,
    marginLeft: 30,
    fontSize: 15,
    color: 'white',
    backgroundColor: 'orange',
    textAlign: 'center',
    // flex: 2,
  },
  event3: {
    width: 300,
    height: 70,
    marginLeft: 30,
    marginTop: 20,
    fontSize: 30,
    color: 'white',
    backgroundColor: 'orange',
    textAlign: 'center',
    // flex: 3,
  },
  event3content: {
    width: 300,
    height: 50,
    marginLeft: 30,
    fontSize: 15,
    color: 'white',
    backgroundColor: 'orange',
    textAlign: 'center',
    // flex: 3,
  },
});

export default class EventsForMe extends React.Component {
  static navigationOptions = navigationOptions('EventsForMe');

  render() {
    const { navigation: { navigate } } = this.props;
    return (
      <View>
        <MenuBar
          style={{
            position: 'absolute', right: 90, top: 30, bottom: 0, justifyContent: 'center', alignItems: 'center',
          }}
        />
        <TouchableHighlight
          onPress={() => navigate('Profile')}
        >
          <Text style={styles.event1}>

            All Events
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigate('Profile')}
        >
          <Text style={styles.event1content}>

            All the good stuff, everywhere
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigate('Profile')}
        >
          <Text style={styles.event2}>

            Events For me
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigate('Profile')}
        >
          <Text style={styles.event2content}>

            Want something specific ?
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigate('Profile')}
        >
          <Text style={styles.event3}>

            Random Event
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigate('Profile')}
        >
          <Text style={styles.event3content}>

            Feeling Adventurous
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
