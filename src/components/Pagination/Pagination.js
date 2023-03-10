import React from 'react';
import { Box, Fab, IconButton, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const Pagination = ({
  page,
  onNextPage,
  disableNext,
  disablePrev,
  onPrevPage,
  position = 'center'
}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent={
        position === 'start'
          ? 'flex-start'
          : position === 'center'
          ? 'center'
          : 'flex-end'
      }
      mt={2}
    >
      <IconButton sx={{ mr: 1 }} onClick={onPrevPage} disabled={disablePrev}>
        <ChevronLeftIcon />
      </IconButton>
      <Fab size="small" color="primary" aria-label="page-count">
        <Typography color="white">{page}</Typography>
      </Fab>
      <IconButton sx={{ ml: 1 }} onClick={onNextPage} disabled={disableNext}>
        <ChevronRightIcon />
      </IconButton>
    </Box>
  );
};

export default Pagination;
