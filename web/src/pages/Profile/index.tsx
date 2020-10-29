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
			justifyContent="start"
			backgroundColor={colorMode === "light" ? "blue.400" : "blue.600"}
			flexDirection="column"
		>
			<Box height="7%" w="100%">
				<Header />
			</Box>

			<Flex
				flexDirection="column"
				overflowX="hidden"
				height="100%"
				maxHeight="100%"
				overflowY="scroll"
			>
				<Flex w="100%" h="auto" flexDirection="column" marginTop="25px">
					<Flex w="100%" minH="50%" flexDirection="row">
						<Flex h="100%" w={["40%","50%","50%","50%","70%"]} alignItems="center" justifyContent="center">
							<Image
								borderRadius={["100px"]}
								size={["120px", "160px"]}
								backgroundColor="white"
							/>
						</Flex>
						<Flex
							w={["70%","80%"]}
							height="100%"
							flexDirection="column"
							justifyContent="center"
						
						>
							<Flex w="100%" h="20%" alignItems="center" marginBottom="5px">
								<Heading fontSize={["1.6rem","2.4rem"]} marginRight="7px">
									UserName
								</Heading>
								<Box>
									<Link to="">
										<Badge h={["30px",'50px']} fontSize={['0.7rem','1rem']} display="flex" alignItems="center" variant="outline">
											Editar Perfil
										</Badge>
									</Link>
								</Box>
							</Flex>

							<Flex w="100%" h="27%" justifyContent="start" marginTop="10px">
								<Flex
									h="100%"
									width="auto"
									alignItems="center"
									marginRight="20px"
									flexDirection="column"
									
								>
									<Heading as="h5" fontSize={["1.2rem",'1.6rem']}>
										103
									</Heading>
									<Text fontSize={["0.8rem",'1.2rem']}>Publicações</Text>
								</Flex>
								<Flex h="100%" width="auto" alignItems="center" flexDirection="column">
									<Heading as="h5" fontSize={["1.2rem",'1.6rem']}>
										103
									</Heading>
									<Text fontSize={["0.8rem",'1.2rem']}>Amigos</Text>
								</Flex>
							</Flex>
						</Flex>
					</Flex>
				</Flex>
				<Flex
					w="100%"
					height="auto"
					flexDirection="column"
					paddingLeft="13px"
					paddingRight="13px"
					marginTop="15px"
				>
					<Heading fontSize={["1.0rem",'1.6rem']}>Fulano de Beltrano</Heading>
					<Text fontSize={["0.8rem",'1.4rem','1.4rem']}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
						velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
						cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
						est laborum.
					</Text>
				</Flex>
			
					<Grid templateColumns={["repeat(3, 1fr)",'repeat(3, 1fr)']}  marginTop="10px" paddingX={['0px','18px']} gap={[2,4]}>
						<Box w="100%" h={['120px','200px']} bg="grey" />
						<Box w="100%" h={['120px','200px']} bg="grey" />
						<Box w="100%" h={['120px','200px']} bg="grey" />
						<Box w="100%" h={['120px','200px']} bg="grey" />
						<Box w="100%" h={['120px','200px']} bg="grey" />
						<Box w="100%" h={['120px','200px']} bg="grey" />
						<Box w="100%" h={['120px','200px']} bg="grey" />
						<Box w="100%" h={['120px','200px']} bg="grey" />
						<Box w="100%" h={['120px','200px']} bg="grey" />
						<Box w="100%" h={['120px','200px']} bg="grey" />
						<Box w="100%" h={['120px','200px']} bg="grey" />
					
					</Grid>
				
			</Flex>
		</Flex>
	);
}
