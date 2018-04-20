import { makeFetchAction } from 'redux-api-call';

import * as types from './actionTypes';
import APIs from '../../api/authentication';

export const {
  actionCreator: registerAction,
  isFetchingSelector: isRegisteringAction,
} = makeFetchAction(types.REGISTER, data => {
  return {
    // endpoint: APIs.register,
    endpoint: 'https://dev.bikenconnect.com/api/team?access_token=26df116c4f7f83d6d958015de113f9c0f0984048&page=1&user_id=1&radius=0&keyword=0&discipline=0',
    method: 'GET',
    body: JSON.stringify(data)
    // headers: setDefaultHeader,
  };
});