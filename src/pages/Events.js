import React from 'react';
import { View, Button, TextInput } from 'react-native';

import navigationOptions from '../utils/navigationOptions';
import Layout from './Layout';

export default class Events extends React.Component {
  static navigationOptions = navigationOptions('Events');

  render() {
    const { navigation: { navigate } } = this.props;
    return (
      <Layout>
        <View style={{ width: '70%' }}>
          <TextInput
            placeholder="user"
          />
          <TextInput
            placeholder="password"
          />
          <Button
            title="SignIn"
            onPress={() => navigate('Events')}
          />
        </View>
      </Layout>
    );
  }
}
