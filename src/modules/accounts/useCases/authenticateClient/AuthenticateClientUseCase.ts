import { compare } from 'bcrypt';
import { prisma } from '../../../../database/prismaClient';
import { sign } from 'jsonwebtoken';

interface IAuthenticateClient {
  username: string;
  password: string;
}

export class AuthenticateClientUseCase {
  async execute({username, password}: IAuthenticateClient) {
    const client = await prisma.client.findFirst({
      where: {
        username
      }
    });

    // Verify if client exists
    if(!client) throw new Error('Username or password invalid');

    // Verify client password
    const passwordMatch = await compare(password, client.password);
    if(!passwordMatch) throw new Error('Username or password invalid');

    const token = sign({ username }, 'a27d8a231f44d3492a5b05f8227e7d4d', {
      subject: client.id,
      expiresIn: '1d'
    });

    return token;
  }
}