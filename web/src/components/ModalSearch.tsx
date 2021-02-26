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
	id: Number;
	name: String;
	username: String;
	photo: string;
}

const ModalSearch: React.FC = () => {
	const id = localStorage.getItem("id");

	const [username, setUserName] = useState("");
	const [page, setPage] = useState(1);
	const [users, setUsers] = useState([]);
	const [checkUser,setChekUser] = useState(false)
	//const [loading, setLoading] = useState(true);

	useEffect(() => {
		getUsers();
		checkFollower();
		//console.log(document.documentElement.scrollTop)
	}, [username, page]);

	function getUsers() {
		if (username) {
			api.get(`users/${username}/?page=${page}`).then((response) => {
				setUsers(response.data);
				//console.log(page);
				//console.log(response.data);
				//	setLoading(false);
				//console.log(loading)
			});
		}
	}
	function checkFollower() {
		if (username) {
			users.forEach(async (user: DataUser) => {
			
				await api.get(`/friends/${id}/${user.id}`).then((response) => {
					console.log(response.data);
				});
			});
		}
	}

	useEffect(() => {
		document.addEventListener("scroll", handleScroll);
		console.log("foi ate o final");
	}, [username]);

	function handleScroll() {
		console.log("foi no scroll");
		setPage(page + 1);
	}

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
						left: "30px",
						bottom: "28px",
						alignSelf: "end",
					}}
				/>
				<Flex maxHeight="21em" overflowY="auto" width="100%" flexDirection="column">
					{users.map((user: DataUser, index) => (
						<ItemUser
							key={index}
							name={user.name}
							userName={user.username}
							photo={user.photo}
							IdFollow={user.id}
						/>
					))}
				</Flex>
			</ModalBody>
		</>
	);
};
export default ModalSearch;
