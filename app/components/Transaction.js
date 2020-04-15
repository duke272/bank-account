import React from 'react';
import PropTypes from 'prop-types';
import { Divider, ListItem, ListItemText } from '@material-ui/core';
import EuroIcon from '@material-ui/icons/Euro';

const Transaction = ({ transaction }) => (
  <>
    <ListItem>
      <ListItemText
        primary={
          <>
            <EuroIcon fontSize="inherit" />
            {transaction.formattedAmount}
          </>
        }
        secondary={
          <>
            <span title="omschrijving">{transaction.description}</span>
            <br />
            <span title="naam">{transaction.name}</span>
            <br />
            {transaction.iban && <span title="iban">{transaction.iban}</span>}
          </>
        }
      />
    </ListItem>
    <Divider />
  </>
);

Transaction.propTypes = {
  transaction: PropTypes.shape({
    formattedAmount: PropTypes.string,
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    iban: PropTypes.string,
  }),
};

export default Transaction;
