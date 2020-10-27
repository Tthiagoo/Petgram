import React from "react";

import { Grid, Flex, useColorMode, Box } from "@chakra-ui/core";

import Header from "../../components/Header";

export default function Profile() {
	const { colorMode } = useColorMode();

	return (
		<Flex
			height="100vh"
			alignItems="center"
			justifyContent="center"
			backgroundColor={colorMode === "light" ? "blue.400" : "blue.600"}
		>
			<Grid
				as="main"
				w="100%"
				h="100%"
				maxH="100%"
				overflowX="hidden"
				overflowY="scroll"
				templateColumns={["1fr"]}
				templateRows={["7% 35% 1fr"]}
				templateAreas={["'logo' 'profile' 'photos'"]}
			>
				<Header />
				<Flex w="100%" h="100%" flexDirection="column" border="1px solid yellow">
					<Box w="100%" h="60%" border="1px solid red"></Box>
					<Box w="100%" h="20" border="1px solid blue"></Box>
				</Flex>
			</Grid>
		</Flex>
	);
}
