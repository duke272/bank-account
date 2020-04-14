import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAccountOverview = state => state.accountOverview || initialState;

const makeSelectLoading = () =>
  createSelector(
    selectAccountOverview,
    accountOverviewState => accountOverviewState.loading,
  );

const makeSelectTransactions = () =>
  createSelector(
    selectAccountOverview,
    accountOverviewState => {
      const sortFunc = accountOverviewState.sorting
        ? sortOnDateAsc
        : sortOnDateDesc;

      return accountOverviewState.transactions.sort(sortFunc);
    },
  );

const makeSelectCurrentBalance = () =>
  createSelector(
    selectAccountOverview,
    accountOverviewState => {
      // find the latest account date
      const latestBalance = accountOverviewState.transactions.reduce(
        (accumulator, currentValue) => {
          if (currentValue.date > accumulator.date) {
            return currentValue;
          }
          return accumulator;
        },
        { date: '0' },
      );

      if (!latestBalance.balances) {
        return initialState.currentBalance;
      }

      // find the latest balance within the day
      return latestBalance.balances.reduce(
        (accumulator, currentValue) => {
          if (currentValue.date > accumulator.date) {
            return currentValue;
          }
          return accumulator;
        },
        { date: '0' },
      );
    },
  );

const makeSelectSortOrder = () =>
  createSelector(
    selectAccountOverview,
    accountOverviewState => (accountOverviewState.sorting ? 'asc' : 'desc'),
  );

const sortOnDateAsc = (a, b) => (a.date > b.date ? -1 : 1);
const sortOnDateDesc = (a, b) => (a.date > b.date ? 1 : -1);

export {
  selectAccountOverview,
  makeSelectLoading,
  makeSelectTransactions,
  makeSelectCurrentBalance,
  makeSelectSortOrder,
};

/*

TODO
- date format

 */
