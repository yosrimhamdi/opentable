import jwt, { JwtPayload } from 'jsonwebtoken';

const { SECRET } = process.env;

export const createToken = (id: number) => jwt.sign({ id }, SECRET);

export const verifyToken = (token: string | undefined) => {
  if (!token) {
    return false;
  }

  try {
    return <JwtPayload>jwt.verify(token, SECRET);
  } catch (e) {
    return false;
  }
};
