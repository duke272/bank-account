import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Typography } from '@material-ui/core';
import EuroIcon from '@material-ui/icons/Euro';
import IconButton from '@material-ui/core/IconButton';
import SortIcon from '@material-ui/icons/Sort';
import { formatAmount } from '../containers/AccountOverview/helpers';

// @TODO don't display 0 as default balance

const Header = ({ amount, debitCredit, sortOrder, toggleSort }) => (
  <AppBar
    position="fixed"
    style={{ padding: '8px 8px 8px 16px', flexDirection: 'row' }}
  >
    <Typography variant="h6" style={{ flexGrow: 1 }}>
      Account Balans: <EuroIcon fontSize="inherit" />
      {formatAmount(amount, debitCredit)}
    </Typography>
    <IconButton
      onClick={toggleSort}
      style={{
        flexGrow: 1,
        padding: 0,
        color: 'inherit',
        transform: sortOrder === 'asc' ? 'scaleX(-1)' : 'none',
      }}
    >
      <SortIcon />
    </IconButton>
  </AppBar>
);

Header.propTypes = {
  amount: PropTypes.number,
  debitCredit: PropTypes.oneOf(['credit', 'debit']),
  sortOrder: PropTypes.oneOf(['asc', 'desc']),
  toggleSort: PropTypes.func,
};

export default Header;
