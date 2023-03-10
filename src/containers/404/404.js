import React from 'react';
import { Box } from '@mui/material';
import notFoundSvg from '../../assets/svgs/not_found.svg';

const NotFoundContainer = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <img src={notFoundSvg} alt="Not found" />
    </Box>
  );
};

export default NotFoundContainer;
