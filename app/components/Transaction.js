import React from 'react';
import PropTypes from 'prop-types';
import { Divider, ListItem, ListItemText } from '@material-ui/core';
import EuroIcon from '@material-ui/icons/Euro';
import { formatAmount } from '../containers/AccountOverview/helpers';

// @TODO dont use formatamount here

const Transaction = ({ trans }) => (
  <>
    <ListItem>
      <ListItemText
        primary={
          <>
            <EuroIcon fontSize="inherit" />
            {formatAmount(trans.amount, trans.debit_credit)}
          </>
        }
        secondary={
          <>
            <p title="omschrijving">{trans.description}</p>
            <p title="naam">{trans.name}</p>
            {trans.iban && <p title="iban">{trans.iban}</p>}
          </>
        }
      />
    </ListItem>
    <Divider />
  </>
);

Transaction.propTypes = {
  trans: PropTypes.shape({
    amount: PropTypes.number.isRequired,
    debit_credit: PropTypes.oneOf(['credit', 'debit']).isRequired,
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    iban: PropTypes.string,
  }),
};

export default Transaction;
