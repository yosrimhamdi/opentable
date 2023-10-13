import { NextRequest } from 'next/server';
import { verifyToken } from './utils/token';

export const middleware = async (req: NextRequest) => {
  const token = req.headers.get('token');

  if (!token || !verifyToken(token)) {
    // redirect to login here.
  }
};

export const config = {
  matcher: ['/'],
};
