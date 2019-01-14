import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Eventpage from './pages/Eventpage';
import EventDetails from './pages/EventDetails';
import MenuBar from './components/MenuBar';
import Participant from './components/Participant';
import AllEvents from './pages/AllEvents';
import EventsForMe from './pages/EventsForMe';
import RandomEvents from './pages/RandomEvents';
import People from './pages/People';
import Mail from './pages/Mail';

const Navigator = createStackNavigator({
  Home: { screen: Home },
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp },
  Profile: { screen: Profile },
  Eventpage: { screen: Eventpage },
  MenuBar: { screen: MenuBar },
  EventsForMe: { screen: EventsForMe },
  AllEvents: { screen: AllEvents },
  RandomEvents: { screen: RandomEvents },
  EventDetails: { screen: EventDetails },
  People: { screen: People },
  Participant: { screen: Participant },
  Mail: { screen: Mail },
}, {
  initialRouteName: 'EventDetails',
});

export default createAppContainer(Navigator);
