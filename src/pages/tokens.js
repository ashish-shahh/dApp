import React from 'react';
import TokensContainer from '../containers/Tokens/Tokens';
import DefaultLayout from '../layout/DefaultLayout';

const TokensPage = () => {
  return (
    <DefaultLayout title="DApp - Tokens">
      <TokensContainer />
    </DefaultLayout>
  );
};

export default TokensPage;
