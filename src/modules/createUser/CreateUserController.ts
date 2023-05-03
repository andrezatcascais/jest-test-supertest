import { Request, Response } from "express";
import { CreateUserService } from "./CreateUserService";

class CreateUserController {
  constructor(private createUser: CreateUserService) {}

  //method that obtains by request body various informations
  async handle(request: Request, response: Response) {
    const { email, username, name } = request.body;
    //here I will call the service (CreateUserService), and all calls are putting in Constructor this service.
    const user = await this.createUser.execute({ email, username, name });

    return response.json(user);
  }
}

export { CreateUserController };
