import Immutable from 'immutable';
import { createSelector } from 'reselect';

import { connectionTypes } from '../actions/connection';

const initialState = Immutable.fromJS({
  isConnected: false
});

/**
 * @param {Immutable.Map} state
 * @param {Object} action
 * @param {string} action.type
 * @param {boolean} action.payload
 * @returns {boolean}
 */
const connectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case connectionTypes.CHANGE_CONNECTION_STATUS:
      return state.merge({ isConnected: action.payload });
    default:
      return state;
  }
};

const connectionSelector = state => ({
  isConnected: state.get('connection').get('isConnected')
});

export { connectionReducer, connectionSelector };
