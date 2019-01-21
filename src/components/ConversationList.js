import React from 'react';
import PropTypes from 'prop-types';
import {
  View, ScrollView,
}
  from 'react-native';
import MenuBar from './MenuBar';
import Participant from './Participant';

const ConversationList = ({ navigate, conversations, setActive }) => (
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
          <Participant key={idUser} person={person} onClick={setActive({ person, idUser })} />
        ))}
      </ScrollView>
    </View>
  </View>
);

ConversationList.propTypes = {
  conversations: PropTypes.instanceOf(Object).isRequired,
  navigate: PropTypes.func.isRequired,
  setActive: PropTypes.func.isRequired,
};

export default ConversationList;
