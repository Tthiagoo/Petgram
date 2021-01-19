import React from "react";

import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,

  IModal as ModalProps

} from "@chakra-ui/core";

const ModalUi: React.FC<ModalProps> = ({isOpen, onClose}) => {
 

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Modal Title</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem facere
					distinctio, ut aut numquam sed eum modi dolores corporis beatae eaque
					obcaecati similique eos veniam minus assumenda cumque, alias explicabo.
				</ModalBody>

				<ModalFooter>
				
				
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}
export default ModalUi
