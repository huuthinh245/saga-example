import Immutable from 'immutable';
import { createSelector } from 'reselect';
import { eventTypes } from '../actions/event';

const initialState = Immutable.Map({
  fetching: false,
  data: []
});

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case eventTypes.GET_LIST_EVENT:
      return state.set('fetching', true);
    case eventTypes.GET_LIST_EVENT_SUCCESS:
      state.merge();
      return state.set('data', Immutable.fromJS(action.payload)).set('fetching', false);
    case eventTypes.GET_LIST_EVENT_FAILURE:
      return state.merge({ fetching: false });    
    default:
      return state;
  }
};

const eventSelector = state => ({
  fetching: state.get('listEvent').get('fetching'),
  data: state.get('listEvent').get('data')
});

export { eventReducer, eventSelector };
