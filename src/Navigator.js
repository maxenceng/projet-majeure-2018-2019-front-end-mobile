import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Events from './pages/Events';

const Navigator = createStackNavigator({
  Home: { screen: Home },
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp },
  Events: { screen: Events },
}, {
  initialRouteName: 'Home',
});

export default createAppContainer(Navigator);
