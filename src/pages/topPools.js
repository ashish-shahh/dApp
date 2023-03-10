import React from 'react';
import TopPoolsContainer from '../containers/TopPools/TopPools';
import DefaultLayout from '../layout/DefaultLayout/DefaultLayout';

const TopPoolsPage = () => {
  return (
    <DefaultLayout title="DApp - Pools">
      <TopPoolsContainer />
    </DefaultLayout>
  );
};

export default TopPoolsPage;
