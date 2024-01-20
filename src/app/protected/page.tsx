import getCurrentSession from '@/lib/auth/getCurrentSession';

export default async function ProtectedPage() {
  // get the current session in the server component
  const session = await getCurrentSession();
  return <div>{JSON.stringify(session, null, 2)}</div>;
}
