import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        variant="h5"
        noWrap
        component="a"
        href=""
        sx={{
          mr: 2,
          flexGrow: 1,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none'
        }}
      >
        DApp
      </Typography>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    borderTop: '1px solid ' + theme.palette.common.white,
    borderRadius: '12px 12px 0 0',
    padding: '12px 16px'
  }
}));

export default Footer;
