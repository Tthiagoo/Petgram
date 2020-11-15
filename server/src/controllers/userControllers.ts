import { Request, Response } from "express";
import knex from "../database/connection";

class userController {
  async create(request: Request, response: Response) {
    const { name, username, password, bio } = request.body;
    const user = {name, username, password, bio, photo:request.file.filename}
   const data = await knex('users').insert(user)
   return response.json(data)
   
   
  }
}

export default userController
