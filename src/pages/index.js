import React from 'react'
import { View, Text, Button } from 'react-native'

import MessageExample from '../containers/MessageExample'
import ButtonExample from '../containers/ButtonExample'

export default class IndexScreen extends React.Component {
  static navigationOptions = {
    title: 'Index',
  }

  render() {
    const { navigation } = this.props
    return (
      <View style={{ width: '70%' }}>
        <Text>HELLO</Text>
        <ButtonExample
          text="Redux"
          message="Redux OK!"
        />
        <MessageExample />
        <Button
          title="Go to other page"
          onPress={() => navigation('Other')}
        />
      </View>
    )
  }
}