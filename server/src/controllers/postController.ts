import { Request, Response } from "express";
import knex from "../database/connection";

class postController {

	async create(request: Request, response: Response) {
		const { namePost, description } = request.body;
		const idUser = request.headers.authorization
		const {photo} = await knex("users").where("id",idUser).select("photo").first();
		
		const post = {
			namePost,
			description,
			user_id: idUser,
			photoPost: request.file.filename,
			photoUserPost:photo
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
		const { user_id } = request.params
		let { page } = request.query as any;

		const posts = await knex("friends AS f")
			.join("posts as p", "p.user_id", "f.friend_id")
			.where("f.user_id", user_id)
			.select("p.namePost", "p.user_id", "p.description", "p.photoPost","p.photoUserPost",'p.id')
			.limit(5)
			.offset((page - 1) * 5);
			const serializedPost = posts.map(post => { 
				return {
					id:post.id,
					namePost:post.namePost,
					user_id: post.user_id,
					description: post.description,
					photoPost: `http://localhost:3333/uploads/${post.photoPost}`,
					photoUserPost:  `http://localhost:3333/uploads/${post.photoUserPost}`,
				
				};
			}); 
		return response.json(serializedPost);
	}

	async read(request: Request, response: Response) {
		const { id } = request.params;
		const posts = await knex("posts AS p")
			.join("users AS u", "u.id", "p.user_id")
			.where("u.id", id)
			.select("p.id","p.user_id","p.photoPost","p.namePost","p.description","u.photo","u.bio")
			
			const serializedPostsInfo = posts.map((userInfo) => {
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
	
		response.json({serializedPostsInfo});
	}
}

export default postController;
