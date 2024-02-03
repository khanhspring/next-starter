'use client';

import { useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';

export default function SignIn() {
  const searchParams = useSearchParams();
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[350px] p-10 flex flex-col items-center gap-5">
        <h1 className="font-bold uppercase text-lg">Sign In</h1>
        <button
          type="button"
          onClick={() =>
            signIn('google', {
              callbackUrl: searchParams.get('callbackUrl') || '/',
            })
          }
          className="px-5 py-2 bg-blue-500 rounded"
        >
          Sing In with Google
        </button>
      </div>
    </div>
  );
}
