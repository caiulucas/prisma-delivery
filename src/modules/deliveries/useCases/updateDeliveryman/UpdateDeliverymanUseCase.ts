import { prisma } from "../../../../database/prismaClient";

interface IUpdateDeliveryman {
  delivery_id: string;
  deliveryman_id: string;
}

export class UpdateDeliverymanUseCase {
  async execute({delivery_id, deliveryman_id}: IUpdateDeliveryman) {
    const result = await prisma.delivery.update({
      where: { id: delivery_id },
      data: { deliveryman_id }
    });

    return result;
  }
}