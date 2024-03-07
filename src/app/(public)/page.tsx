import Link from 'next/link';

import SignOutButton from '@/components/SignOutButton';
import { Button } from '@/components/atoms/Button/Button';
import getCurrentSession from '@/lib/auth/getCurrentSession';

export default async function Home() {
  const session = await getCurrentSession();

  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <h1>Next App</h1>
      <p>Configured: eslint, prettier, husky, prisma, next-auth</p>
      <div className="flex items-center justify-center gap-5 mt-10">
        <Link href="/protected" className="underline px-5 py-2 rounded">
          Protected page
        </Link>
        <Link href="/public" className="underline px-5 py-2 rounded">
          Public page
        </Link>
      </div>
      {session && (
        <div className="mt-10 flex flex-col gap-3">
          <h3>Welcome {session.user?.name}</h3>
          <SignOutButton />
        </div>
      )}
      {!session && (
        <Link href="/auth/signin" className="mt-10">
          Sign In
        </Link>
      )}
      <Button>Hello</Button>
    </main>
  );
}
