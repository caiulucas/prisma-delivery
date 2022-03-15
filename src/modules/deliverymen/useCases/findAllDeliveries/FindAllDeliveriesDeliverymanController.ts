import { Request, Response } from "express";
import { FindAllDeliveriesDeliverymanUseCase } from "./FindAllDeliveriesDeliverymanUseCase";

export class FindAllDeliveriesDeliverymanController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { deliveryman_id } = request;

    const findAllDeliveriesClientUseCase = new FindAllDeliveriesDeliverymanUseCase();
    const result = await findAllDeliveriesClientUseCase.execute(deliveryman_id);

    return response.json(result);
  }
}