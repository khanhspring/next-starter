'use client';

import { Suspense } from 'react';

import SignInButton from './components/SignInButton';

export default function SignIn() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[350px] p-10 flex flex-col items-center gap-5">
        <h1 className="font-bold uppercase text-lg">Sign In</h1>
        <Suspense>
          <SignInButton />
        </Suspense>
      </div>
    </div>
  );
}
