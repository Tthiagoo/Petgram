import React, { ChangeEvent, useEffect, useState } from "react";
import api from "../api";
import {
	ModalHeader,
	ModalBody,
	ModalCloseButton,
	Flex,
} from "@chakra-ui/core";
import Input from "./Input";
import ItemUser from "./ItemUser";
import { FaSearch } from "react-icons/fa";

const ModalSearch: React.FC = () => {
	const [username, setUserName] = useState("");

	useEffect(() => {
		api.get('users')
	}, [username]);
	return (
		<>
			<ModalHeader display="flex" justifyContent="center">
				Encontre um usuário
			</ModalHeader>
			<ModalCloseButton marginBottom="10px" />

			<ModalBody
				display="flex"
				flexDirection="column"
				alignItems="center"
				justifyContent="center"
			>
				<Input
					value={username}
					width="90%"
					height="10%"
					fontSize="1em"
					paddingY="10px"
					paddingLeft="35px"
					onChange={(e: ChangeEvent<HTMLInputElement>) => {
						setUserName(e.target.value);
					}}
				/>
				<FaSearch
					style={{
						position: "relative",
						left: "28px",
						bottom: "28px",
						alignSelf: "end",
					}}
				/>
				<Flex maxHeight="21em" overflowY="auto" width="100%" flexDirection="column">
					<ItemUser />
					<ItemUser />
					<ItemUser />
					<ItemUser />
					<ItemUser />
					<ItemUser />
					<ItemUser />
					<ItemUser />
				</Flex>
			</ModalBody>
		</>
	);
};
export default ModalSearch;
