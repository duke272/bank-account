import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem } from '@material-ui/core';
import EventIcon from '@material-ui/icons/Event';
import Transaction from './Transaction';

const TransactionDay = ({ transaction }) => {
  // @TODO do the date in selector, not here
  const date = new Date(transaction.date);

  return (
    <>
      <ListItem
        style={{
          color: '#999',
          padding: '10px',
          backgroundColor: '#eee',
        }}
      >
        <EventIcon />
        {date.toLocaleDateString('nl-NL', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })}
      </ListItem>
      <ListItem style={{ padding: '0' }}>
        <List style={{ padding: '0 0 0 10px', color: '#000', width: '100%' }}>
          {transaction.transactions.map((trans, transactionKey) => (
            <Transaction
              trans={trans}
              // eslint-disable-next-line react/no-array-index-key
              key={`${transaction.id}-${transactionKey}`}
            />
          ))}
        </List>
      </ListItem>
    </>
  );
};

TransactionDay.propTypes = {
  transaction: PropTypes.shape({
    date: PropTypes.string.isRequired,
    transactions: PropTypes.array.isRequired,
  }),
};

export default TransactionDay;
