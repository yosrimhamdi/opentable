import { NextRequest, NextResponse } from 'next/server';

import { getUserByEmail } from '@/prisma/users';
import { createToken } from '@/utils/token';

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { email, password }: { email: string; password: string } =
    await req.json();

  const user = await getUserByEmail(email);

  if (!user) {
    return NextResponse.json({ error: 'User not found' });
  }

  if (user.password !== password) {
    return NextResponse.json({ error: 'Wrong password' });
  }

  return NextResponse.json({ token: createToken(user.id) });
};
