import React from 'react';
import { View, Text, Button } from 'react-native';

import navigationOptions from '../utils/navigationOptions';
import MessageExample from '../containers/MessageExample';
import ButtonExample from '../containers/ButtonExample';
import Layout from './Layout';

export default class Other extends React.Component {
  static navigationOptions = navigationOptions('Other');

  render() {
    const { navigation: { navigate } } = this.props;
    return (
      <Layout>
        <View style={{ width: '70%' }}>
          <Text>OTHER</Text>
          <ButtonExample
            text="Redux"
            message="Other page OK!"
          />
          <MessageExample />
          <Button
            title="Go to home page"
            onPress={() => navigate('Home')}
          />
        </View>
      </Layout>
    );
  }
}
