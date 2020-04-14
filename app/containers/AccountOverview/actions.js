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

export function fetchAccountSucceeded(transactions) {
  return {
    type: FETCH_ACCOUNT_SUCCEEDED,
    transactions,
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
