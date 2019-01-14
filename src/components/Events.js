import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, StyleSheet,
}
  from 'react-native';

const styles = StyleSheet.create({
  Item1: {
    /* position: 'absolute',
    left: 35,
    bottom: -70,
    justifyContent: 'center',
    alignItems: 'center', */
    fontSize: 15,
    marginRight: 100,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  Item2: {
    /* position: 'absolute',
    left: 35,
    bottom: -40, */
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  Item3: {
    /* position: 'absolute',
    left: 35,
    bottom: -40, */
    fontSize: 15,
    marginRight: 100,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  Item4: {
    /* position: 'absolute',
    left: 35,
    bottom: -40, */
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
});
const Events = ({
  day, titleEvent, dayDate, description,
}) => (
  <View style={{
    borderColor: 'black', borderWidth: 0.5,
  }}
  >
    <View style={{
      flex: 1, flexDirection: 'row', paddingLeft: 25,
    }}
    >
      <Text style={styles.Item1}>{day}</Text>
      <Text style={styles.Item2}>{titleEvent}</Text>
    </View>
    <View
      style={{
        flex: 1, flexDirection: 'row', paddingLeft: 25,
      }}
    >
      <Text style={styles.Item3}>{dayDate}</Text>
      <Text style={styles.Item4}>{description}</Text>
    </View>
  </View>
);

Events.propTypes = {
  day: PropTypes.string.isRequired,
  titleEvent: PropTypes.string.isRequired,
  dayDate: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Events;
