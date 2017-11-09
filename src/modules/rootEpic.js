import { combineEpics } from 'redux-observable';
import authEpic from './auth/epics';
import messagesEpic from './messages/epics';

export default combineEpics(authEpic, messagesEpic);
