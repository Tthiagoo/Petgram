import { Request, Response } from "express";
import knex from "../database/connection";

class commentController {
  async create(request: Request, response: Response) {
    const { usernameComment, comment, post_id } = request.body;
    const user_id = request.headers.authorization;

    const Comment = {
      usernameComment,
      comment,
      post_id,
      user_id,
      photoComment: request.file.filename,
    };

    const data = await knex("comments").insert(Comment);

    return response.json({ Comment });
  }
  async index(request: Request, response: Response) {
    const {post_id} = request.body
    const Comments  = await knex('comments').where('post_id',post_id)
    response.json({Comments})
  }

  async delete(request: Request, response: Response){
    const {id} = request.body

    await knex('comments').where('id',id).first().delete()
    return response.sendStatus(200)
    
  }


}

export default commentController;
