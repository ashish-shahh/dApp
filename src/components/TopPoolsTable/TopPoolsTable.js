import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { PAGE_ITEM_COUNT } from '../../containers/Tokens/Tokens';

const TopPoolsTable = ({ data, page }) => {
  const classes = useStyles();

  const renderTableRow = (pool, idx) => {
    const id = pool.id.slice(0, 6) + '...' + pool.id.slice(-4);

    return (
      <TableRow key={pool.id}>
        <TableCell component="th" scope="row">
          {idx + 1 + (page - 1) * PAGE_ITEM_COUNT}
        </TableCell>
        <TableCell align="right">{id}</TableCell>
        <TableCell align="right">
          {parseInt(pool.volumeUSD).toFixed(2)}
        </TableCell>
        <TableCell align="right">
          {parseInt(pool.totalValueLockedUSD).toFixed(2)}
        </TableCell>
      </TableRow>
    );
  };

  return (
    <TableContainer component={Paper} elevation={4}>
      <Table className={classes.table} aria-label="pool data table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="right">Pool ID</TableCell>
            <TableCell align="right">Total Value Locked (USD)</TableCell>
            <TableCell align="right">24Hr Volume (USD)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{data.pools.map(renderTableRow)}</TableBody>
      </Table>
    </TableContainer>
  );
};

const useStyles = makeStyles(() => ({
  table: {
    minWidth: 650
  }
}));

export default TopPoolsTable;
