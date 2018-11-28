import { all } from 'redux-saga/effects';
import { authSaga } from './auth';
import { eventSaga } from './eventSaga';

export default function* rootSaga() {
  yield all([
    authSaga(),
    eventSaga()
  ]);
}
