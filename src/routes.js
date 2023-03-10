import { createBrowserRouter } from 'react-router-dom';
import TopPoolsPage from './pages/topPools';
import TokensPage from './pages/tokens';
import TransactionsPage from './pages/transactions';
import NotFoundPage from './pages/404';

export const routes = [
  {
    path: '/',
    element: <TopPoolsPage />
  },
  {
    path: '/tokens',
    element: <TokensPage />
  },
  {
    path: '/transactions',
    element: <TransactionsPage />
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
];

export const router = createBrowserRouter(
  routes.map(({ path, element }) => ({
    path,
    element
  }))
);
