import React from 'react';
import PropTypes from 'prop-types';
import {
  View, StyleSheet, Text, Image,
}
  from 'react-native';
import imageprofile from '../images/edsheeran.jpg';

const styles = StyleSheet.create({
  Item1: {
    /* position: 'absolute',
    left: 35,
    bottom: -70,
    justifyContent: 'center',
    alignItems: 'center', */
    marginTop: 7,
    fontSize: 15,
    position: 'absolute',
    right: 80,
    fontWeight: 'bold',
    color: 'black',
  },
  Item3: {
    /* position: 'absolute',
    left: 35,
    bottom: -40, */
    fontSize: 15,
    marginLeft: 173,
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
    position: 'absolute',
    right: 10,
    marginTop: 5,
    borderRadius: 30,
  },
});
const Interlocutor2 = ({
  ab, ef,
}) => (
  <View>
    <View style={{
      flex: 1, flexDirection: 'row', paddingLeft: 15, height: 50, marginBottom: 10,
    }}
    >
      <Image
        style={styles.eventimage}
        source={imageprofile}
      />
      <Text style={styles.Item1}>{ab}</Text>
    </View>
    <View>
      <Text style={styles.Item3}>{ef}</Text>
    </View>
  </View>
);

Interlocutor2.propTypes = {
  ab: PropTypes.string.isRequired,
  ef: PropTypes.string.isRequired,
};

export default Interlocutor2;
