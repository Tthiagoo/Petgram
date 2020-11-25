import { Request, Response } from "express";
import knex from "../database/connection";

class likeController{
    async create(request: Request, response: Response) {
        const {posts_id, nameUser} = request.body
        
        const user_id = request.headers.authorization
        
        const like = {posts_id, nameUser, user_id}

        await knex("likes").insert(like);

       return response.json({like})
    }
}
export default likeController