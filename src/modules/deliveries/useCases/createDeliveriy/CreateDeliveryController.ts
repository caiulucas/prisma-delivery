import { CreateDeliveryUseCase } from './CreateDeliveryUseCase';
import { Request, Response } from "express";

export class CreateDeliveryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { item_name } = request.body;
    const { client_id } = request;

    const createDeliveryUseCase = new CreateDeliveryUseCase();

    const result = await createDeliveryUseCase.execute({item_name, client_id});

    return response.json(result);
  }
}