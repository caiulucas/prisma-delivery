import { NextFunction } from 'express';
import { Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

export async function ensureAuthenticateClient(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if(!authHeader) return response.status(401).json({ message: 'Token missing' });

  const [, token] = authHeader.split(' ');

  try {
    const { sub } = verify(token, 'a27d8a231f44d3492a5b05f8227e7d4d' ) as { sub: string };

    request.client_id = sub;
    return next()
  }catch {
    return response.status(401).json({ message: 'Invalid token' });
  }
}