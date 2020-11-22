import { Request, Response } from "express";
import knex from "../database/connection";

class likeController{
    async create(request: Request, response: Response) {
        const {post_id} = request.body
        
        await knex('posts').where('post_id',post_id).update('post_id', +1)

        return response.json({post_id})
    }
}
export default likeController