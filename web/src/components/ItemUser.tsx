import React from "react";

import { Flex, Image, Stack, Text, useColorMode } from "@chakra-ui/core";

interface User {
	name: String;
	userName: String;
	photo: string;
}

const ItemUser: React.FC<User> = ({ name, userName, photo }) => {
	const { colorMode } = useColorMode();

	return (
		<Flex
			flexDirection="row"
			borderTop={colorMode === "light" ? "0.5px solid grey" : "1px solid white"}
			width="100%"
			height="5em"
		>
			<Flex alignItems="center" justifyContent="center" marginLeft="5px">
				<Image borderRadius={["100px"]} size={["40px", "45px"]} src={photo} objectFit="cover" />
			</Flex>

			<Stack spacing={1} padding={2} marginTop="5px">
				<Text fontSize={["xl", "sm", "lg", "base"]} fontWeight="bold">
					{userName}
				</Text>
				<Text fontSize={["xs", "xl", "sm"]}>{name}</Text>
			</Stack>
		</Flex>
	);
};
export default ItemUser;
