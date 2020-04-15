import {
  FETCH_ACCOUNT,
  FETCH_ACCOUNT_FAILED,
  FETCH_ACCOUNT_SUCCEEDED,
} from '../constants';

import {
  fetchAccount,
  fetchAccountFailed,
  fetchAccountSucceeded,
} from '../actions';

describe('AccountOverview Actions', () => {
  describe('fetchAccount', () => {
    it('should return the correct type and the passed name', () => {
      const expectedResult = {
        type: FETCH_ACCOUNT,
      };
      expect(fetchAccount()).toEqual(expectedResult);
    });
  });

  describe('fetchAccountFailed', () => {
    it('should return the correct type and the passed name', () => {
      const expectedResult = {
        type: FETCH_ACCOUNT_FAILED,
      };
      expect(fetchAccountFailed()).toEqual(expectedResult);
    });
  });

  describe('fetchAccountSucceeded', () => {
    const accountInfo = { just: 'some object' };
    it('should return the correct type and the passed name', () => {
      const expectedResult = {
        type: FETCH_ACCOUNT_SUCCEEDED,
        accountInfo,
      };
      expect(fetchAccountSucceeded(accountInfo)).toEqual(expectedResult);
    });
  });
});
