import React from 'react';
import {
  View,
}
  from 'react-native';
import TabNavigator1 from '../Navigator.1';
import navigationOptions from '../utils/navigationOptions';
import MenuBar from '../components/MenuBar';


export default class EventDetails extends React.Component {
  static navigationOptions = navigationOptions('EventDetails');

  handleSubmit = () => {
    const value = this.form.getValue();
    console.log('value: ', value);
  }

  render() {
    const { navigation: { navigate } } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <View>
          <MenuBar
            navigate={navigate}
          />
        </View>
        <TabNavigator1
          navigate={navigate}
        />
      </View>
    );
  }
}
