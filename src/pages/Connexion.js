import React from 'react';
import { View, Button, TextInput } from 'react-native';

import navigationOptions from '../utils/navigationOptions';
import Layout from './Layout';

export default class SignUp extends React.Component {
  static navigationOptions = navigationOptions('SignUp');

  render() {
    const { navigation: { navigate } } = this.props;
    return (
      <Layout>
        <View style={{ width: '70%' }}>
          <TextInput
            placeholder="user"
          />
          <Button
            title="Go to home page"
            onPress={() => navigate('Home')}
          />
        </View>
      </Layout>
    );
  }
}
