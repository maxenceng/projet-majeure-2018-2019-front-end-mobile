import React from 'react';
import {
  View, StyleSheet, Text, TouchableHighlight,
}
  from 'react-native';
import navigationOptions from '../utils/navigationOptions';
import MenuBar from '../components/MenuBar';

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
    height: 70,
    fontSize: 30,
    color: 'white',
    backgroundColor: 'orange',
    textAlign: 'center',
    // flex: 1,
  },
  event1content: {
    height: 50,
    fontSize: 15,
    color: 'white',
    backgroundColor: 'orange',
    textAlign: 'center',
    // flex: 1,
  },
  event2: {
    height: 70,
    marginTop: 20,
    fontSize: 30,
    color: 'white',
    backgroundColor: 'orange',
    textAlign: 'center',
    // flex: 2,
  },
  event2content: {
    height: 50,
    fontSize: 15,
    color: 'white',
    backgroundColor: 'orange',
    textAlign: 'center',
    // flex: 2,
  },
  event3: {
    height: 70,
    marginTop: 20,
    fontSize: 30,
    color: 'white',
    backgroundColor: 'orange',
    textAlign: 'center',
    // flex: 3,
  },
  event3content: {
    height: 50,
    fontSize: 15,
    color: 'white',
    backgroundColor: 'orange',
    textAlign: 'center',
    // flex: 3,
  },
});

export default class Eventpage extends React.Component {
  static navigationOptions = navigationOptions('Eventpage');

  render() {
    const { navigation: { navigate } } = this.props;
    return (
      <View>
        <MenuBar
          navigate={navigate}
        />
        <View style={{
          position: 'absolute', top: 100, left: 25, width: 300,
        }}
        >
          <TouchableHighlight
            onPress={() => navigate('AllEvents')}
          >
            <Text style={styles.event1}>

              All Events
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => navigate('AllEvents')}
          >
            <Text style={styles.event1content}>

              All the good stuff, everywhere
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => navigate('EventsForMe')}
          >
            <Text style={styles.event2}>

              Events For me
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => navigate('EventsForMe')}
          >
            <Text style={styles.event2content}>

              Want something specific ?
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => navigate('RandomEvents')}
          >
            <Text style={styles.event3}>

              Random Event
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => navigate('RandomEvents')}
          >
            <Text style={styles.event3content}>

              Feeling Adventurous
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
