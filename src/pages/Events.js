import React from 'react';
import {
  View, StyleSheet, Text, ScrollView,
}
  from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import navigationOptions from '../utils/navigationOptions';
// import MenuBar from '../components/MenuBar';

// import Layout from './Layout';

// const Form = t.form.Form;

const styles = StyleSheet.create({
  title: {
    marginTop: 30,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});

export default class Events extends React.Component {
  static navigationOptions = navigationOptions('Events');

  handleSubmit = () => {
    const value = this.form.getValue();
    console.log('value: ', value);
  }

  render() {
  // const { navigation: { navigate } } = this.props;
    return (
      <ScrollView>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Text style={styles.title}>WeMe</Text>

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
      </ScrollView>
    );
  }
}
