import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { Box, Button, Container } from '@mui/material';
import { useSnackbar } from 'notistack';

import { GET_TOKENS } from '../../graphql/queries';
import LoadingScreen from '../../components/LoadingScreen';
import TokensTable from '../../components/TokensTable';
import Pagination from '../../components/Pagination';
import RefreshIcon from '@mui/icons-material/Refresh';

export const PAGE_ITEM_COUNT = 10;

const TokensContainer = () => {
  const { enqueueSnackbar } = useSnackbar();

  const [skipBy, setSkipBy] = useState(0);
  const [page, setPage] = useState(1);

  const { loading, error, data, refetch } = useQuery(GET_TOKENS, {
    variables: {
      skipAmount: skipBy
    }
  });

  const onNextPage = () => {
    const newPageCount = page + 1;
    const newSkipBy = (newPageCount - 1) * PAGE_ITEM_COUNT;
    setPage(newPageCount);
    setSkipBy(newSkipBy);
  };

  const onPrevPage = () => {
    const newPageCount = page - 1;
    const newSkipBy = (newPageCount - 1) * PAGE_ITEM_COUNT;
    setPage(newPageCount);
    setSkipBy(newSkipBy);
  };

  useEffect(() => {
    refetch({
      $skipAmount: skipBy
    });
  }, [refetch, skipBy]);

  useEffect(() => {
    if (!error) return;
    enqueueSnackbar(error.message || 'Something went wrong', {
      variant: 'error'
    });
  }, [error, enqueueSnackbar]);

  if (loading) return <LoadingScreen />;

  if (!data) return null;

  return (
    <Container maxWidth="xl">
      <Box display="flex" justifyContent="flex-end" my={2}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<RefreshIcon />}
          onClick={() => {
            refetch();
          }}
        >
          Refresh
        </Button>
      </Box>
      <TokensTable data={data} page={page} />
      <Pagination
        page={page}
        disableNext={!data || !data.tokens.length}
        disablePrev={page === 1}
        onNextPage={onNextPage}
        onPrevPage={onPrevPage}
      />
    </Container>
  );
};

export default TokensContainer;
