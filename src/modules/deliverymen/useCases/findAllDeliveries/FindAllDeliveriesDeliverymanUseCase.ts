import { prisma } from "../../../../database/prismaClient";

export class FindAllDeliveriesDeliverymanUseCase {
  async execute(deliveryman_id: string) {
    const delivery = await prisma.deliveryman.findMany({
      where: {
        id: deliveryman_id
      },
      select: {
        id: true,
        username: true,
        deliveries: true,        
      },
    });

    return delivery;
  }
}