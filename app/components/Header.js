import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Typography } from '@material-ui/core';
import EuroIcon from '@material-ui/icons/Euro';
import IconButton from '@material-ui/core/IconButton';
import SortIcon from '@material-ui/icons/Sort';

// @TODO don't display 0 before data is loaded

const Header = ({ currentBalance, sortOrder, toggleSort, displayButton }) => (
  <AppBar
    position="fixed"
    style={{ padding: '8px 8px 8px 16px', flexDirection: 'row' }}
  >
    <Typography variant="h6" style={{ flexGrow: 1 }}>
      Account Balans: <EuroIcon fontSize="inherit" />
      {currentBalance}
    </Typography>
    {displayButton && (
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
    )}
  </AppBar>
);

Header.propTypes = {
  currentBalance: PropTypes.string.isRequired,
  sortOrder: PropTypes.oneOf(['asc', 'desc']).isRequired,
  toggleSort: PropTypes.func.isRequired,
  displayButton: PropTypes.bool.isRequired,
};

export default Header;
