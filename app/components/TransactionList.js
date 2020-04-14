import React from 'react';
import PropTypes from 'prop-types';
import TransactionDay from './TransactionDay';

const TransactionList = ({ transactions }) =>
  transactions.map(transaction => (
    <TransactionDay transaction={transaction} key={transaction.id} />
  ));

TransactionList.propTypes = {
  transactions: PropTypes.array.isRequired,
};

export default TransactionList;
