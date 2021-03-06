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
import MenuBar from './containers/MenuBar';
import TopMenu from './containers/TopMenu';
import Participant from './components/Participant';
import AllEvents from './pages/AllEvents';
import EventsForMe from './pages/EventsForMe';
import People from './pages/People';
import Mail from './pages/Mail';
import Conversation from './pages/Conversation';
import Interlocutor from './components/Interlocutor';

// Avoid displaying warnings when doing a demo
console.disableYellowBox = true;

export const Navigator = createStackNavigator({
  Home: { screen: Home },
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp },
  Profile: { screen: Profile },
  Eventpage: { screen: Eventpage },
  MenuBar: { screen: MenuBar },
  EventsForMe: { screen: EventsForMe },
  AllEvents: { screen: AllEvents },
  EventDetails: { screen: EventDetails },
  People: { screen: People },
  Participant: { screen: Participant },
  Mail: { screen: Mail },
  Conversation: { screen: Conversation },
  Interlocutor: { screen: Interlocutor },
  CreateProfile: { screen: CreateProfile },
  TopMenu: { screen: TopMenu },
}, {
  initialRouteName: 'Home',
});

export const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);
const App = reduxifyNavigator(Navigator, 'root');
const mapStateToProps = ({ nav }) => ({ state: nav });
const AppWithNavigationState = connect(mapStateToProps)(App);

export default AppWithNavigationState;
