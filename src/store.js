import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import Immutable from 'immutable';
import reducers from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers(reducers);

const middlewares = [thunk, sagaMiddleware];

const enhancer = composeWithDevTools({})(applyMiddleware(...middlewares));

const store = createStore(reducer, Immutable.Map({}), enhancer);

sagaMiddleware.run(rootSaga);

export default store;
