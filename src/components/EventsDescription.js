import React from 'react';
import {
  View, StyleSheet, Text, Image,
}
  from 'react-native';
import PropTypes from 'prop-types';
import imageprofile from '../images/edsheeran.jpg';

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
  eventimage: {
    /* position: 'absolute',
    top: -20,
    justifyContent: 'center',
    alignItems: 'center', */
    width: 180,
    height: 180,
    marginBottom: 20,
  },
});
const EventsDescription = ({
  titleEvent, dayDate, placeofevent, description,
}) => (
  <View style={{
    position: 'absolute', top: 300, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',
  }}
  >
    <Image
      style={styles.eventimage}
      source={imageprofile}
    />
    <View style={{
      position: 'relative', marginRight: 60,
    }}
    >
      <Text>
        {titleEvent}
      </Text>
      <Text>
        {dayDate}
      </Text>
      <Text>
        {placeofevent}
      </Text>
      <Text>
        {description}
      </Text>
    </View>
  </View>
);

EventsDescription.propTypes = {
  dayDate: PropTypes.string.isRequired,
  titleEvent: PropTypes.string.isRequired,
  placeofevent: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default EventsDescription;
