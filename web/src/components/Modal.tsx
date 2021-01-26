import React from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,

  ModalBody,
  ModalCloseButton,
  IModal as ModalProps,
  
  Flex,
 
  useColorMode,
} from "@chakra-ui/core";
import Input from "./Input";
import ItemUser from "./ItemUser";
import { FaSearch } from "react-icons/fa";

const ModalUi: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  
  const { colorMode } = useColorMode();

  return (
	  
    <Modal isOpen={isOpen} onClose={onClose} size="sm">
      <ModalOverlay />
      <ModalContent
        backgroundImage={
          colorMode === "light"
            ? "linear-gradient(to left bottom, #a6bbcd, #aecbd2, #c0d8d5, #d6e4da, #edf0e5);"
            : "linear-gradient(to right top, #33383d, #1e3752, #152d48, #0c243e, #041b34);"
        }
        borderRadius={10}
      >
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

        
      </ModalContent>
    </Modal>
  );
};
export default ModalUi;
