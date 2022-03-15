import { prisma } from '../../../../database/prismaClient';

export class FindAllDeliveriesClientUseCase {
  async execute(client_id: string) {
    const delivery = await prisma.client.findMany({
      where: {
        id: client_id
      },
      select: {
        id: true,
        username: true,
        deliveries: true,        
      },
    });

    return delivery
  }
}