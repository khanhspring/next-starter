import { withAuth } from 'next-auth/middleware';

export default withAuth({
  callbacks: {
    authorized: ({ req }) => {
      const sessionToken = req.cookies.get('next-auth.session-token');
      return !!sessionToken;
    },
  },
});

export const config = { matcher: ['/protected', '/api/protected'] };
