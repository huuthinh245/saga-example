import Immutable from 'immutable';
import { createSelector } from 'reselect';
import { authTypes } from '../actions/auth';

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
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.GET_TOKEN:
    case authTypes.GET_ME:
      return state.merge({ fetching: true });

    case authTypes.GET_ME_SUCCESS:
      return state.merge({ fetching: false, data: action.payload });

    case authTypes.GET_TOKEN_SUCCESS:
    case authTypes.GET_TOKEN_FAILURE:
    case authTypes.GET_ME_FAILURE:
      return state.merge({ fetching: false });
    default:
      return state;
  }
};

const authSelector = state => ({
  fetching: state.get('auth').get('fetching'),
  data: state.get('auth').get('data')
});

export { authReducer, authSelector };
