import jwt from 'jsonwebtoken';

const { SECRET } = process.env;

export const createToken = (id: number) => jwt.sign({ id }, SECRET);

export const verifyToken = (token: string | undefined) => {
  if (!token) {
    return false;
  }

  try {
    jwt.verify(token, SECRET);
    return true;
  } catch (e) {
    return false;
  }
};
