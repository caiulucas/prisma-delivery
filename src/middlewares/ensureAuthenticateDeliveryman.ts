import { NextFunction } from 'express';
import { Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

export async function ensureAuthenticateDeliveryman(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if(!authHeader) return response.status(401).json({ message: 'Token missing' });

  const [, token] = authHeader.split(' ');

  try {
    const { sub } = verify(token, 'f8dbbbdb3b80b4f170a8272978f579eb' ) as { sub: string };

    request.deliveryman_id = sub;
    return next()
  }catch {
    return response.status(401).json({ message: 'Invalid token' });
  }
}