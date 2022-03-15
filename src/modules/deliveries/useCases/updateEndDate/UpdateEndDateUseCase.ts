import { prisma } from "../../../../database/prismaClient";

interface IUpdateDeliveryman {
  delivery_id: string;
  deliveryman_id: string;
}

export class UpdateEndDateUseCase {
  async execute({delivery_id, deliveryman_id}: IUpdateDeliveryman) {
    const result = await prisma.delivery.updateMany({
      where: { 
        id: delivery_id,
        deliveryman_id,
      },
      data: { end_at: new Date() }
    });

    return result;
  }
}