import React from 'react'
import { View, Text } from 'react-native'

import MessageExample from '../containers/MessageExample'
import ButtonExample from '../containers/ButtonExample'

export default class OtherScreen extends React.Component {
  static navigationOptions = {
    title: 'Other',
  }

  render() {
    return (
      <View style={{ width: '80%' }}>
        <Text>OTHER</Text>
        <ButtonExample
          text="Redux"
          message="Other page OK!"
        />
        <MessageExample />
      </View>
    )
  }
}