import 'rxjs';
import { combineEpics } from 'redux-observable';
import { alert as _alert, navActions } from 'dn-utils';

import * as types from './actionTypes';

const { push } = navActions;


const registerSuccessEpic = (actions$, store) =>
  actions$
    .filter((action) => {
      const { payload, type } = action;
      if (!payload) return false;
      const { name } = payload;
      return type === '@@api/FETCH_COMPLETE' && name === types.REGISTER;
    })
    .map((action) => {
      if(action.payload.json.status === 1) {
        // _alert('SUCCESS', 'This is an error from server', { text: 'OK' });
        const screen = {
          screen: 'Screen4',
          title: 'API ban qua', // title of the screen as appears in the nav bar (optional)
          navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
          navigatorButtons: {},
          passProps: { id: 'api ban qua nha' },
        };

        store.dispatch(push(screen));
        return {
          type: types.REGISTER_SUCCESS,
          payload: action.payload.json.data
        };
      }
      _alert('ERROR', 'This is an error from server', { text: 'OK' });
      return { type: types.REGISTER_FAIL };
    });

const registerFailEpic = (actions$) =>
  actions$
    .filter((action) => {
      const { payload, type } = action;
      if (!payload) return false;
      const { name } = payload;
      return type === '@@api/FAILURE' && name === types.REGISTER;
    })
    .map((action) => {
      _alert('INVALID TOKEN', action.payload.json.message, { text: 'OK' });
      return { type: REGISTER_FAIL };
    });

export const authenticationEpic = combineEpics(
  registerSuccessEpic,
  registerFailEpic
);