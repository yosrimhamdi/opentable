import { cookies } from 'next/headers';

import { verifyToken } from '@/utils/token';
import { getUserById } from '@/prisma/users';

export const GET = async () => {
  const token = cookies().get('token');
  const payload = verifyToken(token && token.value);

  if (!payload) {
    return new Response('hello', { status: 401 });
  }

  return Response.json({ user: await getUserById(payload.id) });
};
