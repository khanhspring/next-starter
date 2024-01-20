'use client';

import { PropsWithChildren } from 'react';
import { SessionProvider } from 'next-auth/react';

type Props = PropsWithChildren;

export default function AuthProvider({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>;
}
