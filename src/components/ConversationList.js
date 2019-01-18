import React from 'react';
import PropTypes from 'prop-types';
import {
  View, ScrollView,
}
  from 'react-native';
import MenuBar from './MenuBar';
import Participant from './Participant';

export default class ConversationList extends React.Component {
  static propTypes = {
    conversations: PropTypes.instanceOf(Object).isRequired,
    navigate: PropTypes.func.isRequired,
  }

  onClick = () => {
    const { navigate } = this.props;
    navigate('Conversation');
  }

  render() {
    const { navigate, conversations } = this.props;
    return (
      <View>
        <MenuBar
          navigate={navigate}
          style={{
            position: 'absolute', right: 90, top: 30, bottom: 0, justifyContent: 'center', alignItems: 'center',
          }}
        />
        <View>
          <ScrollView
            style={{
              height: '100%',
            }}
          >
            {conversations.map(({ person, idUser }) => (
              <Participant key={idUser} person={person} onClick={this.onClick} />
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}
