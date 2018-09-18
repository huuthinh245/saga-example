import { connectTypes } from './actions';

const initState = true;

export const connectReducer = (state = initState, action) => {
  switch (action.type) {
    case connectTypes.CHANGE_CONNECTION_STATUS:
      return action.payload;
    default:
      return state;
  }
};
