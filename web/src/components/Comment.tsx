import React from "react";
import { Flex, Image, Stack, Text } from "@chakra-ui/core";

import { Comment } from "./Post";

const CommentComponent: React.FC<Comment> = ({
	comment,
	user_id,
	photoComment,
	usernameComment,
	idComment,
	post_id,
}) => {
	return (
		<Flex flexDirection="row" width="100%" height="auto" marginTop="10px">
			<Flex
				alignItems="start"
				justifyContent="end"
				marginLeft="5px"
				minWidth={["15%", "15%", "15%", "10%"]}
			>
				<Image
					marginTop="20px"
					borderRadius={["100px"]}
					size={["40px", "50px"]}
					alt="teste"
					src={`http://localhost:3333/uploads/${photoComment}`}
				/>
			</Flex>

			<Stack spacing={1} padding={2} marginTop="15px">
				<Text fontSize={["xl", "sm", "lg", "base"]} fontWeight="bold">
					{usernameComment}
				</Text>
				<Text wordBreak="break-all" fontSize={["xs", "xl", "sm"]}>
					{comment}
				</Text>
			</Stack>
		</Flex>
	);
};
export default CommentComponent;
