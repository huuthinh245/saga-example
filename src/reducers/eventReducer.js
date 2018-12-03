import Immutable from 'immutable';
import { createSelector } from 'reselect';
import { eventTypes } from '../actions/event';

const initialState = Immutable.fromJS({
  fetching: false,
  data: []
});

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case eventTypes.GET_LIST_EVENT:
      return state.set('fetching', true);
    case eventTypes.GET_LIST_EVENT_SUCCESS:
      return state.merge({ data: action.payload }).set('fetching', false);
    case eventTypes.GET_LIST_EVENT_FAILURE:
      return state.merge({ fetching: false });
    default:
      return state;
  }
};

const eventSelector = state => ({
  fetching: state.get('listEvent').get('fetching'),
  data: state
    .get('listEvent')
    .get('data')
    .toJS()
});

export { eventReducer, eventSelector };
