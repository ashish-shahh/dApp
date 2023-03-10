import React from 'react';
import { Helmet } from 'react-helmet';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const DefaultLayout = ({ children, title = 'DApp' }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header />
      <Box className={classes.pageContent} sx={{ my: 4 }}>
        {children}
      </Box>
      <Footer />
    </div>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  pageContent: {
    flexGrow: 1
  }
}));

export default DefaultLayout;
