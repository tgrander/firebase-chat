import { combineEpics } from 'redux-observable';
import authEpic from './auth/epics';

export default combineEpics(authEpic);
