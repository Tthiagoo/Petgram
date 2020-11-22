import { Request, Response } from "express";
import knex from "../database/connection";

class userController {
  async create(request: Request, response: Response) {
    const { name, username, password, bio } = request.body;
    const user = {name, username, password, bio, photo:request.file.filename}
    const data = await knex('users').insert(user)
   return response.json({user})
   
   
  }

  async index(request: Request, response: Response) {
    const {username} = request.body
    const users = await knex('users').where('username','like',`%${username}%`)
    console.log(users)
    return response.json({users})
  }


}

export default userController
