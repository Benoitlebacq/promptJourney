'use client';

import { ProviderProps } from '@models/Provider.model';
import { SessionProvider } from 'next-auth/react';
import { FC } from 'react';

const Provider: FC<ProviderProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Provider;
