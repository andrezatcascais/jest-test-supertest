import { Router } from "express";
import { createUserFactory } from "../modules/createUser/CreateUserFactory";

const routes = Router();

//here we have just a router and call that function that was created on Factory
routes.post("/users", (request, response) =>
  createUserFactory().handle(request, response)
);

export { routes };
