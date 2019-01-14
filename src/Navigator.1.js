import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import EventsDescription from './components/EventsDescription';
import People from './pages/People';

const TabNavigator = createBottomTabNavigator({
  EventsDescription: { screen: EventsDescription },
  People: { screen: People },
});

export default createAppContainer(TabNavigator);
