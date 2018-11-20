import api from '../api';

const authTypes = {
  GET_TOKEN: 'GET_TOKEN',
  GET_TOKEN_SUCCESS: 'GET_TOKEN_SUCCESS',
  GET_TOKEN_FAILURE: 'GET_TOKEN_FAILURE',

  GET_ME: 'GET_ME',
  GET_ME_SUCCESS: 'GET_ME_SUCCESS',
  GET_ME_FAILURE: 'GET_ME_FAILURE',

  LOGOUT: 'LOGOUT',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  LOGOUT_FAILURE: 'LOGOUT_FAILURE',

  GET_INFO_BY_ID: 'GET_INFO_BY_ID',
  GET_INFO_BY_ID_SUCCESS: 'GET_INFO_BY_ID_SUCCESS',
  GET_INFO_BY_ID_FAILURE: 'GET_INFO_BY_ID_FAILURE',

  GET_INFO_BY_TOKEN: 'GET_INFO_BY_TOKEN',
  GET_INFO_BY_TOKEN_SUCCESS: 'GET_INFO_BY_TOKEN_SUCCESS',
  GET_INFO_BY_TOKEN_FAILURE: 'GET_INFO_BY_TOKEN_FAILURE',

  UPDATE_AVATAR: 'UPDATE_AVATAR',
  UPDATE_AVATAR_SUCCESS: 'UPDATE_AVATAR_SUCCESS',
  UPDATE_AVATAR_FAILURE: 'UPDATE_AVATAR_FAILURE',

  UPDATE_INFO: 'UPDATE_INFO',
  UPDATE_INFO_FAILURE_SUCCESS: 'UPDATE_INFO_FAILURE_SUCCESS',
  UPDATE_INFO_FAILURE_FAILURE: 'UPDATE_INFO_FAILURE_FAILURE'
};

const authActionsToDispatch = {
  getToken: ({ username, password, onSuccess = () => {}, onError = () => {} }) => ({
    type: authTypes.GET_TOKEN,
    payload: { username, password, onSuccess, onError }
  }),
  getMe: (token) => ({
    type: authTypes.GET_ME,
    payload: { token }
  }),
  logout: ({ onSuccess = () => {}, onError = () => {} }) => ({
    type: authTypes.LOGOUT,
    payload: { onSuccess, onError }
  })
};

const authAPI = {
  getToken: ({ username, password }) => {
    const form = JSON.stringify({
      UserName: username,
      Password: password
    });
    const config = {
      headers: { 'Content-Type': 'application/json' },
      onUploadProgress: progressEvent => {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
      }
    };
    return api.post('login/createtoken', form, config);
  },
  getMe: ({ token }) => {
    const config = {
      headers: { strToken: token },
    };
    return api.post('login', null, config);
  }
};

export { authTypes, authActionsToDispatch, authAPI };
