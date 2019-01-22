import React from 'react';
import PropTypes from 'prop-types';
import {
  View, ScrollView,
}
  from 'react-native';
import MenuBar from '../containers/MenuBar';
import Participant from './Participant';

const ConversationList = ({ conversations, setActive }) => (
  <View>
    <MenuBar
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
          <Participant key={idUser} person={person} onClick={setActive({ person, idUser })} />
        ))}
      </ScrollView>
    </View>
  </View>
);

ConversationList.propTypes = {
  conversations: PropTypes.instanceOf(Object).isRequired,
  setActive: PropTypes.func.isRequired,
};

export default ConversationList;
