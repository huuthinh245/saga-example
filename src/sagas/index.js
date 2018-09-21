import { all, takeLatest } from 'redux-saga/effects';
import { keysSaga } from './keys';
import { authSaga } from './auth';

export default function* rootSaga() {
  yield [keysSaga(), authSaga()];
}
