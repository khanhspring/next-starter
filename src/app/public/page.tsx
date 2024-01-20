'use client';

import { useSession } from 'next-auth/react';

export default function Test() {
  // get the current session in the client component
  const session = useSession();
  return <div>{JSON.stringify(session, null, 2)}</div>;
}
