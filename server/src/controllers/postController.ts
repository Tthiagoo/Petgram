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
		await knex("posts").insert(post);
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

	async index(request: Request, response: Response) {
		const { user_id,page } = request.body;

		const posts = await knex("friends AS f")
			.join("posts as p", "p.user_id", "f.friend_id")
			.where("f.user_id", user_id)
			.select("p.namePost", "p.user_id", "p.description", "p.photoPost")
			.limit(5)
			.offset((page - 1) * 5);


		return response.json({ posts });
	}

}

export default postController;
