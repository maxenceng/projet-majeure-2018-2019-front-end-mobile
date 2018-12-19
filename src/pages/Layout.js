import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

const Layout = ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
