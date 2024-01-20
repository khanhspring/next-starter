import { getServerSession } from 'next-auth';

import { authOptions } from './authOptions';

export default function getCurrentSession() {
  return getServerSession(authOptions);
}
