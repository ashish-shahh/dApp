import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { PAGE_ITEM_COUNT } from '../../containers/Tokens/Tokens';
import { Link } from 'react-router-dom';
import { fromNow } from '../../helpers/fromNow';

const TransactionsTable = ({ data, page }) => {
  const classes = useStyles();

  const renderTableRow = (swap, idx) => {
    const tokenName =
      swap.amount1 > 0
        ? (swap.amount0 * -1).toFixed(2) + ' ' + swap.token0.name
        : (swap.amount1 * -1).toFixed(2) + ' ' + swap.token1.name;
    const timeAgo = fromNow(swap.timestamp);

    return (
      <TableRow key={swap.id}>
        <TableCell component="th" scope="row">
          {idx + 1 + (page - 1) * PAGE_ITEM_COUNT}
        </TableCell>
        <TableCell align="right">
          <Link
            to={'https://etherscan.io/address/' + swap.recipient}
            target="_blank"
          >
            <Typography sx={{ textDecoration: 'underline' }}>
              {swap.recipient.substr(0, 6) + '...' + swap.recipient.substr(-4)}
            </Typography>
          </Link>
        </TableCell>
        <TableCell align="right">
          {parseInt(swap.amountUSD).toFixed(2)}
        </TableCell>
        <TableCell align="right">{tokenName}</TableCell>
        <TableCell align="right">{timeAgo}</TableCell>
      </TableRow>
    );
  };

  return (
    <TableContainer component={Paper} elevation={4}>
      <Table className={classes.table} aria-label="transactions data table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="right">Linked Account</TableCell>
            <TableCell align="right">Total Value(USD)</TableCell>
            <TableCell align="right">Token Amounts</TableCell>
            <TableCell align="right">Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{data.swaps.map(renderTableRow)}</TableBody>
      </Table>
    </TableContainer>
  );
};

const useStyles = makeStyles(() => ({
  table: {
    minWidth: 650
  }
}));

export default TransactionsTable;
