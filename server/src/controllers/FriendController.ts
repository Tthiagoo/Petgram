import { Request, Response } from "express";
import knex from "../database/connection";

class friendController {
	async create(request: Request, response: Response) {
		const { user_id } = request.body;
		const { friend_id } = request.body;

		const followSearch = await knex("friends")
			.where({
				user_id: user_id,
				friend_id: friend_id,
			})
			.first();
		if (!followSearch) {
			const { photo, username, name } = await knex("users")
				.where("id", friend_id)
				.select("photo", "username", "name")
				.first();
			const friendship = {
				user_id,
				friend_id,
				friendPhoto: photo,
				friendUserName: username,
				friendName: name,
			};

			await knex("friends").insert(friendship);

			return response.status(204).send();
		} else {
			return response.status(400).json({ error: "Usuario ja seguido" });
		}
	}
	async index(request: Request, response: Response) {
		const { user_id } = request.body;

		const friends = await knex("friends").where("user_id", user_id);

		return response.json({ friends });
	}
	async delete(request: Request, response: Response) {
		const { user_id, friend_id } = request.body;

		await knex("friends")
			.where({
				friend_id,
				user_id,
			})
			.first()
			.delete();
		return response.status(204).send();
	}
	async read(request: Request, response: Response) {
    const { user_id, friend_id } = request.params;

    const friend = await knex("friends").where({
      'user_id':user_id,
      'friend_id':friend_id
    }).first()

    if(friend){
      return response.json({friend})
    }
  }
}

export default friendController;
