import React, { useState } from "react";
import { Box, useDisclosure } from "@chakra-ui/core";
import { FaRegTimesCircle } from "react-icons/fa";
import api from "../services/api";
import ModalComponent from "./Modal";
import ModalShowPhoto from "./ModalShowPhoto";

import { PostProps } from "./Post";
/*interface PostInfo {
	idPhoto: Number;
	photo: string;
}*/

const BoxImage: React.FC<PostProps> = ({ ...props }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	console.log(props);
	const sizes = ["xs", "sm", "md", "lg", "xl", "full"];
	const [mouseOver, setMouseOver] = useState(false);

	const user_id = localStorage.getItem("id");

	async function handleDeletePhoto() {
		try {
			await api.delete(`post/${props.id}`, {
				headers: {
					Authorization: user_id,
				},
			});
			alert("deu certo");
		} catch (err) {
			alert("Erro ao deletar, tente novamente.");
		}
	}

	return (
		<Box
			display="flex"
			w="100%"
			maxHeight={["120px", "200px", "320px", "340"]}
			h={["120px", "200px", "320px", "340"]}
			id={`${props.id}`}
			borderRadius="10px"
			backgroundImage={`url(http://localhost:3333/uploads/${props.photoPost})`}
			backgroundSize="cover"
			cursor="pointer"
			justifyContent="flex-end"
			alignItems="start"
			padding="15px"
			onMouseOver={() => setMouseOver(true)}
			onMouseLeave={() => setMouseOver(false)}
		>
			<ModalComponent isOpen={isOpen} onClose={onClose} size="xg" id="1">
				<ModalShowPhoto
					description={props.description}
					id={props.id}
					namePost={props.namePost}
					photoPost={props.photoPost}
					photoUserPost={props.photoUserPost}
					user_id={props.user_id}
				/>
			</ModalComponent>

			<FaRegTimesCircle
				size={28}
				onClick={handleDeletePhoto}
				color={mouseOver === true ? "black" : "rgba(124, 127, 118, 0)"}
			/>
		</Box>
	);
};

export default BoxImage;
