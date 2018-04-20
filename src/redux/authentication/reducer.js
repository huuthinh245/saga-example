import { handleActions } from 'redux-actions';
import { getOr } from 'lodash/fp';
import * as types from './actionTypes';

export const authenticationReducer = handleActions({
  [types.REGISTER_SUCCESS]: (state, { payload }) => payload
}, {});


export const authenticationSelector = getOr({}, 'authenticationReducer');
