import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import loginAction from './authAction/loginAction';
import registerAction from './authAction/registerAction';
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
import unParticipateEventAction from './unParticipateEventAction';
import getParticipantEventAction from './getParticipantEventAction';
import userEventsAction from './userEventsAction';
import getStatusParticipationAction from './getStatusParticipationAction';

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
  unParticipateEventAction,
  getParticipantEventAction,
  userEventsAction,
  getStatusParticipationAction,
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
  getParticipantEventgetParticipantEvent: ptFuncReq,
  participateEventAction: ptFuncReq,
  unParticipateEventAction: ptFuncReq,
  userEventsAction: ptFuncReq,
  getStatusParticipationAction: ptFuncReq,
});
