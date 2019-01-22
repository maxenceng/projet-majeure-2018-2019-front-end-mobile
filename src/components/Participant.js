import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, TouchableHighlight, Image,
}
  from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { List } from 'react-native-paper';

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});

const Participant = ({
  profileAvatar, person, onClick,
}) => (
  <List.Item
    title={person}
    left={() => <Image style={styles.image} source={{ uri: profileAvatar }} />}
    right={() => (
      <TouchableHighlight
        onPress={onClick}
        style={{
          position: 'absolute', right: 20, top: 15, bottom: 0, justifyContent: 'center', alignItems: 'center',
        }}
      >
        <Ionicons
          style={{ marginLeft: 20 }}
          name="ios-mail"
          size={60}
          color="black"
        />
      </TouchableHighlight>
    )
    }
  />
);

Participant.propTypes = {
  profileAvatar: PropTypes.string.isRequired,
  person: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Participant;
