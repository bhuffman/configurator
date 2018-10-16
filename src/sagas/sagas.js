import {put, all, call, takeEvery, select} from 'redux-saga/effects';
import * as R from 'ramda';
import * as C from 'konstants';

const trace = R.curry((msg, requests) => {
  console.log(msg, requests);
  return requests;
});

function *testSaga(action) {

}

export function *watchTestSaga() {
  yield takeEvery(C.FETCH_CONFIG, testSaga);
}

