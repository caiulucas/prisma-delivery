import { prisma } from '../../../../database/prismaClient';

export class FindAllAvailableUseCase {
  async execute() {
    const deliveries = await prisma.delivery.findMany({
      where: {
        end_at: null,
        AND: {
          deliveryman_id: null
        }
      }
    });

    return deliveries;
  }
}