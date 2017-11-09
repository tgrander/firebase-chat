import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './modules/rootReducer';
import rootEpic from './modules/rootEpic';


const epicMiddleware = createEpicMiddleware(rootEpic);

const store = createStore(
  rootReducer,
  applyMiddleware(logger, epicMiddleware),
);

export default store;
