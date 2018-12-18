import { createStackNavigator, createAppContainer } from 'react-navigation';

import IndexScreen from './pages/index';
import OtherScreen from './pages/other';

const Navigator = createStackNavigator({
  Home: { screen: IndexScreen },
  Other: { screen: OtherScreen },
}, {
  initialRouteName: 'Home',
  }
);

export default createAppContainer(Navigator);
