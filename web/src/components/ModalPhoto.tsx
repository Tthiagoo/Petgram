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
  
  Flex,

  useColorMode,
} from "@chakra-ui/core";
import Input from "./Input";

import Comment from "./Comment";

const ModalPhoto: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const sizes = ["xs", "sm", "md", "lg", "xl", "full"];
  const { colorMode } = useColorMode();
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={sizes}>
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
          Comentarios
        </ModalHeader>
        <ModalCloseButton marginBottom="10px" />
        <ModalBody
          display="flex"
          flexDirection="column"
     
        >
          <Flex
            maxHeight="21em"
            overflowY="auto"
            width="100%"
            flexDirection="column"
           
            justifyContent="start"
          >
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            
          </Flex>
        </ModalBody>

        <ModalFooter
          display="flex"
          justifyContent="center"
         
        >
          <Input placeholder="Escreva seu comentario" />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default ModalPhoto;
