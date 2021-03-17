import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import {
	Heading,
	Grid,
	Flex,
	Text,
	useColorMode,
	Box,
	Image,
	useDisclosure,
	Textarea,
	Button,
	InputGroup,
	InputRightElement,
} from "@chakra-ui/core";

import api from "../api";

//import Input from "./Input";
import { FaRegHeart, FaRegComments, FaRegPaperPlane } from "react-icons/fa";

import ModalComponent from "./Modal";
import ModalComments from "./ModalComments";

import { ListItem } from "@chakra-ui/core";
import { Link } from "react-router-dom";


export interface Comment {
	idComment: number;
	comment: string;
	photoComment: string;
	post_id?: string;
	user_id: string;
	usernameComment: string;
}

interface PostInfo {
	idPost: number;
	namePost: String;
	user_id: String;
	description: String;
	photoPost: string;
	photoUserPost: string;
}

const Post: React.FC<PostInfo> = ({
	idPost,
	namePost,
	user_id,
	description,
	photoPost,
	photoUserPost,
}) => {
	const sizes = ["xs", "sm", "md", "lg", "xl", "full"];
	const { colorMode } = useColorMode();

	const { isOpen, onOpen, onClose } = useDisclosure();
	const [comments, setComments] = useState<Comment[]>([]);
	const [commentsSlice, setCommentsSlice] = useState<Comment[]>([]);
	const [countComments, setCountComments] = useState(0);
	const [comment, setComment] = useState("");

	const id = localStorage.getItem("id");

	const username = localStorage.getItem("username");

	async function handleSubmitComment(e: FormEvent) {
		try {
			e.preventDefault();
			const data = new FormData();

			data.append("usernameComment", username!);
			data.append("post_id", idPost as any);
			data.append("comment", comment);
			data.append("user_id", id!);

			await api.post("/comment/", data, {
				headers: {
					Authorization: id,
				},
			});
			console.log(data);
		} catch (error) {
			alert(error);
		}
	}

	useEffect(() => {
		async function getComments() {
			const response = await api.get(`/comment/${idPost}/1`);
			console.log(response.data);
			const { Comments } = response.data;
			setComments(Comments);
			//console.log(comments.slice(0,2))
		}

		getComments();
	}, []);

	useEffect(() => {
		setCommentsSlice(comments.slice(0, 2));
	}, [comments]);

	useEffect(() => {
		setCountComments(comments.length);
	}, [comments]);

	return (
		<ListItem
			width={["93%", "80%", "90%", "85%", "65%"]}
			marginTop="10px"
			height="auto"
			marginBottom="5px"
		>
			<Grid
				height="auto"
				borderRadius="15px"
				width="100%"
				templateColumns={["1fr"]}
				backgroundColor={colorMode === "light" ? "#dae7f1" : "blue.600"}
				gridTemplateAreas={["'header' 'photo' 'icons' 'description' 'comments' "]}
			>
				<Flex
					alignItems="center"
					flexDirection="row"
					w="100%"
					h="90%"
					gridArea="header"
					padding="5px"
					marginTop="15px"
				>
					<Image
						borderRadius={["100px"]}
						size={["30px", "45px"]}
						marginLeft="5px"
						src={photoUserPost}
						objectFit="cover"
					/>
					<Heading size="sm" marginLeft="10px" cursor="pointer">
						<Link to={`/profile/${user_id}`}>{namePost}</Link>
					</Heading>
				</Flex>

				<Flex
					marginTop="15px"
					gridArea="photo"
					width="100%"
					height={["20em", "30em", "30em"]}
					justifyContent="center"
				>
					<Image
						width={["95%", "95%", "90%", "95%", "95%"]}
						height="100%"
						src={photoPost}
						borderRadius="10px"
						objectFit="cover"
					/>
				</Flex>

				<Flex
					gridArea="icons"
					w="95%"
					h="100%"
					paddingTop="15px"
					paddingLeft="18px"
				>
					<Box>
						<FaRegHeart size={28} style={{ marginRight: "10px" }} cursor="pointer" />
						<Text style={{ fontWeight: "bold" }}>210</Text>
					</Box>

					<Box marginLeft="10px">
						<FaRegComments size={28} cursor="pointer" onClick={onOpen} />
						<ModalComponent isOpen={isOpen} onClose={onClose} size={sizes} id="1">
							<ModalComments comments={comments} idPost={idPost}/>
						</ModalComponent>
					</Box>
				</Flex>

				<Flex
					flexDirection="row"
					w="100%"
					height="auto"
					gridArea="description"
					paddingLeft="18px"
					paddingTop="15px"
					marginBottom="10px"
				>
					<Text>
						<Heading size="sm" marginRight="10px" width="auto">
							{namePost}
						</Heading>
						{description}
					</Text>
				</Flex>
				<Flex
					gridArea="comments"
					w="100%"
					height="auto"
					maxHeight="200px"
					overflowX="hidden"
					overflowY="scroll"
					paddingLeft="17px"
					paddingBottom="10px"
					paddingTop="10px"
					flexDirection="column"
					marginTop="10px"
				>
					{commentsSlice.map((comment, index) => (
						<Text marginBottom="10px" key={index}>
							<Heading size="sm" marginRight="10px" width="auto">
								{comment.usernameComment}
							</Heading>
							{comment.comment}
						</Text>
					))}

					<Text marginTop="10px" fontWeight="bold" cursor="pointer" onClick={onOpen}>
						{`Ver todos os ${countComments} comentarios`}
					</Text>
				</Flex>
				<Flex
					display={["none", "none", "flex", "flex"]}
					justifyContent="flex-end"
					borderBottomLeftRadius="15px"
					borderBottomRightRadius="15px"
					alignItems="center"
				>
					<InputGroup w="100%">
						<Textarea
							focusBorderColor="none"
							placeholder="Enter password"
							w="100%"
							paddingRight="70px"
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setComment(e.target.value)
							}
						/>
						<InputRightElement marginTop="10px" width="4.5rem">
							<Button h="1.75rem" size="sm">
								<FaRegPaperPlane onClick={handleSubmitComment} />
							</Button>
						</InputRightElement>
					</InputGroup>
				</Flex>
			</Grid>
		</ListItem>
	);
};
export default Post;
