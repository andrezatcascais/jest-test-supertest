import { PrismaUsersRepository } from "../../repositories/prisma/PrismaUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserService } from "./CreateUserService";

//here that is instanciated 
export const createUserFactory = () => {
  //if after wants to change to another BD, just change para o Repository do BD que will need.
  //create the Repository
  const usersRepository = new PrismaUsersRepository();
  //I pass the Repository to the Service
  const createUser = new CreateUserService(usersRepository);
  //I pass the Service to the Controller
  const createUserController = new CreateUserController(createUser);
  //return the Controller to I can use in the Routers
  return createUserController;
};
