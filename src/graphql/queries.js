import { gql } from '@apollo/client';

const GET_TOP_POOLS = gql`
  query GetTopPools($skipAmount: Int) {
    pools(
      first: 10
      skip: $skipAmount
      orderBy: volumeUSD
      orderDirection: desc
    ) {
      id
      totalValueLockedUSD
      volumeUSD
    }
  }
`;

const GET_TOKENS = gql`
  query GetTokens($skipAmount: Int) {
    tokens(
      first: 10
      skip: $skipAmount
      orderBy: symbol
      direction: asc
      where: { derivedETH_not: 0 }
    ) {
      id
      symbol
      name
      derivedETH
      totalValueLocked
      tokenDayData(
        orderBy: date
        orderDirection: desc
        first: 2
        where: { date_gt: -1 }
      ) {
        date
        priceUSD
      }
    }
  }
`;

const GET_TRANSACTIONS = gql`
  query GetTransactions($skipAmount: Int) {
    swaps(
      first: 10
      skip: $skipAmount
      orderBy: timestamp
      orderDirection: desc
    ) {
      id
      timestamp
      token0 {
        id
        name
      }
      token1 {
        id
        name
      }
      transaction {
        id
      }
      amountUSD
      recipient
      sender
      amount0
      amount1
    }
  }
`;

export { GET_TOP_POOLS, GET_TOKENS, GET_TRANSACTIONS };
