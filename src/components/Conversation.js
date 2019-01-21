import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ScrollView,
  TextInput,
  Button,
}
  from 'react-native';
import MenuBar from './MenuBar';
import Interlocutor from './Interlocutor';

export default class Conversation extends React.Component {
  static propTypes = {
    navigate: PropTypes.func.isRequired,
    messages: PropTypes.arrayOf(PropTypes.shape({
      MES_DATE: PropTypes.string.isRequired,
      MES_AUTHOR: PropTypes.string.isRequired,
      MES_CONTENT: PropTypes.string.isRequired,
    })),
    currentIdUser: PropTypes.string.isRequired,
    sendMessage: PropTypes.func.isRequired,
  };

  static defaultProps = {
    messages: [],
  };

  state = {
    value: '',
  };

  onChange = ({ nativeEvent: { text: value } }) => this.setState({ value }, console.log(value));

  render() {
    const {
      navigate,
      messages,
      currentIdUser,
      sendMessage,
    } = this.props;
    const { value } = this.state;
    return (
      <View>
        <MenuBar
          navigate={navigate}
          style={{
            position: 'absolute', right: 90, top: 30, bottom: 0, justifyContent: 'center', alignItems: 'center',
          }}
        />
        <ScrollView
          style={{
            height: '100%',
          }}
        >
          {messages && messages.sort((a, b) => a.MES_DATE - b.MES_DATE)
            .map(({ MES_DATE, ...message }) => (
              <Interlocutor
                key={MES_DATE}
                message={message}
                currentIdUser={currentIdUser}
              />
            ))
          }
          <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} value={value} onChange={this.onChange} />
          <Button title="Send" onPress={sendMessage(value)} />
        </ScrollView>
      </View>
    );
  }
}
