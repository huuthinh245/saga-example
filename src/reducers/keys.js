import Immutable from 'immutable';
import { createSelector } from 'reselect';
import { keysTypes } from '../actions/keys';

const initialState = Immutable.fromJS({
  fetching: false,
  data: {}
});

/**
 * @param {Immutable.Map} state
 * @param {Object} action
 * @param {string} action.type
 * @param {Object} action.payload
 * @returns {Immutable.Map}
 */
const keysReducer = (state = initialState, action) => {
  switch (action.type) {
    case keysTypes.FETCH_KEYS:
      return state.merge({ fetching: true });
    case keysTypes.FETCH_KEYS_SUCCESS:
      return state.merge({ fetching: false, data: action.payload });
    case keysTypes.FETCH_KEYS_FAILURE:
      return state.merge({ fetching: false });
    default:
      return state;
  }
};

const keysSelector = state => ({
  fetching: state.get('keys').get('fetching'),
  data: state.get('keys').get('data')
});

export { keysReducer, keysSelector };
