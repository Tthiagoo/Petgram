import React, { useEffect, useState, useContext } from "react";

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
import api from "../../api";
import Header from "../../components/Header";
import BoxImage from "../../components/BoxImage";

import Context from "../Main";

interface UserInfo {
	id: Number;
	username: String;
	photo: string;
	photoPost: string;
	bio: String;
	postId: Number;
}

export default function Profile() {
	const [photos, setPhotos] = useState<UserInfo[]>([]);
	const [countPhoto, setCountPhoto] = useState(0);
  //const [countFollowers, setCountFollowers] = useState(0)
	const { colorMode } = useColorMode();

	const username = localStorage.getItem("username");
	const name = localStorage.getItem("name");
	const id = localStorage.getItem("id");
	const bio = localStorage.getItem("bio");
	const photo = localStorage.getItem("photo");

	useEffect(() => {
		async function getUserData() {
			await api.get(`user/${id}`).then((response) => {
				const { serializedUserInfo } = response.data;
				console.log(serializedUserInfo);
				//setCountPhoto(photos.length);
				setPhotos(serializedUserInfo);
			});
		}
		getUserData();
	},[]);

	useEffect(() => {
		setCountPhoto(photos.length);
	}, [photos]);

	return (
		<Flex
			height="100vh"
			alignItems="center"
			justifyContent="start"
			backgroundColor={colorMode === "light" ? "blue.400" : "blue.600"}
			flexDirection="column"
		>
			<Box height="10%" w="100%">
				<Header />
			</Box>

			<Flex
				flexDirection="column"
				overflowX="hidden"
				height="100%"
				maxHeight="100%"
				overflowY="scroll"
				w="100%"
			>
				<Flex
					w="100%"
					h="auto"
					flexDirection="column"
					marginTop="25px"
					alignItems="center"
				>
					<Flex
						w="100%"
						minH="50%"
						flexDirection="row"
						justifyContent={["", "", "", "", "center"]}
						marginBottom={["0px", "0px", "0px", "0px", "15px"]}
					>
						<Flex
							h="100%"
							w={["40%", "50%", "50%", "50%", "70%"]}
							alignItems="center"
							justifyContent={["center", "center", "center", "center", "flex-end"]}
						>
							<Image
								borderRadius={["100px"]}
								size={["120px", "160px"]}
								marginRight={["0px", "0px", "0px", "0px", "200px"]}
								src={`http://localhost:3333/uploads/${photo}`}
							/>
						</Flex>
						<Flex
							w={["70%", "80%"]}
							height="100%"
							flexDirection="column"
							justifyContent="center"
						>
							<Flex w="100%" h="20%" alignItems="center" marginBottom="5px">
								<Heading fontSize={["1.6rem", "2.4rem"]} marginRight="7px">
									{username}
								</Heading>
								<Box>
									<Link to="">
										<Badge
											h={["30px", "50px"]}
											fontSize={["0.7rem", "1rem"]}
											display="flex"
											alignItems="center"
											variant="outline"
										>
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
									<Heading as="h5" fontSize={["1.2rem", "1.6rem"]}>
										{countPhoto}
									</Heading>
									<Text fontSize={["0.8rem", "1.2rem"]}>Publicações</Text>
								</Flex>
								<Flex h="100%" width="auto" alignItems="center" flexDirection="column">
									<Heading as="h5" fontSize={["1.2rem", "1.6rem"]}>
										103
									</Heading>
									<Text fontSize={["0.8rem", "1.2rem"]}>Seguidores</Text>
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
					marginBottom="10px"
					alignItems="center"
				>
					<Box
						w={["100%", "100%", "100%", "100%", "70%"]}
						maxWidth={["100%", "100%", "100%", "100%", "70%"]}
					>
						<Heading fontSize={["1.0rem", "1.4rem"]}>{name}</Heading>
						<Text
							fontSize={["0.8rem", "1.4rem", "1.0rem"]}
							paddingX={["0px,0px,15px"]}
						>
							{bio}
						</Text>
					</Box>
				</Flex>

				<Grid
					templateColumns={[
						"repeat(3, 1fr)",
						"repeat(3, 1fr)",
						"repeat(3, 1fr)",
						"repeat(3, 1fr)",
						"repeat(3, 1fr)",
					]}
					marginTop="10px"
					paddingX={["0px", "18px", "30px", "30px", "150px"]}
					gap={[2, 4, 8]}
					borderTop="1px solid grey"
					paddingTop="15px"
				>
					{photos.map((user, index) => (
						<BoxImage key={index} id={user.postId} photo={user.photoPost} />
					))}
				</Grid>
			</Flex>
		</Flex>
	);
}
