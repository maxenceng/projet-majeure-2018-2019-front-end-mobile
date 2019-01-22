import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ScrollView,
  TextInput,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
}
  from 'react-native';
import MenuBar from './MenuBar';
import Interlocutor from './Interlocutor';
import { COLOR_TITLE } from '../helpers/common';
import Button from './Button';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: '80%',
    width: '100%',
  },
  scroll: {
    height: '77%',
  },
  sendGroup: {
    height: '5%',
  },
  title: {
    height: '8%',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLOR_TITLE,
  },
});

export default class Conversation extends React.Component {
  static propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({
      MES_DATE: PropTypes.string.isRequired,
      MES_AUTHOR: PropTypes.string.isRequired,
      MES_CONTENT: PropTypes.string.isRequired,
    })),
    currentIdUser: PropTypes.string.isRequired,
    sendMessage: PropTypes.func.isRequired,
    person: PropTypes.string.isRequired,
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
      messages,
      currentIdUser,
      sendMessage,
      person,
    } = this.props;
    const { value } = this.state;
    return (
      <KeyboardAvoidingView behavior="position">
        <MenuBar />
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.title}>{person}</Text>
            <View style={styles.scroll}>
              <ScrollView>
                {messages && messages.sort((a, b) => a.MES_DATE - b.MES_DATE)
                  .map(({ MES_DATE, ...message }) => (
                    <Interlocutor
                      key={MES_DATE}
                      message={message}
                      currentIdUser={currentIdUser}
                    />
                  ))
                }
              </ScrollView>
            </View>
            <View style={styles.sendGroup}>
              <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} value={value} onChange={this.onChange} />
              <Button onPress={sendMessage(value)}>Send</Button>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
