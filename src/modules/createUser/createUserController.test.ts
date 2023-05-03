/**
 * @jest-environment ./prisma/prisma-environment-jest
 */
import { app } from "../../app";
import request from "supertest";

describe("Create User Controller", () => {

   it("Should be able to create a new user", async () => {
    //I need to create a new user and after to do the validation to test
    const response = await request(app)
     .post("./users")
     .send({ //Which informations we'll want to pass to into of requisition
        username: "test-integration",
        email: "testintegration@test.com",
        name: "test Integration"
     });
     console.log(response.status);   
   })   
})