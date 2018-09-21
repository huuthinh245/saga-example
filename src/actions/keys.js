import api from '../api';

const keysTypes = {
  FETCH_KEYS: 'FETCH_KEYS',
  FETCH_KEYS_SUCCESS: 'FETCH_KEYS_SUCCESS',
  FETCH_KEYS_FAILURE: 'FETCH_KEYS_FAILURE'
};

const keysActionsToDispatch = {
  fetchKeys: () => ({
    type: keysTypes.FETCH_KEYS
  })
};

const keysAPI = {
  fetchKeys: () => api.get('list/all')
};

export { keysTypes, keysActionsToDispatch, keysAPI };
