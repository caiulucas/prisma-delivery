import { Request, Response } from 'express';
import { FindAllAvailableUseCase } from './FindAllAvailableUseCase';

export class FindAllAvailableController {
  async handle(_: Request , response: Response): Promise<Response> {

    const findAllAvailableUseCase = new FindAllAvailableUseCase()
    
    const result = await findAllAvailableUseCase.execute();    

    return response.json(result);
  }
}