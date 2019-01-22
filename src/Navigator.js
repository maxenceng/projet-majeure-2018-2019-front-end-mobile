import { createStackNavigator } from 'react-navigation';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import CreateProfile from './pages/CreateProfile';
import Eventpage from './pages/Eventpage';
import EventDetails from './pages/EventDetails';
import MenuBar from './components/MenuBar';
import BottomMenu from './components/BottomMenu';
import Participant from './components/Participant';
import AllEvents from './pages/AllEvents';
import Test from './pages/Test';
import EventsForMe from './pages/EventsForMe';
import RandomEvents from './pages/RandomEvents';
import People from './pages/People';
import Mail from './pages/Mail';
import Conversation from './pages/Conversation';
import Interlocutor from './components/Interlocutor';

export const Navigator = createStackNavigator({
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
  Conversation: { screen: Conversation },
  Interlocutor: { screen: Interlocutor },
  CreateProfile: { screen: CreateProfile },
  BottomMenu: { screen: BottomMenu },
  Test: { screen: Test },
}, {
  initialRouteName: 'Eventpage',
});

export const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);
const App = reduxifyNavigator(Navigator, 'root');
const mapStateToProps = ({ nav }) => ({ state: nav });
const AppWithNavigationState = connect(mapStateToProps)(App);

export default AppWithNavigationState;
