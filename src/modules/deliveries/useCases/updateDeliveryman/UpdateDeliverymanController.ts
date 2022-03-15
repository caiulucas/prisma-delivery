import { UpdateDeliverymanUseCase } from './UpdateDeliverymanUseCase';
import { Request, Response } from "express";

 export class UpdateDeliverymanController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { deliveryman_id } = request;
    const { delivery_id } = request.params;

    const updateDeliverymanUseCase = new UpdateDeliverymanUseCase();
    const delivery = await updateDeliverymanUseCase.execute({deliveryman_id, delivery_id})

    return response.json(delivery);
  }
 }