import { Session } from 'next-auth';
import { ReactNode } from 'react';

export type ProviderProps = {
  children: ReactNode;
  session: Session;
};
