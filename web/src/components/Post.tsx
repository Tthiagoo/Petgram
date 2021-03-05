import React, { useEffect } from "react";
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
} from "@chakra-ui/core";

import api from  '../api'

//import Input from "./Input";
import { FaRegHeart, FaRegComments, FaRegPaperPlane } from "react-icons/fa";

import ModalComponent from "./Modal";
import ModalComments from "./ModalComments";

import { ListItem } from "@chakra-ui/core";
import { Link } from "react-router-dom";

interface PostInfo {
	namePost: String;
	user_id: String;
	description: String;
	photoPost: string;
	photoUserPost: string;
}

const Post: React.FC<PostInfo> = ({
	namePost,
	user_id,
	description,
	photoPost,
	photoUserPost,
}) => {
	/*const history = useHistory();

	function handleProfile() {
		history.push("/profile");
	}*/

	const sizes = ["xs", "sm", "md", "lg", "xl", "full"];
	const { colorMode } = useColorMode();
	const { isOpen, onOpen, onClose } = useDisclosure();

	useEffect(() => {
		async function getComments(){
			const response = await api.get('/')
		}

		getComments()
	}, [])

	return (
		<ListItem
			width={["93%", "80%", "90%", "85%", "65%"]}
			marginTop="10px"
			height="auto"
			marginBottom="5px"
		>
			<Grid
				height="auto"
				borderRadius="10px"
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
							<ModalComments />
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
					border="1px solid red"
				>
					<Text marginBottom="10px">
						<Heading size="sm" marginRight="10px" width="auto">
							UserName
						</Heading>
						teste sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve teste
						sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve teste
						sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve tste
						sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve tste
						sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve tste
						sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve tste
						sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve t
					</Text>
					<Text>
						<Heading size="sm" marginRight="10px" width="auto">
							UserName
						</Heading>
						teste sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve teste
						sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve teste
						sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve tste
						sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve tste
						sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve tste
						sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve tste
						sasasasasASsa S eefevveveve teste sasasasasASsa S eefevveveve t
					</Text>
					<Text marginTop="10px" fontWeight="bold" cursor="pointer" onClick={onOpen}>
						Ver todos os 53 comentarios
					</Text>
				</Flex>
				<Flex position="relative" justifyContent="flex-end">
					<Textarea
						display={["none", "flex"]}
						marginTop="10px"
						borderBottomLeftRadius="10px"
						borderBottomRightRadius="10px"
						borderTopRightRadius="0px"
						borderTopLeftRadius="0px"
						placeholder="Adicionar comentario"
						padding="13px 55px 13px 13px"
					/>
					<Button position="absolute" variant="outline" top="43%" right="3%">
						<FaRegPaperPlane />
					</Button>
				</Flex>
			</Grid>
		</ListItem>
	);
};
export default Post;
