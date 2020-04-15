import {
  FETCH_ACCOUNT,
  FETCH_ACCOUNT_FAILED,
  FETCH_ACCOUNT_SUCCEEDED,
  TOGGLE_SORTING,
} from './constants';

export function fetchAccount() {
  return {
    type: FETCH_ACCOUNT,
  };
}

export function fetchAccountSucceeded(accountInfo) {
  return {
    type: FETCH_ACCOUNT_SUCCEEDED,
    accountInfo,
  };
}

export function fetchAccountFailed() {
  return {
    type: FETCH_ACCOUNT_FAILED,
  };
}

export function toggleSorting() {
  return {
    type: TOGGLE_SORTING,
  };
}
