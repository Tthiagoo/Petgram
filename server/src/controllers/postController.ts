import { Request, Response } from "express";
import knex from "../database/connection";

class postController{
  async create(request: Request, response: Response){
    const {namePost, description} = request.body

   
    const post = {namePost, description, user_id:request.headers.authorization, photoPost:request.file.filename}
    
  }
}

export default postController