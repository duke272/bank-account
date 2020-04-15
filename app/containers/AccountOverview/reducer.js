import {
  FETCH_ACCOUNT,
  FETCH_ACCOUNT_FAILED,
  FETCH_ACCOUNT_SUCCEEDED,
  TOGGLE_SORTING,
} from './constants';

export const initialState = {
  loading: false,
  accountInfo: [],
  currentBalance: { amount: 0, debit_credit: 'debit' },
  sorting: 1,
};

/* eslint-disable default-case, no-param-reassign */
const accountOverviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ACCOUNT:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ACCOUNT_SUCCEEDED:
      return {
        ...state,
        accountInfo: action.accountInfo,
        loading: false,
      };
    case FETCH_ACCOUNT_FAILED:
      return {
        ...state,
        loading: false,
      };
    case TOGGLE_SORTING:
      return {
        ...state,
        sorting: !state.sorting,
      };
    default:
      return state;
  }
};

export default accountOverviewReducer;
