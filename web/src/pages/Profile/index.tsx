import React from "react";

import {
	Grid,
	Flex,
	useColorMode,
	Box,
	Image,
	Heading,
	Badge,
	Text,
} from "@chakra-ui/core";

import { Link } from "react-router-dom";

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
				templateRows={["7% 33% 1fr"]}
				templateAreas={["'logo' 'profile' 'photos'"]}
			>
				<Header />
				<Flex
					w="100%"
					h="auto"
					flexDirection="column"
					gridArea="profile"
					
				>
					<Flex w="100%" minH="60%" flexDirection="row">
						<Flex h="100%" w="40%" alignItems="center" justifyContent="center">
							<Image
								borderRadius={["100px"]}
								size={["120px", "40px"]}
								backgroundColor="white"
							/>
						</Flex>
						<Flex
							w="70%"
							height="100%"
							flexDirection="column"
							justifyContent="center"
						>
							<Flex w="100%" h="20%" alignItems="center" marginBottom="5px">
								<Heading fontSize="1.6rem" marginRight="7px">
									UserName
								</Heading>
								<Box>
									<Link to="">
										<Badge h="30px" display="flex" alignItems="center" variant="outline">
											Editar Perfil
										</Badge>
									</Link>
								</Box>
							</Flex>

							<Flex w="100%" h="27%" justifyContent="start">
								<Flex
									h="100%"
									width="auto"
									alignItems="center"
									marginRight="20px"
									flexDirection="column"
								>
									<Heading as="h5" fontSize="1.2rem">
										103
									</Heading>
									<Text fontSize="0.8rem">Publicações</Text>
								</Flex>
								<Flex h="100%" width="auto" alignItems="center" flexDirection="column">
									<Heading as="h5" fontSize="1.2rem">
										103
									</Heading>
									<Text fontSize="0.8rem">Amigos</Text>
								</Flex>
							</Flex>
						</Flex>
					</Flex>
					<Flex w="100%" height="auto"   flexDirection="column" paddingLeft="13px" paddingRight="13px">
						<Heading fontSize="1.0rem">
							Fulano de Beltrano
						</Heading>
						<Text>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
							veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
							commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
							velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
							occaecat cupidatat non proident, sunt in culpa qui officia deserunt
							mollit anim id est laborum.
						</Text>
					</Flex>
				</Flex>
			</Grid>
		</Flex>
	);
}
