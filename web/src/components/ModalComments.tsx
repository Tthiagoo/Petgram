import React, { ChangeEvent, FormEvent, useState } from "react";

import {
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Flex,
	Button,
	InputGroup,
	InputRightElement,
} from "@chakra-ui/core";
import Input from "./Input";
import { Comment } from "./Post";

import CommentComponent from "./Comment";
import { FaRegPaperPlane } from "react-icons/fa";
import api from "../api";

interface ModalCommentsProps {
	
	idPost:number;
	comments: Comment[];
}

const ModalComments: React.FC<ModalCommentsProps> = ({ comments, idPost }) => {

	const username = localStorage.getItem("username");
	const id = localStorage.getItem("id");
	const [comment, setComment] = useState("");

	async function handleSubmitComment(e: FormEvent) {
		try {
			e.preventDefault();
			const data = new FormData();

			data.append("usernameComment", username!);
			data.append("post_id", idPost as any);
			data.append("comment", comment);
			data.append("user_id", id!);

			await api.post("/comment/", data, {
				headers: {
					Authorization: id,
				},
			});
			console.log(data);
		} catch (error) {
			alert(error);
		}
	}
	return (
		<>
			<ModalHeader display="flex" justifyContent="center">
				Comentarios
			</ModalHeader>
			<ModalCloseButton marginBottom="10px" />
			<ModalBody display="flex" flexDirection="column">
				<Flex
					maxHeight="21em"
					overflowY="auto"
					width="100%"
					flexDirection="column"
					justifyContent="start"
				>
					{comments.map((comment) => (
						<CommentComponent
							key={comment.idComment}
							comment={comment.comment}
							user_id={comment.user_id}
							photoComment={comment.photoComment}
							idComment={comment.idComment}
							usernameComment={comment.usernameComment}
						/>
					))}
				</Flex>
			</ModalBody>
			<ModalFooter display="flex" justifyContent="center">
				<InputGroup w="100%">
					<Input
						focusBorderColor="none"
						placeholder="Escreva seu comentario"
						w="100%"
						paddingRight="50px"
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setComment(e.target.value)
						}
					/>
					<InputRightElement  width="3.5rem" onClick={handleSubmitComment}>
						<Button h="1.75rem" size="sm" >
							<FaRegPaperPlane  />
						</Button>
					</InputRightElement>
				</InputGroup>
			</ModalFooter>
		</>
	);
};
export default ModalComments;
