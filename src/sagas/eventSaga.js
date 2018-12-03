import { all, call, put, takeLatest, fork } from 'redux-saga/effects';
import { eventApi, eventTypes } from '../actions/event';
import { _alert, alertTitles } from '../utils/alert';

function* getListEvent({ payload }) {
  const { strToken, societe } = payload;
  try {
    const res = yield call(eventApi.getListEvent.bind(null, { strToken, societe }));
    const { data } = res;
    if (res.status === 200) {
      yield put({ type: eventTypes.GET_LIST_EVENT_SUCCESS, payload: data.result });
    } else {
      yield put({ type: eventTypes.GET_LIST_EVENT_FAILURE });
    }
  } catch (error) {
    _alert(alertTitles.error, err.message);
    yield put({ type: eventTypes.GET_LIST_EVENT_FAILURE });
  }
}

function* watchListEvent() {
  yield takeLatest(eventTypes.GET_LIST_EVENT, getListEvent);
}

export function* eventSaga() {
  yield all([fork(watchListEvent)]);
}
