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
    fontSize: 15,
    marginLeft: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  Item3: {
    /* position: 'absolute',
    left: 35,
    bottom: -40, */
    fontSize: 15,
    marginLeft: 90,
    fontWeight: 'bold',
    color: 'black',
  },
  eventimage: {
    /* position: 'absolute',
    top: -20,
    justifyContent: 'center',
    alignItems: 'center', */
    width: 60,
    height: 60,
    marginTop: 5,
  },
});
const Participant = ({
  ab, ef, navigate,
}) => (
  <View style={{
    borderColor: 'black', borderWidth: 0.5,
  }}
  >
    <View style={{
      flex: 1, flexDirection: 'row', paddingLeft: 15, height: 50,
    }}
    >
      <Image
        style={styles.eventimage}
        source={imageprofile}
      />
      <Text style={styles.Item1}>{ab}</Text>
      <TouchableHighlight
        onPress={() => navigate('Mail')}
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
    <View>
      <Text style={styles.Item3}>{ef}</Text>
    </View>
  </View>
);

Participant.propTypes = {
  ab: PropTypes.string.isRequired,
  ef: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default Participant;
