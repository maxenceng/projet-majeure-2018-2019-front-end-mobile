import { combineReducers } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';

import auth from './authReducer';
import message from './messageReducer';
import conversation from './conversationReducer';
import event from './eventReducer';
import profile from './profileReducer';
import connectionStatus from './connectionStatusReducer';
import idEvent from './currentEventReducer';
import participant from './participantReducer';
import participate from './participateEventReducer';
import userEvents from './userEvents';
import currentConv from './currentConvReducer';
import participation from './statusParticipationReducer';
import { Navigator } from '../Navigator';

const nav = createNavigationReducer(Navigator);

export default combineReducers({
  auth,
  message,
  conversation,
  event,
  profile,
  connectionStatus,
  idEvent,
  participant,
  participate,
  userEvents,
  currentConv,
  participation,
  nav,
});
