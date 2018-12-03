import { all, call, put, takeLatest, fork } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';

import { authTypes, authAPI } from '../actions/auth';
import { _alert, alertTitles, alertContents } from '../utils/alert';
import { goToHome } from '../navigation/actions';
import AuthModel from '../models/Auth';

function* getMe({ payload }) {
  const { token } = payload;
  try {
    const resp = yield call(authAPI.getMe.bind(null, { token }));
    const { data } = resp;
    // timeout or not responding ...
    if (parseInt(data.errorCode, 0) === 200) {
      AuthModel.setId(data.result.idSocieteUtilisateur);
      yield put({ type: authTypes.GET_ME_SUCCESS, payload: data.result });
      goToHome();
    } else {
      _alert(alertTitles.error, resp.data.message);
      if (resp.data.code === 410) {
        AsyncStorage.removeItem('token');
      }
      yield put({ type: authTypes.GET_ME_FAILURE, payload: resp.data.error });
    }
  } catch (err) {
    _alert(alertTitles.error, err.message);
    yield put({ type: 'ERROR' });
  }
}

function* getToken({ payload }) {
  try {
    const { username, password } = payload;
    const resp = yield call(authAPI.getToken, { username, password });
    const { data } = resp;
    // timeout or not responding ...
    if (!data) {
      _alert(alertTitles.error, resp.problem);
      yield put({ type: authTypes.GET_TOKEN_FAILURE });
    } else if (parseInt(data.errorCode, 0) === 200) {
      const { token } = data;
      AuthModel.setToken(token);
      AsyncStorage.setItem('token', token);
      yield put({ type: authTypes.GET_TOKEN_SUCCESS });
      yield put({ type: authTypes.GET_ME, payload: { token } });
    } else {
      _alert(alertTitles.error, resp.data.message);
      yield put({ type: authTypes.GET_TOKEN_FAILURE });
    }
  } catch (err) {
    _alert(alertTitles.error, err.problem);
    yield put({ type: authTypes.GET_TOKEN_FAILURE });
  }
}
export function* watchLogin() {
  yield takeLatest(authTypes.GET_TOKEN, getToken);
}

export function* watchLGetMe() {
  yield takeLatest(authTypes.GET_ME, getMe);
}
export function* authSaga() {
  yield all([fork(watchLogin), fork(watchLGetMe)]);
}
