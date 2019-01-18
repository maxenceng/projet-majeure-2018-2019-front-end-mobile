import React from 'react';
import PropTypes from 'prop-types';
import {
  View, StyleSheet, Text, TouchableHighlight, Image,
}
  from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import imageprofile from '../images/edsheeran.jpg';

const styles = StyleSheet.create({
  Item1: {
    /* position: 'absolute',
    left: 35,
    bottom: -70,
    justifyContent: 'center',
    alignItems: 'center', */
    width: '100%',
    fontSize: 15,
    marginLeft: 15,
    marginTop: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  Item3: {
    /* position: 'absolute',
    left: 35,
    bottom: -40, */
    fontSize: 15,
    marginLeft: 90,
    color: 'black',
    width: 200,
    marginTop: -15,
  },
  eventimage: {
    /* position: 'absolute',
    top: -20,
    justifyContent: 'center',
    alignItems: 'center', */
    width: 60,
    height: 60,
    marginTop: 5,
    borderRadius: 30,
  },
});
const Participant = ({
  person, onClick,
}) => (
  <View style={{
  }}
  >
    <View style={{
      flex: 1, flexDirection: 'row', paddingLeft: 15, height: 50, marginBottom: 10,
    }}
    >
      <Image
        style={styles.eventimage}
        source={imageprofile}
      />
      <Text style={styles.Item1}>{person}</Text>
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
    </View>
  </View>
);

Participant.propTypes = {
  person: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Participant;
