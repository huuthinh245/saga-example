import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { middleware as apiMiddleware } from 'redux-api-call';
import { createEpicMiddleware } from 'redux-observable';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { navReducer } from 'dn-utils';

import { authenticationReducer } from './authentication/reducer';
import { epics } from './epics';
import { registerScreens } from '../screens/register';

const reducers = combineReducers({
  nav: navReducer,
  authenticationReducer
});

const epicMiddleware = createEpicMiddleware(epics);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = [
  applyMiddleware(
    epicMiddleware,
    apiMiddleware(),
    thunk,
    logger
  ),
];

export const store = createStore(
  reducers,
  {},
  composeEnhancers(...enhancers),
);

registerScreens(store);