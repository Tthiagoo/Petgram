import React, { useState } from "react";
import { Box, useDisclosure } from "@chakra-ui/core";
import { FaRegTimesCircle } from "react-icons/fa";
import api from "../api";
import ModalComponent from "./Modal";
import ModalShowPhoto from "./ModalShowPhoto";

import { PostProps } from "./Post";
/*interface PostInfo {
	idPhoto: Number;
	photo: string;
}*/

const BoxImage: React.FC<PostProps> = ({ ...props }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const sizes = ["xs", "sm", "md", "lg", "xl", "full"];
	const [mouseOver, setMouseOver] = useState(false);

	const idUser = localStorage.getItem("id");

	async function handleDeletePhoto() {
		try {
			await api.delete(`post/${props.idPost}`, {
				headers: {
					Authorization: idUser,
				},
			});
			alert("deu certo");
		} catch (err) {
			alert("Erro ao deletar caso, tente novamente.");
		}
	}

	return (
		<Box
			display="flex"
			w="100%"
			maxHeight={["120px", "200px", "320px", "340"]}
			h={["120px", "200px", "320px", "340"]}
			id={`${props.idPost}`}
			borderRadius="10px"
			backgroundImage={`url(${props.photoPost})`}
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
					idPost={props.idPost}
					namePost={props.namePost}
					photoPost={props.photoPost}
					photoUserPost={props.photoUserPost}
					user_id={props.user_id}
				/>
			</ModalComponent>

			<FaRegTimesCircle
				size={25}
				onClick={handleDeletePhoto}
				color={mouseOver === true ? "black" : "rgba(124, 127, 118, 0)"}
			/>
		</Box>
	);
};

export default BoxImage;
