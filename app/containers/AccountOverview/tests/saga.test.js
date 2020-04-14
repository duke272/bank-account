import { call, put } from 'redux-saga/effects';
import request from 'utils/request';
import { requestURL } from '../constants';
import { getAccountSaga } from '../saga';
import { fetchAccountSucceeded, fetchAccountFailed } from '../actions';

/* eslint-disable redux-saga/yield-effects */
describe('getAccount Saga', () => {
  let getAccountGenerator;

  beforeEach(() => {
    getAccountGenerator = getAccountSaga();
  });

  it('handles a successfull API response', () => {
    // saga will call an API
    expect(getAccountGenerator.next().value).toEqual(call(request, requestURL));

    // success response will be dispatched again
    const transactions = { just: 'some_object' };
    expect(getAccountGenerator.next(transactions).value).toEqual(
      put(fetchAccountSucceeded(transactions)),
    );

    // saga is done
    expect(getAccountGenerator.next().value).toEqual(undefined);
  });

  it('handles an unsuccessfull API response', () => {
    // saga will call an API
    expect(getAccountGenerator.next().value).toEqual(call(request, requestURL));

    // error thrown will dispatch an error action
    expect(getAccountGenerator.throw().value).toEqual(
      put(fetchAccountFailed()),
    );

    // saga is done
    expect(getAccountGenerator.next().value).toEqual(undefined);
  });
});
