import React, { createContext, useEffect, useState } from "react";

import { Grid, Flex, useColorMode } from "@chakra-ui/core";

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
					templateColumns={["1fr", "1fr", "1fr", "1fr 40%", "1fr 30%"]}
					gridTemplateAreas={["posts", "posts", "posts", "'posts' 'info'"]}
					width="100%"
					height="100%"
				>
					<List
						display="flex"
						width="100%"
						height="100%"
						maxHeight="100%"
						overflowX="hidden"
						overflowY="scroll"
						flexDirection="column"
						alignItems="center"
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
				</Grid>
			</Grid>
		</Flex>
	);
}
