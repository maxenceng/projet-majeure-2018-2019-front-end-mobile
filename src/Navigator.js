import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Eventpage from './pages/Eventpage';
import MenuBar from './components/MenuBar';

const Navigator = createStackNavigator({
  Home: { screen: Home },
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp },
  Profile: { screen: Profile },
  Eventpage: { screen: Eventpage },
  MenuBar: { screen: MenuBar },
}, {
  initialRouteName: 'Home',
});

export default createAppContainer(Navigator);
