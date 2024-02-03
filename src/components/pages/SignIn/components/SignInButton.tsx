'use client';

import { useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';

export default function SignInButton() {
  const searchParams = useSearchParams();
  return (
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
  );
}
