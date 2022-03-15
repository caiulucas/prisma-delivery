import { compare } from 'bcrypt';
import { prisma } from '../../../../database/prismaClient';
import { sign } from 'jsonwebtoken';

interface IAuthenticateDeliveryman {
  username: string;
  password: string;
}

export class AuthenticateDeliverymanUseCase {
  async execute({username, password}: IAuthenticateDeliveryman) {
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username
      }
    });

    // Verify if deliveryman exists
    if(!deliveryman) throw new Error('Username or password invalid');

    // Verify deliveryman password
    const passwordMatch = await compare(password, deliveryman.password);
    if(!passwordMatch) throw new Error('Username or password invalid');

    const token = sign({ username }, 'f8dbbbdb3b80b4f170a8272978f579eb', {
      subject: deliveryman.id,
      expiresIn: '1d'
    });

    return token;
  }
}