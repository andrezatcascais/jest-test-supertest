import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepositories";

interface IUserRequest {
  name: string;
  username: string;
  email: string;
}

class CreateUserService {
  /**here was passed the interface(implementing) of Repository that I will use, 
   * because if on another occasion I want to user the SQLite database   
   * for example ou another that be, I won't need to enter in the service to change, 
   * so just I look who is calling or creating this instance of object, 
   * and I'll change there on CreateUserFactory for example*/
  constructor(private usersRepository: IUsersRepository) {}
// only this function to apply the concept of should has a unique responsability para a classe user
  async execute({ email, username, name }: IUserRequest) {
    const userAlreadyExists = await this.usersRepository.exists(username);
//Here is applying the business rule
    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    //this method create, create an instance of the user to get to insert in the BD
    const userCreate = User.create({ email, username, name });
    const user = await this.usersRepository.create(userCreate);
    return user;
  }
}

export { CreateUserService };
