import React from 'react';
import {
  View, StyleSheet, ScrollView, Text,
}
  from 'react-native';
import navigationOptions from '../utils/navigationOptions';
import MenuBar from '../components/MenuBar';
// import MenuBar from '../components/MenuBar';

// import Layout from './Layout';

// const Form = t.form.Form;

const styles = StyleSheet.create({
  title: {
    marginTop: 10,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  event1: {
    width: 200,
    marginTop: 30,
    marginLeft: 90,
    fontSize: 30,
    color: 'white',
    backgroundColor: 'orange',
    textAlign: 'center',
  },
  event2: {
    width: 300,
    marginLeft: 35,
    marginTop: 20,
    fontSize: 30,
    color: 'white',
    backgroundColor: 'orange',
    textAlign: 'center',
  },
  event3: {
    width: 300,
    marginLeft: 35,
    marginTop: 20,
    fontSize: 30,
    color: 'white',
    backgroundColor: 'orange',
    textAlign: 'center',
  },
});

export default class Eventpage extends React.Component {
  static navigationOptions = navigationOptions('Eventpage');

  handleSubmit = () => {
    const value = this.form.getValue();
    console.log('value: ', value);
  }

  render() {
    // const { navigation: { navigate } } = this.props;
    return (
      <ScrollView>
        <Text style={styles.title}>WeMe</Text>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <MenuBar />
        </View>
        <View>
          <Text style={styles.event1}>
            All Events
            <br />
            <br />
            test
          </Text>
        </View>
        <View>
          <Text style={styles.event2}>
            Events For me
            <br />
            <br />
            Want something specific ?
          </Text>
        </View>
        <View>
          <Text style={styles.event3}>
            Random Event
            <br />
            <br />
            Feeling Adventurous
          </Text>
        </View>
      </ScrollView>
    );
  }
}
