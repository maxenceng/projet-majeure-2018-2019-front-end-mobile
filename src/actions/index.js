import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import loginAction from './authAction/loginAction';
import registerAction from './authAction/registerAction';
import openIdLoginAction from './authAction/openIdLoginAction';
import profileSaveAction from './profileAction/profileSaveAction';
import getMessagesAction from './chatAction/getMessagesAction';
import getConversationsAction from './chatAction/getConversationsAction';
import currentConvAction from './currentConvAction';
import addMessageAction from './chatAction/addMessageAction';
import getAllEventsAction from './eventAction/getAllEventsAction';
import currentEventAction from './currentEventAction';
import getProfileAction from './profileAction/getProfileAction';
import connectionStatusAction from './connectionStatusAction';
import participateEventAction from './participateEventAction';
import addFavEventAction from './addFavEventAction';
import unParticipateEventAction from './unParticipateEventAction';
import removeFavEventAction from './removeFavEventAction';
import getParticipantEventAction from './getParticipantEventAction';
import userEventsAction from './userEventsAction';
import getInterestedEventAction from './getInterestedEventAction';
import getStatusParticipationAction from './getStatusParticipationAction';
import getStatusFavoriteAction from './getStatusFavoriteAction';
import locationAction from './locationAction';
import getEventByFilterAction from './eventAction/getEventByFilterAction';
import getEventForMeAction from './getEventForMeAction';
import switchEventModeAction from './switchEventModeAction';

const allActions = {
  loginAction,
  registerAction,
  profileSaveAction,
  getMessagesAction,
  getConversationsAction,
  currentConvAction,
  addMessageAction,
  getAllEventsAction,
  currentEventAction,
  getProfileAction,
  connectionStatusAction,
  participateEventAction,
  addFavEventAction,
  unParticipateEventAction,
  removeFavEventAction,
  getParticipantEventAction,
  userEventsAction,
  getInterestedEventAction,
  getStatusParticipationAction,
  getStatusFavoriteAction,
  locationAction,
  getEventByFilterAction,
  openIdLoginAction,
  getEventForMeAction,
  switchEventModeAction,
};

export default dispatch => ({ actions: bindActionCreators(allActions, dispatch) });

const ptFuncReq = PropTypes.func.isRequired;

export const actionPropTypes = PropTypes.shape({
  loginAction: ptFuncReq,
  registerAction: ptFuncReq,
  profileSaveAction: ptFuncReq,
  getMessagesAction: ptFuncReq,
  getConversationsAction: ptFuncReq,
  currentConvAction: ptFuncReq,
  addMessageAction: ptFuncReq,
  getAllEventsAction: ptFuncReq,
  currentEventAction: ptFuncReq,
  getProfileAction: ptFuncReq,
  connectionStatusAction: ptFuncReq,
  getParticipantEventAction: ptFuncReq,
  participateEventAction: ptFuncReq,
  addFavEventAction: ptFuncReq,
  unParticipateEventAction: ptFuncReq,
  removeFavEventAction: ptFuncReq,
  userEventsAction: ptFuncReq,
  getInterestedEventAction: ptFuncReq,
  getStatusParticipationAction: ptFuncReq,
  getStatusFavoriteAction: ptFuncReq,
  locationAction: ptFuncReq,
  getEventByFilterAction: ptFuncReq,
  getEventForMeAction: ptFuncReq,
  switchEventModeAction: ptFuncReq,
});
