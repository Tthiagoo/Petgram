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
    async index(request: Request, response: Response){
        const {posts_id} = request.body

        const likes = await knex('likes').where('posts_id',posts_id)
        return response.json({likes})
    }

    async delete(request: Request, response: Response){
        const {posts_id} = request.body

        await knex('likes').where('posts_id',posts_id).first().delete()
        return response.sendStatus(200)
    }
}
export default likeController