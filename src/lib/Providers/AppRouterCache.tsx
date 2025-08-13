'use client';
import {AppRouterCacheProvider} from '@mui/material-nextjs/v15-appRouter';

const AppRouterCache = ({children}: {children: React.ReactNode}) => {
  return <AppRouterCacheProvider>{children}</AppRouterCacheProvider>;
};

export default AppRouterCache;
