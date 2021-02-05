import React,{createContext}from "react";

import {Grid,Flex,useColorMode} from "@chakra-ui/core";

import { List } from "@chakra-ui/core";

import Post from "../../components/Post";
import Header from "../../components/Header";




export default function Main() {
	const { colorMode } = useColorMode();

	
	
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
				<Header/>

				<List
					display="flex"
					width="100%"
					height="100%"
					maxHeight="100%"
					overflowX="hidden"
					overflowY="scroll"
					flexDirection="column"
					alignItems="center"
					gridArea="feed"
				>
					
					<Post />
					<Post/>

				</List>
			</Grid>
		</Flex>
	);
}
