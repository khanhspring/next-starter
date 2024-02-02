'use client';

import { signOut } from 'next-auth/react';

import { Button } from './ui/atoms/Button/Button';

export default function SignOutButton() {
  return <Button onClick={() => signOut()}>Sign Out</Button>;
}
