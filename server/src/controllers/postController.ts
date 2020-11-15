import { Request, Response } from "express";
import knex from "../database/connection";

class postController {
  async create(request: Request, response: Response) {
    const { namePost, description } = request.body;
    const post = {
      namePost,
      description,
      user_id: request.headers.authorization,
      photoPost: request.file.filename,
    };
    const data = await knex("posts").insert(post);
    return response.json({ post });
  }
  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const userId = request.headers.authorization;

    const post = await knex("posts").where("id", id).select("user_id").first();

    if (post.user_id == userId) {
      await knex("posts").where("id", id).delete();
      return response.status(204).send();
      
    } else {
      return response.status(401).json({ error: "Exclusão não permitida" });
    }
  }
}

export default postController;
