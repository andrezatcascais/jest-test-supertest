import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepositories";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory"
import { CreateUserService } from "./CreateUserService";

//describe what we're doing here
describe("Create user", () => {
   //to do the declaration here
    let usersRepository: IUsersRepository;
    let createUserService: CreateUserService;

    //before all I want to do it
    beforeAll(() => {
        // our called to service
        /**
        * the most part od code what we're going to test is our service, then 
         * we need to call the the execute()
         */
        usersRepository = new UsersRepositoryInMemory();
        createUserService = new CreateUserService(usersRepository);
    });
    
    it("Should be able to create a new user", async () => {
        const userData: User = {
            name: "test Name",
            email: "test@test.com",
            username: "testUsername"      
        }

        const user = await createUserService.execute(userData);

        console.log(user);


        /*What do am I waiting/expecting of this execute method of CreateUserService?
        1. It shouldn't return a throw, it means there is a error because this user already exists.**/

        //I expect/wait to have the property id in the User object, because it means that the user exists.
        expect(user).toHaveProperty("id");
        expect(user.username).toBe("testUsername");
        expect(user.email).toBe("test@test.com");
    });

    it("Should not be able to create an existing user", async () => {
        const userData: User = {
            name: "Test Existing Name",
            email: "testexisting@test.com",
            username: "testexisting",      
        }

        //here I will let only the called to method.
       await createUserService.execute(userData);

       //Instead I passed a parameter, I will pass the function.
       //here I will do to lead with it, because I want it returns the throwable
       await expect(createUserService.execute(userData))
       .rejects
       .toEqual(new Error("User already exists!")
       );
    });
});