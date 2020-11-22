import { Request, Response } from "express";
import knex from "../database/connection";

class friendRequestController {
	async create(request: Request, response: Response) {
		const  idSender  = request.headers.authorization;
        const { idRecipient } = request.params;
        
        const { photo, username } = await knex('users').where('id',idSender).select('photo','username').first()

        const friendRequest = { idSender, idRecipient, photoSender:photo, userSender:username };

        const searchRequest = await knex('friendrequest').where({
            'idSender' : idSender, 
            'idRecipient':idRecipient}).first()

        if(!searchRequest){
            const data = await knex('friendrequest').insert(friendRequest)
            return response.json({friendRequest})

        }else{
            return response.status(401).json({ error: "Pedido de amizade ja enviado" });
        }
    }
    async delete(request: Request, response: Response){
        const { id }= request.body
        await knex("friendrequest").where("id", id).delete()
        return response.status(204).send()
    }

    async index (request: Request, response: Response){
        const {id} = request.body

        const requests = await knex('friendrequest').where('idRecipient',id)

        return response.json({requests})
    }
}


export default friendRequestController;
