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

interface DataUser {
	id:Number,
	name: String;
	username: String;
}

const ModalSearch: React.FC = () => {
	const [username, setUserName] = useState("");
	const [page, setPage] = useState(1);
	const [users, setUsers] = useState([]);

	useEffect(() => {
		if (username) {
			api.get(`users/${username}/?page=${page}`).then((response) => {
				setUsers(response.data.users);
				console.log(response.data.users);
			});
		}
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
					{users.map((user:DataUser,index) => (
						<ItemUser key={index} name={user.name} userName={user.username} />
					))}
				</Flex>
			</ModalBody>
		</>
	);
};
export default ModalSearch;
