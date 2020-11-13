import { Request, Response } from "express";
import knex from "../database/connection";

class sessionController {
  async create(request: Request, response: Response) {
    const {username, password} = request.body
    const login = await knex('users').where({
      'username':username,
      'password':password,
    }).first();
    if(!login){
      return response.status(400).json({ error: 'Usuario não cadastrado' });
    }
    return response.json(login);
  }
}

export default sessionController