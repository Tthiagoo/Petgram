import React, { useContext } from "react";

import {
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Flex,
	Button,
} from "@chakra-ui/core";
import Input from "./Input";
import { Comment } from "./Post";

import CommentComponent from './Comment'

interface ModalCommentsProps {
	comments:Comment[]
}

const ModalComments: React.FC<ModalCommentsProps> = ({comments}) => {

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
				<Input placeholder="Escreva seu comentario" />
				<Button marginLeft="10px">Enviar</Button>
			</ModalFooter>
		</>
	);
};
export default ModalComments;
