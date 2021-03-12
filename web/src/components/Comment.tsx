import React from "react";
import { Flex, Image, Stack, Text } from "@chakra-ui/core";


import { Comment } from "./Post";
  
const CommentComponent: React.FC<Comment> = ({
	comment,
	user_id,
	photoComment,
	usernameComment,
	idComment,
}) => {
	return (
		<Flex flexDirection="row" width="100%" height="auto" marginTop="10px">
			<Flex alignItems="start" justifyContent="end" marginLeft="5px">
				<Image
					marginTop="20px"
					borderRadius={["100px"]}
				size={["40px","70px"]}
					alt="teste"
					src={`http://localhost:3333/uploads/${photoComment}`}
				/>
			</Flex>

			<Stack spacing={1} padding={2} marginTop="5px">
				<Text fontSize={["xl", "sm", "lg", "base"]} fontWeight="bold">
					{usernameComment}
				</Text>
				<Text fontSize={["xs", "xl", "sm"]}>{comment}</Text>
			</Stack>
		</Flex>
	);
};
export default CommentComponent;
