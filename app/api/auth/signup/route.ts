import { User } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

import { createUser, getUserByEmail } from '@/prisma/users';
import { createToken } from '@/utils/token';

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { first_name, last_name, email, password }: User = await req.json();
  let user = await getUserByEmail(email);

  if (!user) {
    user = await createUser(first_name, last_name, email, password);
  }

  cookies().set('token', createToken(user.id));

  return NextResponse.json({ user });
};
