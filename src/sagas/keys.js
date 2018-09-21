import { call, put, takeLatest } from 'redux-saga/effects';
import { Navigation } from 'react-native-navigation';

import { keysAPI, keysTypes } from '../actions/keys';
import { _alert, alertTitles, alertContents } from '../utils/alert';
import { goToAuth } from '../navigation/actions';
import AuthModel from '../models/Auth';
import { authTypes } from '../actions/auth';

function* fetchKeys() {
  try {
    const resp = yield call(keysAPI.fetchKeys);

    // timeout or not responding ...
    if (!resp.status) {
      _alert(alertTitles.error, resp.problem);
    }
    if (resp.status === 200) {
      const token = AuthModel.getToken();
      if (token) {
        yield put({ type: authTypes.GET_ME, payload: { token } });
      } else {
        goToAuth();
      }
      yield put({ type: keysTypes.FETCH_KEYS_SUCCESS, payload: resp.data.data });
    } else {
      _alert(alertTitles.error, resp.data.message);
      yield put({ type: keysTypes.FETCH_KEYS_FAILURE });
    }
  } catch (err) {
    _alert(alertTitles.error, err.message);
    yield put({ type: 'ERROR' });
  }
}

export function* keysSaga() {
  yield takeLatest(keysTypes.FETCH_KEYS, fetchKeys);
}
