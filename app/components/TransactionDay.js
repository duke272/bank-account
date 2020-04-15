import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem } from '@material-ui/core';
import EventIcon from '@material-ui/icons/Event';
import Transaction from './Transaction';

const TransactionDay = ({ transactionDay }) => (
  <>
    <ListItem
      style={{
        color: '#999',
        padding: '10px',
        backgroundColor: '#eee',
      }}
    >
      <EventIcon />
      {transactionDay.formattedDate}
    </ListItem>
    <ListItem style={{ padding: '0' }}>
      <List style={{ padding: '0 0 0 10px', color: '#000', width: '100%' }}>
        {transactionDay.transactions.map((transaction, transactionKey) => (
          <Transaction
            transaction={transaction}
            // eslint-disable-next-line react/no-array-index-key
            key={`${transactionDay.id}-${transactionKey}`}
          />
        ))}
      </List>
    </ListItem>
  </>
);

TransactionDay.propTypes = {
  transactionDay: PropTypes.shape({
    date: PropTypes.string.isRequired,
    transactions: PropTypes.array.isRequired,
    formattedDate: PropTypes.string.isRequired,
  }),
};

export default TransactionDay;
