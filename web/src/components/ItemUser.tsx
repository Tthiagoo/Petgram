import React from "react";

import { Box, Flex, Image, Stack, Text, useColorMode } from "@chakra-ui/core";

import { FaSearch } from "react-icons/fa";

export default function ItemUser() {
	const { colorMode } = useColorMode();
	
	return (
		<Flex
			flexDirection="row"
			borderBottom={colorMode === "light"? "0.5px solid grey":"1px solid white"}
			width="100%"
			height="5em"
			
		>
			<Flex alignItems="center" justifyContent="center" marginLeft="5px">
				<Image
					borderRadius={["100px"]}
					size={["40px", "45px"]}
					backgroundColor="white"
				/>
			</Flex>

			<Stack spacing={1} padding={2} marginTop="5px">
				<Text fontSize={["xl", "sm", "lg", "base"]} fontWeight="bold">
					Thiaguitoo
				</Text>
				<Text fontSize={["xs", "xl", "sm"]}>Thiago Pereira Araujo Silva</Text>
			</Stack>

			{/*	<Flex
				flexDirection="column"
				height="100%"
				width="75%"
				border="1px solid red"
			>
				<Box height="60%" width="100%" border="1px solid yellow">
					<Text fontSize={["xl", "sm", "lg", "base"]} fontWeight="bold">Thiaguitoo</Text>
				</Box>
				<Box height="40%" width="100%" border="1px solid blue">
				<Text fontSize={["xs","xl", "sm"]}>Thiago Pereira Araujo Silva</Text>
				</Box>
		</Flex>*/}
		</Flex>
	);
}
