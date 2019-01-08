import React from 'react';
import { View, Text, Button } from 'react-native';

import navigationOptions from '../utils/navigationOptions';
import MessageExample from '../containers/MessageExample';
import ButtonExample from '../containers/ButtonExample';
import Layout from './Layout';

export default class Home extends React.Component {
  static navigationOptions = navigationOptions('Home');

  render() {
    const { navigation: { navigate } } = this.props;
    return (
      <Layout>
        <View style={{ width: '70%' }}>
          <Text>HELLO</Text>
          <ButtonExample
            text="Redux"
            message="Redux OK!"
          />
          <MessageExample />
          <Button
            title="Go to other page"
            onPress={() => navigate('Other')}
          />
          <Button
            title="Go to Connexion page"
            onPress={() => navigate('SignUp')}
          />
        </View>
      </Layout>
    );
  }
}
