import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { connectReducer } from './connect/reducer';

const reducers = combineReducers({
  connect: connectReducer
});

const enhancers = [applyMiddleware(thunk)];

export const store = createStore(reducers, {}, compose(...enhancers));
