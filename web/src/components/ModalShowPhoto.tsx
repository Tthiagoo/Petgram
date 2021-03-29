import React from "react";

import { ModalHeader, ModalBody, ModalCloseButton } from "@chakra-ui/core";

import Post from "./Post";

import { PostProps } from "./Post";

const ModalShowPhoto: React.FC<PostProps> = ({ ...props }) => {
	return (
		<>
			<ModalHeader display="flex" justifyContent="center">
				Foto
			</ModalHeader>
			<ModalCloseButton marginBottom="10px" />
			<ModalBody display="flex" border="1px solid yellow" justifyContent="center">
				<Post
					description={props.description}
					id={props.id}
					namePost={props.namePost}
					photoPost={props.photoPost}
          photoUserPost={props.photoUserPost}
          user_id={props.user_id}
				/>
			</ModalBody>
		</>
	);
};
export default ModalShowPhoto;
