import React from 'react';
import NotFoundContainer from '../containers/404';
import DefaultLayout from '../layout/DefaultLayout/DefaultLayout';

const _404Page = () => {
  return (
    <DefaultLayout title="DApp - Not Found">
      <NotFoundContainer />
    </DefaultLayout>
  );
};

export default _404Page;
