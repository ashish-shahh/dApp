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

const TokensTable = ({ data, page }) => {
  const classes = useStyles();

  const renderTableRow = (token, idx) => {
    const pricePoint = parseInt(token.tokenDayData[0].priceUSD).toFixed(4);
    const priceChange =
      token.tokenDayData.length > 1
        ? (
            (token.tokenDayData[0].priceUSD / token.tokenDayData[1].priceUSD -
              1) *
            100
          ).toFixed(3)
        : 0;

    return (
      <TableRow key={token.id}>
        <TableCell component="th" scope="row">
          {idx + 1 + (page - 1) * PAGE_ITEM_COUNT}
        </TableCell>
        <TableCell align="right">{token.symbol}</TableCell>
        <TableCell align="right">{token.name}</TableCell>
        <TableCell align="right">{pricePoint}</TableCell>
        <TableCell align="right">{priceChange}%</TableCell>
        <TableCell align="right">
          {parseInt(token.totalValueLocked).toFixed(2)}
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
            <TableCell align="right">Symbol</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Price Point(USD)</TableCell>
            <TableCell align="right">Price Change</TableCell>
            <TableCell align="right">Total Value Locked</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{data.tokens.map(renderTableRow)}</TableBody>
      </Table>
    </TableContainer>
  );
};

const useStyles = makeStyles(() => ({
  table: {
    minWidth: 650
  }
}));

export default TokensTable;
