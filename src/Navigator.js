import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './pages/Home';
import Other from './pages/Other';

const Navigator = createStackNavigator({
  Home: { screen: Home },
  Other: { screen: Other },
}, {
  initialRouteName: 'Home',
});

export default createAppContainer(Navigator);
