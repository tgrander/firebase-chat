import { combineEpics } from 'redux-observable';
import authEpic from './auth/epics';
import sendMessageEpic from './messages/epics';

export default combineEpics(authEpic, sendMessageEpic);
