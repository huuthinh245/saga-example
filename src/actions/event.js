import api from '../api';

const eventTypes = {
  GET_LIST_EVENT: 'GET_LIST_EVENT',
  GET_LIST_EVENT_SUCCESS: 'GET_LIST_EVENT_SUCCESS',
  GET_LIST_EVENT_FAILURE: 'GET_LIST_EVENT_FAILURE'
};

const eventAction = {
  getListEvent: ({ strToken, societe }) => ({
    type: eventTypes.GET_LIST_EVENT,
    payload: { strToken, societe }
  })
};

const eventApi = {
  getListEvent: ({ strToken, societe }) => {
    return api.get(`event/listeventMB?strToken=${strToken}&societe=${societe}`);
  }
};

export { eventTypes, eventAction, eventApi };
