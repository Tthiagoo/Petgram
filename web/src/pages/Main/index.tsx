import React, { createContext, useEffect, useState } from "react";

import {
	Grid,
	Flex,
	useColorMode,
	Box,
	Image,
	Stack,
	Text,
} from "@chakra-ui/core";

import { List } from "@chakra-ui/core";

import Post from "../../components/Post";
import Header from "../../components/Header";

import api from "../../api";

interface PostInfo {
	namePost: String;
	user_id: String;
	description: String;
	photoPost: string;
	photoUserPost: string;
}

export default function Main() {
	const { colorMode } = useColorMode();
	const id = localStorage.getItem("id");
	const [posts, setPosts] = useState<PostInfo[]>([]);
	const [page, setPage] = useState(1);

	useEffect(() => {
		async function getPhotos() {
			await api.get(`post/${id}/?page=${page}`).then((response) => {
				setPosts(response.data);
			});
		}
		getPhotos();
	}, []);

	return (
		<Flex
			height="100vh"
			alignItems="center"
			justifyContent="center"
			backgroundImage={
				colorMode === "light"
					? "linear-gradient(to left bottom, #a6bbcd, #aecbd2, #c0d8d5, #d6e4da, #edf0e5);"
					: "linear-gradient(to right top, #33383d, #1e3752, #152d48, #0c243e, #041b34);"
			}
		>
			<Grid
				as="main"
				height="100%"
				width="100%"
				templateColumns={["1fr"]}
				templateRows={["1fr 92%"]}
				gridTemplateAreas={["'logo' 'feed'"]}
			>
				<Header />
				
				<Grid
					gridArea="feed"
					templateRows="1fr"
					templateColumns={["1fr", "1fr", "1fr", "1fr 40%", "1fr 40%"]}
					gridTemplateAreas={["posts", "posts", "posts", "'posts' 'info'"]}
					width="100%"
					height="100%"
					overflowX="hidden"
					overflowY="scroll"
				>
					<List
						display="flex"
						width="100%"
						height="auto"
						flexDirection="column"
						alignItems={["center", "center", "center", "flex-end"]}
						gridArea="posts"
						style={{ WebkitScrollSnapType: "none" }}
					>
						{posts.map((post, index) => (
							<Post
								key={index}
								namePost={post.namePost}
								description={post.description}
								user_id={post.user_id}
								photoPost={post.photoPost}
								photoUserPost={post.photoUserPost}
							/>
						))}
					</List>

					<Flex
						display={["none", "none", "none", "flex"]}
						width="100%"
						height="100%"
						justifyContent="start"
					>
						<Flex
							width="30%"
							height="20%"
							backgroundColor="rgba(255, 255, 255, 0.1)"
							position="fixed"
							marginTop="20px"
							marginLeft="10px"
							borderRadius="10px"
							boxShadow="5px 5px 15px 5px rgba(0,0,0,0.40)"
							alignItems="center"
							flexDirection="column"
						>
							<Flex
								marginTop="15px"
								width="90%"
								height="30%"
								border="1px solid blue"
								alignItems="center"
								flexDirection="row"
							>
								<Image rounded="full" size="60px" backgroundColor="white" />
								<Stack spacing={1} padding={3}>
									<Text fontSize={["sm","md"]} fontWeight="bold">
										Tthiagoo
									</Text>
									<Text fontSize={["sm","md"]}>
										Thiago Pereira Araujo Silva
									</Text>
								</Stack>
							</Flex>
						</Flex>
					</Flex>
				</Grid>
			</Grid>
		</Flex>
	);
}
