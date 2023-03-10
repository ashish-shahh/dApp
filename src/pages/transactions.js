import React from 'react';
import TransactionsContainer from '../containers/Transactions/Transactions';
import DefaultLayout from '../layout/DefaultLayout/DefaultLayout';

const TransactionsPage = () => {
  return (
    <DefaultLayout title="DApp - Transactions">
      <TransactionsContainer />
    </DefaultLayout>
  );
};

export default TransactionsPage;
