import React, { memo, useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

// Utils
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

// Redux
import reducer from './reducer';
import {
  makeSelectLoading,
  makeSelectAccountInfo,
  makeSelectCurrentBalance,
  makeSelectSortOrder,
} from './selectors';
import { fetchAccount, toggleSorting } from './actions';
import saga from './saga';

// Components
import TransactionList from '../../components/TransactionList';
import Header from '../../components/Header';

const key = 'accountOverview';

export function AccountOverview({
  loading,
  accountInfo,
  currentBalance,
  sortOrder,
  getAccount,
  toggleSort,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    getAccount();
  }, []);

  return (
    <div style={{ paddingTop: '48px' }}>
      <Header
        displayButton={accountInfo.length > 0}
        currentBalance={currentBalance}
        sortOrder={sortOrder}
        toggleSort={toggleSort}
      />
      {loading && (
        <Backdrop open style={{ zIndex: 1 }}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <TransactionList accountInfo={accountInfo} />
    </div>
  );
}

AccountOverview.propTypes = {
  loading: PropTypes.bool,
  accountInfo: PropTypes.array,
  currentBalance: PropTypes.string,
  getAccount: PropTypes.func,
  toggleSort: PropTypes.func,
  sortOrder: PropTypes.oneOf(['asc', 'desc']),
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  accountInfo: makeSelectAccountInfo(),
  currentBalance: makeSelectCurrentBalance(),
  sortOrder: makeSelectSortOrder(),
});

export function mapDispatchToProps(dispatch) {
  return {
    getAccount: () => dispatch(fetchAccount()),
    toggleSort: () => dispatch(toggleSorting()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(AccountOverview);

/*

TODO
[X] selector for latest balance
[X] selector for transactions
[X] ui library
[X] saga to retrieve data
[X] reducer to store balances and transactions
[X] display name, iban
[X] move components to actual components
[X] Loading state
[X] unit tests
[X] clean up boiler plate stuff
[X] rename transactions const
[X] cypress tests
[ ] sorting? -> update tests

[ ] filtering?
[ ] refreshing?
[ ] React Native app?
[ ] display dates/currencies in users locale
[ ] styled-components for styles
[X] move helper functions
[ ] make things more pretty
[X] dont use p in secondary text
[X] find missing key in loop
[ ] sticky headers.
[ ] Typescript
[ ] Shallow render unit tests
[ ] Error state
[ ] remove/combine/simplify mock data in unit tests
[ ] normalize state

 */
