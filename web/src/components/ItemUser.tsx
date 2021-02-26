import React from "react";

import { Flex, Image, Stack, Text, useColorMode, Tag } from "@chakra-ui/core";
import api from "../api";

interface User {
	name: String;
	userName: String;
	photo: string;
	IdFollow: Number;
}

const ItemUser: React.FC<User> = ({ name, userName, photo, IdFollow }) => {
	const { colorMode } = useColorMode();

	const id = localStorage.getItem("id");

	async function Follow() {
		try {
			const response = await api.post("/friends", { user_id:id, friend_id:IdFollow });
			console.log(response.data);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<Flex
			flexDirection="row"
			borderTop={colorMode === "light" ? "0.5px solid grey" : "1px solid white"}
			width="100%"
			height="5em"
		>
			<Flex alignItems="center" justifyContent="center" marginLeft="5px">
				<Image
					borderRadius={["100px"]}
					size={["40px", "45px"]}
					src={photo}
					objectFit="cover"
				/>
			</Flex>

			<Stack spacing={1} padding={2} marginTop="5px" marginRight="15px">
				<Text fontSize={["xl", "sm", "lg", "base"]} fontWeight="bold">
					{userName}
				</Text>
				<Text fontSize={["xs", "xl", "sm"]}>{name}</Text>
			</Stack>

			<Tag display="flex" alignSelf="center" onClick={Follow} cursor="pointer" size="sm" h="30%">
				Seguir
			</Tag>
		</Flex>
	);
};
export default ItemUser;
