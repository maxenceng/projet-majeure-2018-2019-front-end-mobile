import React from 'react';
import {
  View, ScrollView,
}
  from 'react-native';
import navigationOptions from '../utils/navigationOptions';
import Participant from '../components/Participant';
import MenuBar from '../components/MenuBar';
import BottomMenu from '../components/BottomMenu';


/* const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  title: {
    marginTop: 103,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  description: {
    marginTop: 10,
    fontSize: 10,
    textAlign: 'center',
    color: '#34495e',
  },
  signIn: {
    marginTop: 130,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  signUp: {
    marginTop: 15,
    fontSize: 20,
  },
});
*/

export default class People extends React.Component {
  static navigationOptions = navigationOptions('People');

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
        <BottomMenu
          navigate={navigate}
          style={{
            position: 'absolute', right: 90, top: 60, bottom: 0, justifyContent: 'center', alignItems: 'center',
          }}
        />
        <ScrollView
          style={{
            height: '100%',
          }}
        >
          {new Array(13).fill(null).map(() => (
            <Participant ab="Name" ef="Tags" navigate={navigate} />
          ))}
        </ScrollView>
      </View>
    );
  }
}
