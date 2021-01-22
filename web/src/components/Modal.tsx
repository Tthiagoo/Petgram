import React from "react";

import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	IModal as ModalProps,
	Box,
	Flex,
	List,
	ListItem,
} from "@chakra-ui/core";
import Input from "./Input";
import ItemUser from "./ItemUser";
import { FaSearch } from "react-icons/fa";

const ModalUi: React.FC<ModalProps> = ({ isOpen, onClose }) => {
	const sizes = ["xs", "sm", "md", "lg", "xl", "full"];

	return (
		<Modal isOpen={isOpen} onClose={onClose} size="sm">
			<ModalOverlay />
			<ModalContent borderRadius={10}>
				<ModalHeader display="flex" justifyContent="center">
					Pesquisar
				</ModalHeader>
				<ModalCloseButton />
				<ModalBody
					display="flex"
					flexDirection="column"
					alignItems="center"
					justifyContent="center"
				>
					<Input
						width="90%"
						height="10%"
						fontSize="1em"
						paddingY="10px"
						paddingLeft="35px"
					/>
					<FaSearch
						style={{
							position: "relative",
							left: "28px",
							bottom: "28px",
							alignSelf: "end",
						}}
					/>
					<Flex
						maxHeight="21em"
						overflowY="auto"
						width="100%"
						flexDirection="column"
					
					>
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

				<ModalFooter></ModalFooter>
			</ModalContent>
		</Modal>
	);
};
export default ModalUi;
