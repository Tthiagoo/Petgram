import { Request, Response } from "express";
import knex from "../database/connection";
import { generateUniqueId } from "../utils/generateUniqueId";

class userController {
	async create(req: Request, response: Response) {
		const { name, username, password, bio } = req.body;

		let filename;
		req.file ? ({ filename } = req.file) : (filename = "perfil-padrao.png");

		const id = generateUniqueId();

		const user = { id, name, username, password, bio, photo: filename };
		await knex("users").insert(user);
		return response.json({ user });
	}

	async index(request: Request, response: Response) {
		let { username } = request.params;
		let { page } = request.query as any;

		const users = await knex("users")
			.where("username", "like", `%${username}%`)
			.select("*")
			.limit(5)
			.offset((page - 1) * 5);

		const serializedUsers = users.map((user) => {
			return {
				id: user.id,
				name: user.name,
				bio: user.bio,
        photo: `http://localhost:3333/uploads/${user.photo}`,
        username:user.username
				
			};
		});

		return response.json(serializedUsers);
	}

	async read(request: Request, response: Response) {
		const { id } = request.params;
		const posts = await knex("posts AS p")
			.join("users AS u", "u.id", "p.user_id")
			.where("u.id", id)
			.select("p.id","p.user_id","p.photoPost","p.namePost","p.description","u.photo","u.bio")
			
			const serializedUserInfo = posts.map((userInfo) => {
				return {
					postId: userInfo.id,
					name: userInfo.namePost,
					bio: userInfo.bio,
					photo: `http://localhost:3333/uploads/${userInfo.photo}`,
					photoPost:`http://localhost:3333/uploads/${userInfo.photoPost}`,
					description:userInfo.description,
					userId:userInfo.user_id
					
				};
			});
	
		response.json({serializedUserInfo});
	}
	async update(request: Request, response: Response) {
		const { id } = request.params;
		const { name, username, password, bio } = request.body;
		const photo = request.file.filename;
		await knex("users")
			.update({
				name,
				username,
				password,
				bio,
				photo,
			})
			.where("id", "=", id);

		return response.sendStatus(200);
	}
	async delete(request: Request, response: Response) {
		const { id } = request.body;

		await knex("users").where("id", id).delete().first();
		return response.sendStatus(200);
	}
}

export default userController;
