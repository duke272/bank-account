import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { FETCH_ACCOUNT, requestURL } from './constants';
import { fetchAccountSucceeded, fetchAccountFailed } from './actions';

export function* getAccountSaga() {
  try {
    // Call our request helper (see 'utils/request')
    const accountInfo = yield call(request, requestURL);
    // they are balances and transactions. find a better name
    yield put(fetchAccountSucceeded(accountInfo));
  } catch (err) {
    yield put(fetchAccountFailed());
  }
}

export default function* getAccountWatcher() {
  yield takeLatest(FETCH_ACCOUNT, getAccountSaga);
}
