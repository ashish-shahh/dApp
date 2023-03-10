import React from 'react';
import { CircularProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';

const LoadingScreen = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <CircularProgress color="primary" size={40} thickness={8} />
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    position: 'fixed',
    width: '100vw',
    height: '100vh'
  },
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

export default LoadingScreen;
