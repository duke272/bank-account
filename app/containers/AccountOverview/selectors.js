import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { formatAmount } from './helpers';

const selectAccountOverview = state => state.accountOverview || initialState;

const makeSelectLoading = () =>
  createSelector(
    selectAccountOverview,
    accountOverviewState => accountOverviewState.loading,
  );

const makeSelectAccountInfo = () =>
  createSelector(
    selectAccountOverview,
    accountOverviewState => {
      const sortFunc = accountOverviewState.sorting
        ? sortOnDateAsc
        : sortOnDateDesc;

      return accountOverviewState.accountInfo
        .sort(sortFunc)
        .map(transactionDay => {
          const date = new Date(transactionDay.date);
          return {
            ...transactionDay,
            formattedDate: date.toLocaleDateString('nl-NL', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
            }),
            transactions: transactionDay.transactions.map(
              // eslint-disable-next-line camelcase
              ({ amount, debit_credit, ...transaction }) => ({
                ...transaction,
                formattedAmount: formatAmount(amount, debit_credit),
              }),
            ),
          };
        });
    },
  );

const makeSelectCurrentBalance = () =>
  createSelector(
    selectAccountOverview,
    accountOverviewState => {
      // find the latest account date
      const latestBalance = accountOverviewState.accountInfo.reduce(
        (accumulator, currentValue) => {
          if (currentValue.date > accumulator.date) {
            return currentValue;
          }
          return accumulator;
        },
        { date: '0' },
      );

      if (!latestBalance.balances) {
        return formatAmount(
          initialState.currentBalance.amount,
          initialState.currentBalance.debit_credit,
        );
      }

      // find the latest balance within the day
      const currentBalance = latestBalance.balances.reduce(
        (accumulator, currentValue) => {
          if (currentValue.date > accumulator.date) {
            return currentValue;
          }
          return accumulator;
        },
        { date: '0' },
      );

      return formatAmount(currentBalance.amount, currentBalance.debit_credit);
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
  makeSelectAccountInfo,
  makeSelectCurrentBalance,
  makeSelectSortOrder,
};
