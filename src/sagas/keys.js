import { call, put, takeLatest } from 'redux-saga/effects';
import { Navigation } from 'react-native-navigation';

import { keysAPI, keysTypes } from '../actions/keys';
import { _alert, alertTitles, alertContents } from '../utils/alert';
import { goToAuth } from '../navigation/actions';

function* fetchKeys({ payload }) {
  try {
    const resp = yield call(keysAPI.fetchKeys);
    payload.dismissOverlay();
    // timeout or not responding ...
    if (!resp.status) {
      _alert(alertTitles.error, resp.problem);
    }
    if (resp.status === 200) {
      // goToAuth();
      Navigation.dismissOverlay();
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
