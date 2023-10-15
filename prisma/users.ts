import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

export const getUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({
    where: {
      email,
    },
  });
};

export const createUser = async (
  first_name: string,
  last_name: string,
  email: string,
  password: string
) => {
  return await prisma.user.create({
    data: {
      first_name,
      last_name,
      email,
      password,
    },
  });
};

export const getUserById = async (id: number): Promise<User | null> => {
  return await prisma.user.findUnique({
    where: {
      id,
    },
  });
};
