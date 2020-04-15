import React from 'react';
import PropTypes from 'prop-types';
import TransactionDay from './TransactionDay';

const TransactionList = ({ accountInfo }) =>
  accountInfo.map(transactionDay => (
    <TransactionDay transactionDay={transactionDay} key={transactionDay.id} />
  ));

TransactionList.propTypes = {
  accountInfo: PropTypes.array.isRequired,
};

export default TransactionList;
