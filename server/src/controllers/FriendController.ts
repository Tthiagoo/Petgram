import { Request, Response } from "express";
import knex from "../database/connection";

class friendController {
  async create(request: Request, response: Response) {
    const { user_id } = request.body;
    const { friend_id } = request.body;

    const { photo, username, name } = await knex("users")
      .where("id", friend_id)
      .select("photo", "username", "name")
      .first();
    const friendship = { user_id, friend_id, friendPhoto:photo, friendUserName:username, friendName:name};

    const data = await knex("friends").insert(friendship);

    if (data) {
      await knex("friendrequest")
        .where({
          idSender: friend_id,
          idRecipient: user_id,
        }).delete();
      return response.status(204).send();
    } else {
      return response.status(404).json({ error: "data não existe" });
    }
  }
  async index(request: Request, response: Response) {
    const { user_id } = request.body;

    const friends = await knex('friends').where('user_id',user_id)

    return response.json({friends})
  }
}

export default friendController;
