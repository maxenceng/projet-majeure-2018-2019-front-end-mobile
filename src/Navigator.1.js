import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import EventsDescription from './components/EventsDescription';
import People from './pages/People';

const TabNavigator = createBottomTabNavigator({
  EventsDescription: { screen: EventsDescription },
  People: { screen: props => <People {...props} color="#fff" /> },
});


export default createAppContainer(TabNavigator);
